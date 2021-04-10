module.exports = class CTDLASNCSVConceptImport{
    constructor.analyzeFile = function(file, success, failure) {
        if (file == null) {
            failure("No file to analyze");
            return;
        }
        if ((file)["name"] == null) {
            failure("Invalid file");
        } else if (!((file)["name"]).endsWith(".csv")) {
            failure("Invalid file type");
        }
        Papa.parse(file, {encoding: "UTF-8", complete: function(results) {
            var tabularData = (results)["data"];
            var colNames = tabularData[0];
            var nameToCol = new Object();
            for (var i = 0; i < colNames.length; i++) 
                (nameToCol)[colNames[i]] = i;
            var conceptSchemeCounter = 0;
            var conceptCounter = 0;
            var typeCol = (nameToCol)["@type"];
            if (typeCol == null) {
                this.error("No @type in CSV.");
                return;
            }
            for (var i = 0; i < tabularData.length; i++) {
                if (i == 0) 
                    continue;
                var col = tabularData[i];
                if (col[typeCol] == "skos:ConceptScheme") 
                    conceptSchemeCounter++;
                 else if (col[typeCol] == "skos:Concept") 
                    conceptCounter++;
                 else if (col[typeCol] == null || col[typeCol] == "") 
                    continue;
                 else {
                    this.error("Found unknown type:" + col[typeCol]);
                    return;
                }
            }
            success(conceptSchemeCounter, conceptCounter);
        }, error: failure});
    };
    constructor.importFrameworksAndCompetencies = function(repo, file, success, failure, ceo, endpoint) {
        if (file == null) {
            failure("No file to analyze");
            return;
        }
        if ((file)["name"] == null) {
            failure("Invalid file");
        } else if (!((file)["name"]).endsWith(".csv")) {
            failure("Invalid file type");
        }
        Papa.parse(file, {header: true, encoding: "UTF-8", complete: function(results) {
            var tabularData = (results)["data"];
            var schemeArray = new Array();
            var concepts = new Array();
            new EcAsyncHelper().each(tabularData, function(pretranslatedE, callback0) {
                if ((pretranslatedE)["@type"] == "skos:ConceptScheme") {
                    var translator = new EcLinkedData(null, null);
                    translator.copyFrom(pretranslatedE);
                    CTDLASNCSVImport.cleanUpTranslator(translator, endpoint, repo);
                    if ((translator)["ceasn:name"] != null) {
                        var name = (translator)["ceasn:name"];
                        var nameWithLanguage = new Object();
                        (nameWithLanguage)["en-US"] = name;
                        (translator)["ceasn:name"] = nameWithLanguage;
                    }
                    translator.recast("https://schema.cassproject.org/0.4/ceasn2cassConcepts", "https://schema.cassproject.org/0.4/skos", function(e) {
                        var f = new EcConceptScheme();
                        f.copyFrom(e);
                        if (EcConceptScheme.template != null) {
                            for (var key in (EcConceptScheme.template)) {
                                if (key.equals("@owner")) {
                                    (f)["owner"] = (EcConceptScheme.template)[key];
                                } else {
                                    (f)[key] = (EcConceptScheme.template)[key];
                                }
                            }
                        }
                        if ((e)["owner"] != null) {
                            var id = new EcIdentity();
                            id.ppk = EcPpk.fromPem((e)["owner"]);
                            f.addOwner(id.ppk.toPk());
                            EcIdentityManager.addIdentityQuietly(id);
                        }
                        if (ceo != null) 
                            f.addOwner(ceo.ppk.toPk());
                        (f)["schema:dateModified"] = new Date().toISOString();
                        if (EcConceptScheme.template != null && (EcConceptScheme.template)[("schema:dateCreated")] != null) {
                            CTDLASNCSVImport.setDateCreated(e, f);
                        }
                        schemeArray.push(f);
                        callback0();
                    }, failure);
                } else if ((pretranslatedE)["@type"] == "skos:Concept") {
                    var translator = new EcLinkedData(null, null);
                    translator.copyFrom(pretranslatedE);
                    CTDLASNCSVImport.cleanUpTranslator(translator, endpoint, repo);
                    if ((translator)["skos:prefLabel"] != null) {
                        var name = (translator)["skos:prefLabel"];
                        var nameWithLanguage = new Object();
                        (nameWithLanguage)["en-US"] = name;
                        (translator)["skos:prefLabel"] = nameWithLanguage;
                    }
                    translator.recast("https://schema.cassproject.org/0.4/ceasn2cassConcepts", "https://schema.cassproject.org/0.4/skos", function(e) {
                        var f = new EcConcept();
                        f.copyFrom(e);
                        if ((e)["id"] == null) {
                            callback0();
                            return;
                        }
                        if (EcConcept.template != null && (EcConcept.template)["@owner"] != null) {
                            (f)["owner"] = (EcConcept.template)["@owner"];
                        }
                        if ((e)["owner"] != null) {
                            var id = new EcIdentity();
                            id.ppk = EcPpk.fromPem((e)["owner"]);
                            if (id.ppk != null) 
                                f.addOwner(id.ppk.toPk());
                            EcIdentityManager.addIdentityQuietly(id);
                        }
                        if (ceo != null) 
                            f.addOwner(ceo.ppk.toPk());
                        if (EcConcept.template != null && (EcConcept.template)[("schema:dateCreated")] != null) {
                            CTDLASNCSVImport.setDateCreated(e, f);
                        }
                        if ((e)["skos:narrower"] != null) {
                            var relation = (e)["skos:narrower"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:narrower"] = array;
                            }
                        }
                        if ((e)["skos:broader"] != null) {
                            var relation = (e)["skos:broader"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:broader"] = array;
                            }
                        }
                        if ((e)["skos:broadMatch"] != null) {
                            var relation = (e)["skos:broadMatch"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:broadMatch"] = array;
                            }
                        }
                        if ((e)["skos:closeMatch"] != null) {
                            var relation = (e)["skos:closeMatch"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:closeMatch"] = array;
                            }
                        }
                        if ((e)["skos:exactMatch"] != null) {
                            var relation = (e)["skos:exactMatch"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:exactMatch"] = array;
                            }
                        }
                        if ((e)["skos:narrowMatch"] != null) {
                            var relation = (e)["skos:narrowMatch"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:narrowMatch"] = array;
                            }
                        }
                        if ((e)["skos:related"] != null) {
                            var relation = (e)["skos:related"];
                            if (!EcArray.isArray(relation)) {
                                var array = [relation];
                                (f)["skos:related"] = array;
                            }
                        }
                        if ((e)["skos:topConceptOf"] != null) {
                            var scheme = (e)["skos:topConceptOf"];
                            for (var i = 0; i < schemeArray.length; i++) {
                                var schemeObj = schemeArray[i];
                                if (scheme == (schemeObj)["id"]) {
                                    if ((schemeObj)["skos:hasTopConcept"] == null) {
                                        var hasTopConcept = new Array();
                                        (schemeObj)["skos:hasTopConcept"] = hasTopConcept;
                                    }
                                    var conceptId = f.shortId();
                                    EcArray.setAdd((schemeObj)["skos:hasTopConcept"], conceptId);
                                }
                            }
                        }
                        (f)["schema:dateModified"] = new Date().toISOString();
                        concepts.push(f);
                        callback0();
                    }, failure);
                } else if ((pretranslatedE)["@type"] == null || (pretranslatedE)["@type"] == "") {
                    callback0();
                    return;
                } else {
                    this.error("Found unknown type:" + (pretranslatedE)["@type"]);
                    callback0();
                    return;
                }
            }, function(strings) {
                success(schemeArray, concepts);
            });
        }, error: failure});
    };
}, {}, {});
