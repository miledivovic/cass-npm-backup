var OpenBadgeCoprocessor = function() {
    AssertionCoprocessor.call(this);
};
OpenBadgeCoprocessor = stjs.extend(OpenBadgeCoprocessor, AssertionCoprocessor, [], function(constructor, prototype) {
    prototype.email = null;
    prototype.badgePluginIdentifier = null;
    prototype.confidenceOfBadges = 1.0;
    prototype.collectAssertions = function(ip, listOfCompetencies, success) {
        if (listOfCompetencies.length == 0) {
            AssertionCoprocessor.prototype.collectAssertions.call(this, ip, listOfCompetencies, success);
            return;
        }
        var assertions = new Array();
        var me = this;
        var eah = new EcAsyncHelper();
        eah.each(me.assertionProcessor.repositories, function(currentRepository, callback0) {
            var searchQuery = "@type:\"BadgeClass\"";
            for (var i = 0; i < listOfCompetencies.length; i++) {
                if (i == 0) 
                    searchQuery += " AND (";
                if (i > 0) 
                    searchQuery += " OR ";
                searchQuery += "alignment.targetUrl:\"" + listOfCompetencies[i] + "\"";
            }
            if (listOfCompetencies.length > 0) 
                searchQuery += ")";
            me.assertionProcessor.log(ip, "Querying repositories for badges regarding " + listOfCompetencies.length + " query: " + searchQuery);
            var params = new Object();
            (params)["size"] = 5000;
            currentRepository.searchWithParams(searchQuery, params, null, function(p1) {
                me.assertionProcessor.log(ip, p1.length + " badgeClasses found.");
                var badgeClassHelper = new EcAsyncHelper();
                badgeClassHelper.each(p1, function(badgeClass, badgeClassDone) {
                    currentRepository.search("@context:\"https://w3id.org/openbadges/v2\" AND @type:Assertion AND badge:\"" + badgeClass.id + "\"", null, function(badgeAssertions) {
                        for (var j = 0; j < badgeAssertions.length; j++) {
                            var hash = EcCrypto.sha256(me.email + ((badgeAssertions[j])["recipient"])["salt"]);
                            if ("sha256$" + hash.toLowerCase() != ((badgeAssertions[j])["recipient"])["identity"]) {
                                me.assertionProcessor.log(ip, me.email + " hashed with salt != " + ((badgeAssertions[j])["recipient"])["identity"]);
                                badgeAssertions.splice(j--, 1);
                            } else 
                                me.assertionProcessor.log(ip, me.email + " hashed with salt == " + ((badgeAssertions[j])["recipient"])["identity"]);
                        }
                        for (var j = 0; j < badgeAssertions.length; j++) {
                            var alignments = (badgeClass)["alignment"];
                            if (alignments != null) 
                                for (var k = 0; k < alignments.length; k++) {
                                    var alignment = alignments[k];
                                    var a = new Assertion();
                                    a.addOwner(ip.subject[0]);
                                    a.setSubject(ip.subject[0]);
                                    a.setAgent(me.badgePluginIdentifier);
                                    a.competency = (alignment)["targetUrl"];
                                    me.assertionProcessor.log(ip, "Generating Assertion for competency: " + (alignment)["targetUrl"]);
                                    a.framework = (alignment)["targetFramework"];
                                    a.confidence = me.confidenceOfBadges;
                                    var evidence = new Array();
                                    evidence.push(badgeAssertions[j].id);
                                    a.setEvidence(evidence);
                                    a.setAssertionDate(new Date((badgeAssertions[j])["issuedOn"]).getTime());
                                    assertions.push(a);
                                }
                        }
                        badgeClassDone();
                    }, ip.failure);
                }, function(strings) {
                    callback0();
                });
            }, ip.failure);
        }, function(strings) {
            success(assertions);
        });
    };
}, {badgePluginIdentifier: "EcPk", assertionProcessor: "AssertionProcessor"}, {});
