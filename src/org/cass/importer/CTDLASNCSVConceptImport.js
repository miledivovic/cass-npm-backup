const EcArray = require("../../../com/eduworks/ec/array/EcArray");

module.exports = class CTDLASNCSVConceptImport {
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
				var conceptSchemeCounter = 0;
				var conceptCounter = 0;
				var progressionCounter = 0;
				var typeCol = nameToCol["@type"];
				if (typeCol == null) {
					this.error("No @type in CSV.");
					return;
				}
				for (var i = 0; i < tabularData.length; i++) {
					if (i == 0) continue;
					var col = tabularData[i];
					if (col[typeCol] == "skos:ConceptScheme") conceptSchemeCounter++;
					else if (col[typeCol] == "asn:ProgressionModel") progressionCounter++;
					else if (col[typeCol] == "skos:Concept") conceptCounter++;
					else if (col[typeCol] == "asn:ProgressionLevel") conceptCounter++;
					else if (col[typeCol] == null || col[typeCol] == "")
						continue;
					else {
						this.error("Found unknown type:" + col[typeCol]);
						return;
					}
				}
				success(conceptSchemeCounter, conceptCounter, progressionCounter);
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
		eim,
		progressionsFlag
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
		if (progressionsFlag) {
			return this.importProgressions(repo, file, success, failure, ceo, endpoint, eim);
		}
		Papa.parse(file, {
			header: true,
			encoding: "UTF-8",
			complete: async function(results) {
				var tabularData = results["data"];
				const terms = JSON.parse(JSON.stringify((await EcRemote.getExpectingObject("https://schema.cassproject.org/0.4/jsonld1.1/ceasn2cassConceptsTerms"))));
				var schemeArray = [];
				var concepts = [];
				for (let each = 0; each < tabularData.length; each++) {
					let pretranslatedE = tabularData[each];
					// Probably an empty newline, skip
					if (!pretranslatedE["@id"]) {
						continue;
					}
					if (
						pretranslatedE["@type"].toLowerCase().startsWith('sample') || pretranslatedE["@type"].toLowerCase().startsWith('instruction')
					) {
						continue;
					}
					if (pretranslatedE["@type"] == "skos:ConceptScheme") {
						var translator = new EcLinkedData(null, null);
						translator.copyFrom(pretranslatedE);
						CTDLASNCSVImport.cleanUpTranslator(
							translator,
							endpoint,
							repo
						);
						if (translator["ceasn:name"] != null) {
							var name = translator["ceasn:name"];
							var nameWithLanguage = {};
							nameWithLanguage["en-US"] = name;
							translator["ceasn:name"] = nameWithLanguage;
						}
						for (let each in translator) {
							if (terms[each]) {
								translator[terms[each]] = translator[each];
								delete translator[each];
							}
						}
						let e = await translator.recast(
							"https://schema.cassproject.org/0.4/jsonld1.1/ceasn2cassConcepts.json",
							"https://schema.cassproject.org/0.4/skos"
						);
						e.type = "ConceptScheme";
						var f = new EcConceptScheme();
						f.copyFrom(e);
						if (EcConceptScheme.template != null) {
							for (var key in EcConceptScheme.template) {
								if (key.equals("@owner")) {
									f["owner"] =
										EcConceptScheme.template[
											key
										];
								} else {
									f[key] =
										EcConceptScheme.template[
											key
										];
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
						f[
							"schema:dateModified"
						] = new Date().toISOString();
						if (
							EcConceptScheme.template != null &&
							EcConceptScheme.template[
								"schema:dateCreated"
							] != null
						) {
							CTDLASNCSVImport.setDateCreated(e, f);
						}
						schemeArray.push(f);
					} else if (pretranslatedE["@type"] == "skos:Concept") {
						var translator = new EcLinkedData(null, null);
						translator.copyFrom(pretranslatedE);
						CTDLASNCSVImport.cleanUpTranslator(
							translator,
							endpoint,
							repo
						);
						if (translator["skos:prefLabel"] != null) {
							var name = translator["skos:prefLabel"];
							var nameWithLanguage = {};
							nameWithLanguage["en-US"] = name;
							translator["skos:prefLabel"] = nameWithLanguage;
						}
						for (let each in translator) {
							if (terms[each]) {
								translator[terms[each]] = translator[each];
								delete translator[each];
							}
						}
						let e = await translator.recast(
							"https://schema.cassproject.org/0.4/jsonld1.1/ceasn2cassConcepts.json",
							"https://schema.cassproject.org/0.4/skos"
						);
						e.type = "Concept";
						var f = new EcConcept();
						f.copyFrom(e);
						if (e["id"] == null) {
							return;
						}
						if (
							EcConcept.template != null &&
							EcConcept.template["@owner"] != null
						) {
							f["owner"] =
								EcConcept.template["@owner"];
						}
						if (e["owner"] != null) {
							var id = new EcIdentity();
							id.ppk = EcPpk.fromPem(e["owner"]);
							if (id.ppk != null)
								f.addOwner(id.ppk.toPk());
							eim.addIdentityQuietly(
								id
							);
						}
						if (ceo != null) f.addOwner(ceo.ppk.toPk());
						if (
							EcConcept.template != null &&
							EcConcept.template[
								"schema:dateCreated"
							] != null
						) {
							CTDLASNCSVImport.setDateCreated(e, f);
						}
						if (e["skos:narrower"] != null) {
							var relation = e["skos:narrower"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:narrower"] = array;
							}
						}
						if (e["skos:broader"] != null) {
							var relation = e["skos:broader"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:broader"] = array;
							}
						}
						if (e["skos:broadMatch"] != null) {
							var relation = e["skos:broadMatch"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:broadMatch"] = array;
							}
						}
						if (e["skos:closeMatch"] != null) {
							var relation = e["skos:closeMatch"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:closeMatch"] = array;
							}
						}
						if (e["skos:exactMatch"] != null) {
							var relation = e["skos:exactMatch"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:exactMatch"] = array;
							}
						}
						if (e["skos:narrowMatch"] != null) {
							var relation = e["skos:narrowMatch"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:narrowMatch"] = array;
							}
						}
						if (e["skos:related"] != null) {
							var relation = e["skos:related"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:related"] = array;
							}
						}
						if (e["skos:topConceptOf"] != null) {
							var scheme = e["skos:topConceptOf"];
							for (
								var i = 0;
								i < schemeArray.length;
								i++
							) {
								var schemeObj = schemeArray[i];
								if (scheme == schemeObj["id"]) {
									if (
										schemeObj[
											"skos:hasTopConcept"
										] == null
									) {
										var hasTopConcept = [];
										schemeObj[
											"skos:hasTopConcept"
										] = hasTopConcept;
									}
									var conceptId = f.shortId();
									EcArray.setAdd(
										schemeObj[
											"skos:hasTopConcept"
										],
										conceptId
									);
								}
							}
						}
						f[
							"schema:dateModified"
						] = new Date().toISOString();
						concepts.push(f);
					} else if (
						pretranslatedE["@type"] == null ||
						pretranslatedE["@type"] == ""
					) {
						return;
					} else {
						this.error(
							"Found unknown type:" + pretranslatedE["@type"]
						);
						return;
					}
				}
				success(schemeArray, concepts);
			},
			error: failure
		});
	}
	static importProgressions(
		repo,
		file,
		success,
		failure,
		ceo,
		endpoint,
		eim
	) {
		Papa.parse(file, {
			header: true,
			encoding: "UTF-8",
			complete: async function(results) {
				var tabularData = results["data"];
				const terms = JSON.parse(JSON.stringify((await EcRemote.getExpectingObject("https://schema.cassproject.org/0.4/jsonld1.1/ceasn2cassConceptsTerms"))));
				var schemeArray = [];
				var concepts = [];
				for (let each = 0; each < tabularData.length; each++) {
					let pretranslatedE = tabularData[each];
					if (pretranslatedE["@type"] == "asn:ProgressionModel") {
						var translator = new EcLinkedData(null, null);
						translator.copyFrom(pretranslatedE);
						CTDLASNCSVImport.cleanUpTranslator(
							translator,
							endpoint,
							repo
						);
						if (translator["ceasn:name"] != null) {
							var name = translator["ceasn:name"];
							var nameWithLanguage = {};
							nameWithLanguage["en-US"] = name;
							translator["ceasn:name"] = nameWithLanguage;
						}
						for (let each in translator) {
							if (terms[each]) {
								translator[terms[each]] = translator[each];
								delete translator[each];
							}
						}
						let e = await translator.recast(
							"https://schema.cassproject.org/0.4/jsonld1.1/ceasn2cassConcepts.json",
							"https://schema.cassproject.org/0.4/skos"
						);
						e.type = "ConceptScheme";
						var f = new EcConceptScheme();
						f.copyFrom(e);
						if (EcConceptScheme.template != null) {
							for (var key in EcConceptScheme.template) {
								if (key.equals("@owner")) {
									f["owner"] =
										EcConceptScheme.template[
											key
										];
								} else {
									f[key] =
										EcConceptScheme.template[
											key
										];
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
						f[
							"schema:dateModified"
						] = new Date().toISOString();
						if (
							EcConceptScheme.template != null &&
							EcConceptScheme.template[
								"schema:dateCreated"
							] != null
						) {
							CTDLASNCSVImport.setDateCreated(e, f);
						}
						f.subType = "Progression";
						schemeArray.push(f);
					} else if (pretranslatedE["@type"] == "asn:ProgressionLevel") {
						var translator = new EcLinkedData(null, null);
						translator.copyFrom(pretranslatedE);
						CTDLASNCSVImport.cleanUpTranslator(
							translator,
							endpoint,
							repo
						);
						if (translator["skos:prefLabel"] != null) {
							var name = translator["skos:prefLabel"];
							var nameWithLanguage = {};
							nameWithLanguage["en-US"] = name;
							translator["skos:prefLabel"] = nameWithLanguage;
						}
						for (let each in translator) {
							if (terms[each]) {
								translator[terms[each]] = translator[each];
								delete translator[each];
							}
						}
						let e = await translator.recast(
							"https://schema.cassproject.org/0.4/jsonld1.1/ceasn2cassConcepts.json",
							"https://schema.cassproject.org/0.4/skos"
						);
						e.type = "Concept";
						var f = new EcConcept();
						f.copyFrom(e);
						if (e["id"] == null) {
							return;
						}
						if (
							EcConcept.template != null &&
							EcConcept.template["@owner"] != null
						) {
							f["owner"] =
								EcConcept.template["@owner"];
						}
						if (e["owner"] != null) {
							var id = new EcIdentity();
							id.ppk = EcPpk.fromPem(e["owner"]);
							if (id.ppk != null)
								f.addOwner(id.ppk.toPk());
							eim.addIdentityQuietly(
								id
							);
						}
						if (ceo != null) f.addOwner(ceo.ppk.toPk());
						if (
							EcConcept.template != null &&
							EcConcept.template[
								"schema:dateCreated"
							] != null
						) {
							CTDLASNCSVImport.setDateCreated(e, f);
						}
						if (e["skos:narrower"] != null) {
							var relation = e["skos:narrower"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:narrower"] = array;
							}
						}
						if (e["skos:broader"] != null) {
							var relation = e["skos:broader"];
							if (!EcArray.isArray(relation)) {
								var array = [relation];
								f["skos:broader"] = array;
							}
						}
						if (e["skos:topConceptOf"] != null) {
							var scheme = e["skos:topConceptOf"];
							for (
								var i = 0;
								i < schemeArray.length;
								i++
							) {
								var schemeObj = schemeArray[i];
								if (scheme == schemeObj["id"]) {
									if (
										schemeObj[
											"skos:hasTopConcept"
										] == null
									) {
										var hasTopConcept = [];
										schemeObj[
											"skos:hasTopConcept"
										] = hasTopConcept;
									}
									var conceptId = f.shortId();
									EcArray.setAdd(
										schemeObj[
											"skos:hasTopConcept"
										],
										conceptId
									);
								}
							}
						}
						f[
							"schema:dateModified"
						] = new Date().toISOString();
						f.subType = "Progression";
						concepts.push(f);
					} else if (
						pretranslatedE["@type"] == null ||
						pretranslatedE["@type"] == ""
					) {
						return;
					} else {
						this.error(
							"Found unknown type:" + pretranslatedE["@type"]
						);
						return;
					}
				}
				success(schemeArray, concepts);
			},
			error: failure
		});
	}
};
