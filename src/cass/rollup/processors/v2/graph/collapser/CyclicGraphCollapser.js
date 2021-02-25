var CyclicGraphCollapser = function() {};
CyclicGraphCollapser = stjs.extend(CyclicGraphCollapser, null, [], function(constructor, prototype) {
    prototype.nodesProcessed = null;
    prototype.visitedNodes = null;
    prototype.buildNarrowsIsRequiredByEqualsMap = function(graph) {
        var relationMap = new NodeRelationMap();
        var n;
        var nodeList = graph.getNodeList();
        for (var i = 0; i < nodeList.length; i++) {
            n = nodeList[i];
            relationMap.addNodeRelations(n, graph.getNarrowsIsRequiredByEqualsRelationListForNode(n));
        }
        return relationMap;
    };
    prototype.buildBroadensRequiresEqualsMap = function(graph) {
        var relationMap = new NodeRelationMap();
        var n;
        var nodeList = graph.getNodeList();
        for (var i = 0; i < nodeList.length; i++) {
            n = nodeList[i];
            relationMap.addNodeRelations(n, graph.getBroadensRequiresEqualsRelationListForNode(n));
        }
        return relationMap;
    };
    prototype.mergeEquivalentNodes = function(relationMap, npg) {
        var nodeList = relationMap.getNodeList();
        var nodeRelations;
        var nr;
        for (var i = 0; i < nodeList.length; i++) {
            nodeRelations = relationMap.getRelationsForNode(nodeList[i]);
            for (var j = 0; j < nodeRelations.length; j++) {
                nr = nodeRelations[j];
                if (nr.getType() == RelationType.RELATION_TYPE.IS_EQUIVALENT_TO) {
                    npg.mergeNodePackets(npg.getNodePacketForNode(nr.getSource()), npg.getNodePacketForNode(nr.getTarget()));
                }
            }
        }
    };
    prototype.mergeCyclicNodes = function(startCycleNode, npg) {
        var startingIdx = ArrayUtil.arrayLastIndexOf(this.visitedNodes, startCycleNode);
        var partOfCycleNode;
        for (var i = startingIdx + 1; i < this.visitedNodes.length; i++) {
            partOfCycleNode = this.visitedNodes[i];
            if (partOfCycleNode != startCycleNode) {
                npg.mergeNodePackets(npg.getNodePacketForNode(startCycleNode), npg.getNodePacketForNode(partOfCycleNode));
            }
        }
    };
    prototype.findCycles = function(n, relationMap, npg) {
        if (ArrayUtil.arrayContains(this.visitedNodes, n)) {
            this.mergeCyclicNodes(n, npg);
        } else {
            this.nodesProcessed.push(n);
            var relationsToVisit = relationMap.getRelationsForNode(n);
            if (relationsToVisit == null || relationsToVisit.length == 0) 
                return;
             else {
                this.visitedNodes.push(n);
                var nr;
                for (var i = 0; i < relationsToVisit.length; i++) {
                    nr = relationsToVisit[i];
                    this.findCycles(nr.getTarget(), relationMap, npg);
                }
                this.visitedNodes = ArrayUtil.arrayRemove(this.visitedNodes, n);
            }
        }
    };
    prototype.startFindCycles = function(relationMap, npg) {
        var nodeList = relationMap.getNodeList();
        for (var i = 0; i < nodeList.length; i++) {
            this.visitedNodes = new Array();
            this.findCycles(nodeList[i], relationMap, npg);
        }
    };
    prototype.buildNodePacketGraph = function(relationMap) {
        var npg = new NodePacketGraph();
        npg.initNodePacketGraph(relationMap.getNodeList());
        this.mergeEquivalentNodes(relationMap, npg);
        this.nodesProcessed = new Array();
        this.startFindCycles(relationMap, npg);
        return npg;
    };
    prototype.mergeNodePacketGraphs = function(nirbeNpg, breNpg) {
        var mergedNpg = nirbeNpg;
        var np;
        var nodePacketList = breNpg.getNodePacketList();
        for (var i = 0; i < nodePacketList.length; i++) {
            np = nodePacketList[i];
            if (np.getNodeCount() > 1) {
                var targetNodePacket = mergedNpg.getNodePacketForNode(np.getNodeList()[0]);
                for (var j = 1; j < np.getNodeList().length; j++) {
                    mergedNpg.mergeNodePackets(targetNodePacket, mergedNpg.getNodePacketForNode(np.getNodeList()[j]));
                }
            }
        }
        return mergedNpg;
    };
    prototype.collapseGraph = function(graph) {
        try {
            var nirbeNrm = this.buildNarrowsIsRequiredByEqualsMap(graph);
            var nirbeNpg = this.buildNodePacketGraph(nirbeNrm);
            var breNrm = this.buildBroadensRequiresEqualsMap(graph);
            var breNpg = this.buildNodePacketGraph(breNrm);
            var finalNodePacketGraph = this.mergeNodePacketGraphs(nirbeNpg, breNpg);
            finalNodePacketGraph.buildPacketRelationsFromNodeRelations(graph.getRelationList());
            return finalNodePacketGraph;
        }catch (e) {
             throw e;
        }
    };
}, {nodesProcessed: {name: "Array", arguments: ["Node"]}, visitedNodes: {name: "Array", arguments: ["Node"]}}, {});
