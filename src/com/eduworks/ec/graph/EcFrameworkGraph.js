/**
 *  Graph for working with a framework. Additional computed data (such as profile data) can be overlaid on the graph through the use of "metaverticies" and "metaedges" that hold additional information.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class EcFrameworkGraph
 */
var EcFrameworkGraph = function() {
    EcDirectedGraph.call(this);
    this.metaVerticies = new Object();
    this.metaEdges = new Object();
    this.competencyMap = new Object();
    this.edgeMap = new Object();
    this.dontTryAnyMore = new Object();
    this.frameworks = new Array();
};
EcFrameworkGraph = stjs.extend(EcFrameworkGraph, EcDirectedGraph, [], function(constructor, prototype) {
    metaVerticies = null;
    metaEdges = null;
    competencyMap = null;
    edgeMap = null;
    dontTryAnyMore = null;
    frameworks = null;
    addFrameworkSuccessCallback = null;
    addFrameworkFailureCallback = null;
    repo = null;
    /**
     *  Adds a framework to the graph, and creates the edges to connect the competencies in the framework.
     * 
     *  @param {EcFramework}     framework Framework to add to the graph.
     *  @param {EcRepository}    repo Repository to fetch data from that exists in the framework.
     *  @param {function()}      success Method to invoke when done adding the framework.
     *  @param {function(error)} failure Method to invoke when things go badly.
     *  @method addFramework
     *  @memberOf EcFrameworkGraph
     */
    addFramework(framework, repo, success, failure) {
        this.frameworks.push(framework);
        var me = this;
        if (framework.competency == null) 
            framework.competency = new Array();
        if (framework.relation == null) 
            framework.relation = new Array();
        repo.multiget(framework.competency, function(data) {
            var eah = new EcAsyncHelper();
            eah.each(data, function(d, callback0) {
                me.handleCacheElement(d, callback0, framework);
            }, function(strings) {
                repo.multiget(framework.relation, function(data) {
                    var eah2 = new EcAsyncHelper();
                    eah2.each(data, function(d2, callback2) {
                        me.handleCacheElement(d2, callback2, framework);
                    }, function(strings2) {
                        success();
                    });
                }, failure);
            });
        }, failure);
    };
    handleCacheElement(d, callback0, framework) {
        var competencyTemplate = new EcCompetency();
        var alignmentTemplate = new EcAlignment();
        var encryptedTemplate = new EcEncryptedValue();
        var me = this;
        if (d.isAny(encryptedTemplate.getTypes())) {
            EcEncryptedValue.fromEncryptedValueAsync(d, function(ecRemoteLinkedData) {
                me.handleCacheElement(ecRemoteLinkedData, callback0, framework);
            }, callback0);
            return;
        }
        if (d.isAny(competencyTemplate.getTypes())) {
            EcCompetency.get(d.id, function(c) {
                me.addToMetaStateArray(me.getMetaStateCompetency(c), "framework", framework);
                me.addCompetency(c);
                callback0();
            }, callback0);
        } else if (d.isAny(alignmentTemplate.getTypes())) {
            EcAlignment.get(d.id, function(alignment) {
                me.addRelation(alignment);
                me.addToMetaStateArray(me.getMetaStateAlignment(alignment), "framework", framework);
                callback0();
            }, callback0);
        } else 
            callback0();
    };
    fetchFrameworkAlignments(framework) {
        var me = this;
        EcAlignment.search(this.repo, EcGraphUtil.buildIdSearchQueryForIdList(framework.relation), function(ecaa) {
            for (var i = 0; i < ecaa.length; i++) {
                var a = ecaa[i];
                me.addRelation(a);
                me.addToMetaStateArray(me.getMetaStateAlignment(a), "framework", framework);
            }
            me.addFrameworkSuccessCallback();
        }, me.addFrameworkFailureCallback, null);
    };
    /**
     *  Helper method to populate the graph with assertion data, based on propagation rules implicit in the relations (see devs.cassproject.org, Relations). Does not draw conclusions. Must be able to decrypt 'negative' value.
     * 
     *  @param {Assertion[]}     assertions Assertion candidates to use to populate the graph.
     *  @param {function()}      success Method to invoke when the operation completes successfully.
     *  @param {function(error)} failure Error method.
     */
    processAssertionsBoolean(assertions, success, failure) {
        var me = this;
        var eah = new EcAsyncHelper();
        eah.each(assertions, function(assertion, done) {
            var competency = me.getCompetency(assertion.competency);
            if (competency == null || !me.containsVertex(competency)) {
                done();
                return;
            }
            assertion.getNegativeAsync(function(negative) {
                me.processAssertionsBooleanPerAssertion(assertion, negative, competency, done, new Array());
            }, eah.failWithCallback(failure, done));
        }, function(strings) {
            success();
        });
    };
    processAssertionsBooleanPerAssertion(assertion, negative, competency, done, visited) {
        var me = this;
        if (EcArray.has(visited, competency)) {
            done();
            return;
        }
        visited.push(competency);
        if (negative) {
            var metaState = this.getMetaStateCompetency(competency);
            this.addToMetaStateArray(metaState, "negativeAssertion", assertion);
            new EcAsyncHelper().each(me.getOutEdges(competency), function(alignment, callback0) {
                var c = me.getCompetency(alignment.target);
                me.processAssertionBooleanOutward(alignment, callback0, c, me, assertion, negative, visited);
            }, function(strings) {
                new EcAsyncHelper().each(me.getInEdges(competency), function(alignment, callback0) {
                    var c = me.getCompetency(alignment.source);
                    me.processAssertionBooleanInward(alignment, callback0, c, me, assertion, negative, visited);
                }, function(strings) {
                    done();
                });
            });
        } else {
            var metaState = this.getMetaStateCompetency(competency);
            this.addToMetaStateArray(metaState, "positiveAssertion", assertion);
            new EcAsyncHelper().each(me.getInEdges(competency), function(alignment, callback0) {
                var c = me.getCompetency(alignment.source);
                me.processAssertionBooleanOutward(alignment, callback0, c, me, assertion, negative, visited);
            }, function(strings) {
                new EcAsyncHelper().each(me.getOutEdges(competency), function(alignment, callback0) {
                    var c = me.getCompetency(alignment.target);
                    me.processAssertionBooleanInward(alignment, callback0, c, me, assertion, negative, visited);
                }, function(strings) {
                    done();
                });
            });
        }
    };
    processAssertionBooleanOutward(alignment, callback0, c, me, assertion, negative, visited) {
        if (alignment.relationType == Relation.NARROWS) 
            me.processAssertionsBooleanPerAssertion(assertion, negative, c, callback0, visited);
         else if (alignment.relationType == Relation.IS_EQUIVALENT_TO) 
            me.processAssertionsBooleanPerAssertion(assertion, negative, c, callback0, visited);
         else 
            callback0();
    };
    processAssertionBooleanInward(alignment, callback0, c, me, assertion, negative, visited) {
        if (alignment.relationType == Relation.REQUIRES) 
            me.processAssertionsBooleanPerAssertion(assertion, negative, c, callback0, visited);
         else if (alignment.relationType == Relation.IS_EQUIVALENT_TO) 
            me.processAssertionsBooleanPerAssertion(assertion, negative, c, callback0, visited);
         else 
            callback0();
    };
    addToMetaStateArray(metaState, key, value) {
        if (metaState == null) 
            return;
        if ((metaState)[key] == null) 
            (metaState)[key] = new Array();
        ((metaState)[key]).push(value);
    };
    /**
     *  Fetches the Meta Competency (additional state information used to compute profiles or other data) for a competency.
     * 
     *  @param {EcCompetency} c Competency to fetch meta state for.
     *  @return Meta state (empty object by default)
     *  @method getMetaStateCompetency
     *  @memberOf EcFrameworkGraph
     */
    getMetaStateCompetency(c) {
        var result = this.metaVerticies[c.shortId()];
        if (result == null) {
            if (this.containsVertex(c) == false) 
                return null;
            if (this.metaVerticies[c.shortId()] == null) 
                this.metaVerticies[c.shortId()] = result = new Object();
        }
        return result;
    };
    getMetaStateAlignment(a) {
        var result = this.metaEdges[a.shortId()];
        if (result == null) {
            if (this.containsEdge(a) == false) 
                return null;
            if (this.metaEdges[a.shortId()] == null) 
                this.metaEdges[a.shortId()] = result = new Object();
        }
        return result;
    };
    containsVertex(competency) {
        return (this.competencyMap)[competency.shortId()] != null;
    };
    containsEdge(competency) {
        return (this.edgeMap)[competency.shortId()] != null;
    };
    getCompetency(competencyId) {
        var c = null;
        c = (this.competencyMap)[competencyId];
        if (c == null) 
            c = EcCompetency.getBlocking(competencyId);
        return c;
    };
    addCompetency(competency) {
        if (competency == null) 
            return false;
        if (this.containsVertex(competency)) 
            return false;
        (this.competencyMap)[competency.shortId()] = competency;
        (this.competencyMap)[competency.id] = competency;
        return this.addVertex(competency);
    };
    addRelation(alignment) {
        if (alignment == null) 
            return false;
        if (this.containsEdge(alignment)) 
            return false;
        var source = (this.competencyMap)[EcRemoteLinkedData.trimVersionFromUrl(alignment.source)];
        if (source == null && (this.dontTryAnyMore)[alignment.source] != null) 
            return false;
        if (source == null) 
            source = this.getCompetency(alignment.source);
        if (source == null) 
            (this.dontTryAnyMore)[alignment.source] = "";
        var target = (this.competencyMap)[alignment.target];
        if (target == null && (this.dontTryAnyMore)[alignment.target] != null) 
            return false;
        if (target == null) 
            target = this.getCompetency(alignment.target);
        if (target == null) 
            (this.dontTryAnyMore)[alignment.target] = "";
        if (source == null || target == null) 
            return false;
        return this.addEdgeUnsafely(alignment, source, target);
    };
    addHyperEdge(edge, vertices) {
         throw new RuntimeException("Don't do this.");
    };
    getEdgeType(edge) {
        return edge.relationType;
    };
    getDefaultEdgeType() {
        return EcAlignment.NARROWS;
    };
}, {metaVerticies: {name: "Map", arguments: [null, "Object"]}, metaEdges: {name: "Map", arguments: [null, "Object"]}, competencyMap: "Object", edgeMap: "Object", dontTryAnyMore: "Object", frameworks: {name: "Array", arguments: ["EcFramework"]}, addFrameworkSuccessCallback: "Callback0", addFrameworkFailureCallback: {name: "Callback1", arguments: [null]}, repo: "EcRepository", edges: {name: "Array", arguments: [{name: "Triple", arguments: ["V", "V", "E"]}]}, verticies: {name: "Array", arguments: ["V"]}}, {});
