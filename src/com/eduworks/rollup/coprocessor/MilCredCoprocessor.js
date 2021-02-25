/**
 *  Created by fray on 5/30/17.
 */
var MilCredCoprocessor = function() {
    AssertionCoprocessor.call(this);
};
MilCredCoprocessor = stjs.extend(MilCredCoprocessor, AssertionCoprocessor, [], function(constructor, prototype) {
    prototype.assertedBy = null;
    prototype.assertions = null;
    prototype.nextSearch = null;
    prototype.collectAssertions = function(ip, listOfCompetencies, success) {
        this.assertedBy = new Object();
        this.assertions = new Object();
        var me = this;
        this.rabbitHole(0, ip, listOfCompetencies, function() {
            me.findAssertions(ip, function() {
                me.generateAssertions(ip, listOfCompetencies, success);
            });
        });
    };
    prototype.getAssertedByCount = function() {
        var count = 0;
        var keys = EcObject.keys(this.assertedBy);
        for (var i = 0; i < keys.length; i++) 
            count += ((this.assertedBy)[keys[i]]).length;
        return count;
    };
    prototype.generateAssertions = function(ip, listOfCompetencies, success) {
        var assertions = new Array();
        for (var i = 0; i < listOfCompetencies.length; i++) {
            var evidences = new Array();
            this.addEvidenceOfDependenciesToArray(listOfCompetencies[i], evidences);
            if (evidences.length == 0) 
                continue;
            var a = new EcAssertion();
            a.generateId("internal");
            for (var j = 0; j < ip.subject.length; j++) 
                a.addOwner(ip.subject[j]);
            a.setSubject(ip.subject[0]);
            a.setCompetency(listOfCompetencies[i]);
            a.setEvidence(evidences);
            a.setConfidence(1.0);
            assertions.push(a);
        }
        success(assertions);
    };
    prototype.addEvidenceOfDependenciesToArray = function(s, evidences) {
        if ((this.assertions)[s] != null) {
            for (var i = 0; i < ((this.assertions)[s]).length; i++) 
                evidences.push(((this.assertions)[s])[i].shortId());
        }
        if ((this.assertedBy)[s] != null) {
            for (var i = 0; i < ((this.assertedBy)[s]).length; i++) 
                this.addEvidenceOfDependenciesToArray(((this.assertedBy)[s])[i], evidences);
        }
    };
    prototype.findAssertions = function(ip, success) {
        var me = this;
        me.assertionProcessor.log(ip, "Querying repositories for AchieveActions");
        var evidence = new Array();
        var keys = EcObject.keys(this.assertedBy);
        for (var i = 0; i < keys.length; i++) 
            for (var j = 0; j < ((this.assertedBy)[keys[i]]).length; j++) 
                evidence.push(((this.assertedBy)[keys[i]])[j]);
        if (evidence.length == 0) {
            success();
            return;
        }
        var eah = new EcAsyncHelper();
        eah.each(me.assertionProcessor.repositories, function(currentRepository, callback0) {
            var searchQuery = me.buildAssertionSearchQuery(ip, evidence);
            me.assertionProcessor.log(ip, "Querying repositories for AchieveActions regarding " + evidence.length + " evidences: " + searchQuery);
            var params = new Object();
            (params)["size"] = 5000;
            currentRepository.searchWithParams(searchQuery, params, null, function(p1) {
                me.assertionProcessor.log(ip, p1.length + " AchieveActions found.");
                for (var i = 0; i < p1.length; i++) {
                    var a = new AchieveAction();
                    a.copyFrom(p1[i]);
                    var thingy = EcRemoteLinkedData.trimVersionFromUrl(a.object);
                    if ((me.assertions)[thingy] == null) 
                        (me.assertions)[thingy] = new Array();
                    var as = (me.assertions)[thingy];
                    EcArray.setAdd(as, a);
                }
                callback0();
            }, function(p1) {
                callback0();
            });
        }, function(strings) {
            success();
        });
    };
    prototype.rabbitHole = function(level, ip, listOfThingies, success) {
        var me = this;
        this.nextSearch = new Array();
        var eah = new EcAsyncHelper();
        eah.each(me.assertionProcessor.repositories, function(currentRepository, callback0) {
            var searchQuery = me.buildRelationsSearchQuery(ip, listOfThingies);
            me.assertionProcessor.log(ip, "Querying repositories for relations regarding " + listOfThingies.length + " objects: " + searchQuery);
            var params = new Object();
            (params)["size"] = 5000;
            currentRepository.searchWithParams(searchQuery, params, null, function(p1) {
                me.assertionProcessor.log(ip, p1.length + " relations found.");
                for (var i = 0; i < p1.length; i++) {
                    var a = new CreativeWork();
                    a.copyFrom(p1[i]);
                    var thingy = EcRemoteLinkedData.trimVersionFromUrl(a.educationalAlignment.targetUrl);
                    var assertedBy = EcRemoteLinkedData.trimVersionFromUrl(a.url);
                    if ((me.assertedBy)[thingy] == null) 
                        (me.assertedBy)[thingy] = new Array();
                    var as = (me.assertedBy)[thingy];
                    if (!EcArray.has(as, assertedBy)) {
                        as.push(assertedBy);
                        me.nextSearch.push(assertedBy);
                    }
                }
                callback0();
            }, function(p1) {
                callback0();
            });
        }, function(strings) {
            if (me.nextSearch.length > 0) 
                me.rabbitHole(level + 1, ip, me.nextSearch, success);
             else 
                success();
        });
    };
    prototype.buildRelationsSearchQuery = function(ip, competencies) {
        var result = null;
        if (InquiryPacket.IPType.ROLLUPRULE == ip.type) {
            ip.failure("NOT SUPPOSED TO BE HERE.");
             throw new RuntimeException("Collecting assertions when root node is a rollup rule. Not supported.");
        } else if (InquiryPacket.IPType.COMPETENCY == ip.type) {
            result = "educationalAlignment.alignmentType:\"*asserts\" AND (";
            for (var i = 0; i < competencies.length; i++) {
                if (i != 0) 
                    result += " OR ";
                result += "educationalAlignment.targetUrl:\"" + competencies[i] + "\"";
            }
            result += ")";
        }
        if (result != null) 
            return result;
         throw new RuntimeException("Trying to build a coprocessor rabbit hole search query on an unsupported type: " + ip.type);
    };
    prototype.buildAssertionSearchQuery = function(ip, competencies) {
        var result = null;
        if (InquiryPacket.IPType.ROLLUPRULE == ip.type) {
            ip.failure("NOT SUPPOSED TO BE HERE.");
             throw new RuntimeException("Collecting assertions when root node is a rollup rule. Not supported.");
        } else if (InquiryPacket.IPType.COMPETENCY == ip.type) {
            result = "@type:\"*AchieveAction\" AND (";
            for (var i = 0; i < competencies.length; i++) {
                if (i != 0) 
                    result += " OR ";
                result += "object:\"" + competencies[i] + "\"";
            }
            result += ")";
        }
        for (var i = 0; i < ip.subject.length; i++) 
            result += " AND (agent:\"" + ip.subject[i].toPem() + "\")";
        if (result != null) 
            return result;
         throw new RuntimeException("Trying to build a coprocessor achieveAction search query on an unsupported type: " + ip.type);
    };
}, {assertedBy: "Object", assertions: "Object", nextSearch: {name: "Array", arguments: [null]}, assertionProcessor: "AssertionProcessor"}, {});
