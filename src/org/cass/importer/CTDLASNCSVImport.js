const EcArray = require("../../../com/eduworks/ec/array/EcArray");

module.exports = class CTDLASNCSVImport {
	static analyzeFile(file, success, failure) {
		if (file == null) {
			failure("No file to analyze");
			return;
		}
		if (file["name"] == null) {
			failure("Invalid file");
		} else if (!file["name"].endsWith(".csv")) {
			failure("Invalid file type");
		}
		Papa.parse(file, {
			encoding: "UTF-8",
			complete: function(results) {
				var tabularData = results["data"];
				var colNames = tabularData[0];
				var nameToCol = {};
				for (var i = 0; i < colNames.length; i++)
					nameToCol[colNames[i]] = i;
				var frameworkCounter = 0;
				var competencyCounter = 0;
				var typeCol = nameToCol["@type"];
				if (typeCol == null) {
					this.error("No @type in CSV.");
					return;
				}
				for (var i = 0; i < tabularData.length; i++) {
					if (i == 0) continue;
					var col = tabularData[i];
					if (
						col[typeCol] != null &&
						col[typeCol].trim() == "ceasn:CompetencyFramework"
					)
						frameworkCounter++;
					else if (
						col[typeCol] != null &&
						col[typeCol].trim() == "ceasn:Competency"
					)
						competencyCounter++;
					else if (col[typeCol] == null || col[typeCol] == "")
						continue;
					else {
						this.error("Found unknown type:" + col[typeCol]);
						return;
					}
				}
				success(frameworkCounter, competencyCounter);
			},
			error: failure
		});
	}
	static importFrameworksAndCompetencies(
		repo,
		file,
		success,
		failure,
		ceo,
		endpoint,
		eim
	) {
		if (eim === undefined || eim == null)
			eim = EcIdentityManager.default;
		if (file == null) {
			failure("No file to analyze");
			return;
		}
		if (file["name"] == null) {
			failure("Invalid file");
		} else if (!file["name"].endsWith(".csv")) {
			failure("Invalid file type");
		}
		Papa.parse(file, {
			header: true,
			encoding: "UTF-8",
			complete: function(results) {
				var tabularData = results["data"];
				var frameworks = {};
				var frameworkArray = [];
				var frameworkRows = {};
				var competencies = [];
				var competencyRows = {};
				var relations = [];
				var relationById = {};
				new EcAsyncHelper().each(
					tabularData,
					function(pretranslatedE, callback0) {
						if (
							pretranslatedE["@type"] ==
							"ceasn:CompetencyFramework"
						) {
							var translator = new EcLinkedData(null, null);
							translator.copyFrom(pretranslatedE);
							CTDLASNCSVImport.cleanUpTranslator(
								translator,
								endpoint,
								repo
							);
							translator.recast(
								"https://schema.cassproject.org/0.4/ceasn2cass",
								"https://schema.cassproject.org/0.4",
								function(e) {
									var f = new EcFramework();
									f.copyFrom(e);
									if (EcFramework.template != null) {
										for (var key in EcFramework.template) {
											if (key.equals("@owner")) {
												f["owner"] =
													EcFramework.template[key];
											} else {
												f[key] =
													EcFramework.template[key];
											}
										}
									}
									if (e["owner"] != null) {
										var id = new EcIdentity();
										id.ppk = EcPpk.fromPem(e["owner"]);
										f.addOwner(id.ppk.toPk());
										eim.addIdentityQuietly(
											id
										);
									}
									if (ceo != null) f.addOwner(ceo.ppk.toPk());
									if (
										EcFramework.template != null &&
										EcFramework.template[
											"schema:dateCreated"
										] != null
									) {
										CTDLASNCSVImport.setDateCreated(e, f);
									}
									frameworks[f.shortId()] = f;
									frameworkRows[f.shortId()] = e;
									f["ceasn:hasChild"] = null;
									f["ceasn:hasTopChild"] = null;
									frameworkArray.push(f);
									f.competency = [];
									f.relation = [];
									callback0();
								},
								failure
							);
						} else if (
							pretranslatedE["@type"] == "ceasn:Competency"
						) {
							var translator = new EcLinkedData(null, null);
							translator.copyFrom(pretranslatedE);
							CTDLASNCSVImport.cleanUpTranslator(
								translator,
								endpoint,
								repo
							);
							translator.recast(
								"https://schema.cassproject.org/0.4/ceasn2cass",
								"https://schema.cassproject.org/0.4",
								function(e) {
									var f = new EcCompetency();
									f.copyFrom(e);
									if (e["id"] == null) {
										callback0();
										return;
									}
									if (e["ceasn:isPartOf"] != null) {
										let shortId = EcRemoteLinkedData.trimVersionFromUrl(e["ceasn:isPartOf"]);
										frameworks[shortId].competency.push(f.shortId());
									} else {
										var parent = e;
										var done = false;
										while (!done && parent != null) {
											if (
												parent["ceasn:isChildOf"] !=
													null &&
												parent["ceasn:isChildOf"] != ""
											) {
												parent =
													competencyRows[
														EcRemoteLinkedData.trimVersionFromUrl(
															parent[
																"ceasn:isChildOf"
															]
														)
													];
											} else if (
												parent["ceasn:isTopChildOf"] !=
													null &&
												parent["ceasn:isTopChildOf"] !=
													""
											) {
												parent =
													frameworkRows[
														EcRemoteLinkedData.trimVersionFromUrl(
															parent[
																"ceasn:isTopChildOf"
															]
														)
													];
												done = true;
											}
										}
										if (!done) {
											failure(
												"Could not find framework:" +
													e["type"]
											);
											return;
										}
										if (parent != null) {
											if (parent["type"] == "Framework") {
												e[
													"ceasn:isPartOf"
												] = EcRemoteLinkedData.trimVersionFromUrl(
													parent["id"]
												);
												frameworks[
													EcRemoteLinkedData.trimVersionFromUrl(
														parent["id"]
													)
												].competency.push(f.shortId());
											} else {
												failure(
													"Object cannot trace to framework:" +
														e["type"]
												);
												return;
											}
										} else {
											failure(
												"Object has no framework:" +
													e["type"]
											);
											return;
										}
									}
									if (
										EcCompetency.template != null &&
										EcCompetency.template["@owner"] != null
									) {
										f["owner"] =
											EcCompetency.template["@owner"];
									}
									if (e["owner"] == null) {
										if (
											frameworkRows[EcRemoteLinkedData.trimVersionFromUrl(e["ceasn:isPartOf"])][
												"owner"
											] != null
										)
											e["owner"] =
												frameworkRows[EcRemoteLinkedData.trimVersionFromUrl(
													e["ceasn:isPartOf"]
												)]["owner"];
									}
									var id = new EcIdentity();
									if (e["owner"] != null) {
										id.ppk = EcPpk.fromPem(e["owner"]);
										if (id.ppk != null)
											f.addOwner(id.ppk.toPk());
										eim.addIdentityQuietly(
											id
										);
									}
									if (ceo != null) f.addOwner(ceo.ppk.toPk());
									if (
										EcCompetency.template != null &&
										EcCompetency.template[
											"schema:dateCreated"
										] != null
									) {
										CTDLASNCSVImport.setDateCreated(e, f);
									}
									if (e["ceasn:isChildOf"] != null) {
										CTDLASNCSVImport.createEachRelation(
											e,
											"ceasn:isChildOf",
											Relation.NARROWS,
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											-1,
											endpoint
										);
									}
									if (e["ceasn:broadAlignment"] != null) {
										CTDLASNCSVImport.createRelations(
											e,
											"ceasn:broadAlignment",
											Relation.NARROWS,
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											endpoint
										);
									}
									if (e["ceasn:narrowAlignment"] != null) {
										CTDLASNCSVImport.createRelations(
											e,
											"ceasn:narrowAlignment",
											Relation.NARROWS,
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											endpoint
										);
									}
									if (e["sameAs"] != null) {
										CTDLASNCSVImport.createRelations(
											e,
											"sameAs",
											Relation.IS_EQUIVALENT_TO,
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											endpoint
										);
									}
									if (e["ceasn:majorAlignment"] != null) {
										CTDLASNCSVImport.createRelations(
											e,
											"ceasn:majorAlignment",
											"majorRelated",
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											endpoint
										);
									}
									if (e["ceasn:minorAlignment"] != null) {
										CTDLASNCSVImport.createRelations(
											e,
											"ceasn:minorAlignment",
											"minorRelated",
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											endpoint
										);
									}
									if (
										e["ceasn:prerequisiteAlignment"] != null
									) {
										CTDLASNCSVImport.createRelations(
											e,
											"ceasn:prerequisiteAlignment",
											Relation.REQUIRES,
											repo,
											ceo,
											id,
											relations,
											relationById,
											frameworks,
											endpoint
										);
									}
									f["ceasn:isTopChildOf"] = null;
									f["ceasn:isChildOf"] = null;
									f["ceasn:isPartOf"] = null;
									f["ceasn:broadAlignment"] = null;
									f["ceasn:narrowAlignment"] = null;
									f["sameAs"] = null;
									f["ceasn:majorAlignment"] = null;
									f["ceasn:minorAlignment"] = null;
									f["ceasn:prerequisiteAlignment"] = null;
									f["ceasn:hasChild"] = null;
									competencies.push(f);
									competencyRows[f.shortId()] = e;
									callback0();
								},
								failure
							);
						} else if (
							pretranslatedE["@type"] == null ||
							pretranslatedE["@type"] == ""
						) {
							callback0();
							return;
						} else {
							failure(
								"Found unknown type:" + pretranslatedE["@type"]
							);
							callback0();
							return;
						}
					},
					function(strings) {
						success(frameworkArray, competencies, relations);
					}
				);
			},
			error: failure
		});
	}
	static getIdFromCtid(ctid, endpoint, repo, context, type, key) {
		if (key != "id") {
			if (key == "ceasn:isPartOf" || key == "ceasn:isTopChildOf") {
				if (type == "Competency") {
					type = "Framework";
				} else if (type == "Concept") {
					type = "ConceptScheme";
				}
			} else {
				if (type == "Framework") {
					type = "Competency";
				} else if (type == "ConceptScheme") {
					type = "Concept";
				}
			}
		}
		if (endpoint != null) {
			if (endpoint.indexOf("ce-") != -1) {
				ctid = ctid.substring(3);
			}
			return endpoint + ctid;
		} else {
			ctid = ctid.substring(3);
			var obj = new EcRemoteLinkedData(context, type);
			obj.assignId(repo.selectedServer, ctid);
			if (key == "id") {
				return obj.id;
			} else {
				return obj.shortId();
			}
		}
	}
	static cleanUpTranslator(translator, endpoint, repo) {
		var context = null;
		var type = null;
		if (translator["type"] == "ceasn:CompetencyFramework") {
			context = "https://schema.cassproject.org/0.4/";
			type = "Framework";
		} else if (translator["type"] == "ceasn:Competency") {
			context = "https://schema.cassproject.org/0.4/";
			type = "Competency";
		} else if (translator["type"] == "ceasn:ConceptScheme") {
			context = "https://schema.cassproject.org/0.4/skos/";
			type = "ConceptScheme";
		} else if (translator["type"] == "ceasn:Concept") {
			context = "https://schema.cassproject.org/0.4/skos/";
			type = "Concept";
		}
		for (var key in translator) {
			if (translator[key] == "") {
				translator[key] = null;
			} else if (translator[key] != null) {
				var thisKey = translator[key];
				if (typeof thisKey == "string") {
					if (translator[key].trim().length == 0) {
						translator[key] = null;
					} else if (thisKey.indexOf("|") != -1) {
						thisKey = thisKey.split("|");
						translator[key] = thisKey;
						for (var i = 0; i < thisKey.length; i++) {
							if (thisKey[i] != thisKey[i].trim()) {
								var thisVal = thisKey[i].trim();
								thisKey[i] = thisVal;
							}
						}
					} else if (
						thisKey.startsWith("ce-") &&
						key != "ceterms:ctid"
					) {
						var id = CTDLASNCSVImport.getIdFromCtid(
							thisKey,
							endpoint,
							repo,
							context,
							type,
							key
						);
						translator[key] = id;
					}
				} else if (EcArray.isArray(thisKey)) {
					for (var i = 0; i < thisKey.length; i++) {
						if (
							typeof thisKey[i] == "string" &&
							thisKey[i].startsWith("ce-")
						) {
							var id = CTDLASNCSVImport.getIdFromCtid(
								thisKey[i],
								endpoint,
								repo,
								context,
								type,
								key
							);
							thisKey[i] = id;
						}
					}
				}
				if (key != key.trim()) {
					var trimKey = key.trim();
					translator[trimKey] = translator[key];
					translator[key] = null;
				}
			}
		}
	}
	static createRelations(
		e,
		field,
		type,
		repo,
		ceo,
		id,
		relations,
		relationById,
		frameworks,
		endpoint
	) {
		if (!EcArray.isArray(e[field])) {
			var makeArray = Array(e[field]);
			e[field] = makeArray;
		}
		for (var i = 0; i < e[field].length; i++) {
			CTDLASNCSVImport.createEachRelation(
				e,
				field,
				type,
				repo,
				ceo,
				id,
				relations,
				relationById,
				frameworks,
				i,
				endpoint
			);
		}
	}
	static createEachRelation(
		e,
		field,
		type,
		repo,
		ceo,
		id,
		relations,
		relationById,
		frameworks,
		i,
		endpoint
	) {
		var r = new EcAlignment();
		if (endpoint != null) {
			r.generateShortId(endpoint);
		} else {
			r.generateId(repo.selectedServer);
		}
		if (ceo != null) r.addOwner(ceo.ppk.toPk());
		if (id.ppk != null) r.addOwner(id.ppk.toPk());
		r.relationType = type;
		if (field == "ceasn:narrowAlignment") {
			var sourceId = e[field][i];
			if (sourceId.startsWith("ce-")) {
				sourceId = CTDLASNCSVImport.getIdFromCtid(
					sourceId,
					endpoint,
					repo,
					"https://schema.cassproject.org/0.4/",
					"Competency",
					field
				);
			}
			r.source = EcRemoteLinkedData.trimVersionFromUrl(sourceId);
			r.target = EcRemoteLinkedData.trimVersionFromUrl(e["id"]);
		} else {
			r.source = EcRemoteLinkedData.trimVersionFromUrl(e["id"]);
			if (i != -1) {
				var targetId = e[field][i];
				if (targetId.startsWith("ce-")) {
					targetId = CTDLASNCSVImport.getIdFromCtid(
						targetId,
						endpoint,
						repo,
						"https://schema.cassproject.org/0.4/",
						"Competency",
						field
					);
				}
				r.target = EcRemoteLinkedData.trimVersionFromUrl(targetId);
			} else {
				var targetId = e[field];
				if (targetId.startsWith("ce-")) {
					targetId = CTDLASNCSVImport.getIdFromCtid(
						targetId,
						endpoint,
						repo,
						"https://schema.cassproject.org/0.4/",
						"Competency",
						field
					);
				}
				r.target = EcRemoteLinkedData.trimVersionFromUrl(targetId);
			}
		}
		relations.push(r);
		relationById[r.shortId()] = r;
		frameworks[EcRemoteLinkedData.trimVersionFromUrl(e["ceasn:isPartOf"])].relation.push(r.shortId());
	}
	static setDateCreated(importObject, object) {
		if (
			importObject["ceasn:dateCreated"] == null &&
			importObject["schema:dateCreated"] == null
		) {
			var timestamp = object.getTimestamp();
			var date;
			if (timestamp != null) {
				date = new Date(parseInt(timestamp)).toISOString();
			} else {
				date = new Date().toISOString();
			}
			object["schema:dateCreated"] = date;
		}
	}
};
