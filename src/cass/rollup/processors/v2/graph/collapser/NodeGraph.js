var NodeGraph = function() {
    this.nodeList = new Array();
    this.relationList = new Array();
    this.nodeMap = {};
    this.relationMap = {};
};
NodeGraph = stjs.extend(NodeGraph, null, [], function(constructor, prototype) {
    prototype.nodeList = null;
    prototype.nodeMap = null;
    prototype.relationList = null;
    prototype.relationMap = null;
    prototype.addNode = function(n) {
        if (this.nodeMap[n.getId()] == null) {
            this.nodeList.push(n);
            this.nodeMap[n.getId()] = n;
        }
    };
    prototype.createImpliedRelations = function() {
        try {
            var relationsToAdd = new Array();
            var nr;
            for (var i = 0; i < this.relationList.length; i++) {
                nr = this.relationList[i];
                if (nr.getType() == RelationType.RELATION_TYPE.NARROWS) {
                    relationsToAdd.push(new NodeRelation(nr.getTarget(), nr.getSource(), RelationType.RELATION_TYPE.BROADENS));
                } else if (nr.getType() == RelationType.RELATION_TYPE.REQUIRES) {
                    relationsToAdd.push(new NodeRelation(nr.getTarget(), nr.getSource(), RelationType.RELATION_TYPE.IS_REQUIRED_BY));
                } else if (nr.getType() == RelationType.RELATION_TYPE.BROADENS) {
                    relationsToAdd.push(new NodeRelation(nr.getTarget(), nr.getSource(), RelationType.RELATION_TYPE.NARROWS));
                } else if (nr.getType() == RelationType.RELATION_TYPE.IS_REQUIRED_BY) {
                    relationsToAdd.push(new NodeRelation(nr.getTarget(), nr.getSource(), RelationType.RELATION_TYPE.REQUIRES));
                }
            }
            var nnr;
            for (var i = 0; i < relationsToAdd.length; i++) {
                nnr = relationsToAdd[i];
                this.addRelation(nnr.getSource(), nnr.getTarget(), nnr.getType());
            }
        }catch (e) {
             throw new Exception("createImpliedRelations: " + e.toString());
        }
    };
    prototype.addRelation = function(sourceNode, targetNode, relationType) {
        try {
            if (sourceNode == null || targetNode == null) 
                return;
            var nodeRelationList;
            if (this.nodeHasRelations(sourceNode)) 
                nodeRelationList = this.getRelationListForNode(sourceNode);
             else {
                nodeRelationList = new Array();
                this.relationMap[sourceNode.getId()] = nodeRelationList;
            }
            var newNodeRelation = new NodeRelation(sourceNode, targetNode, relationType);
            if (!this.doesRelationAlreadyExist(newNodeRelation, nodeRelationList)) {
                nodeRelationList.push(newNodeRelation);
                this.relationList.push(newNodeRelation);
            }
        }catch (e) {
             throw new Exception("addRelation: " + e.toString());
        }
    };
    prototype.getRelationListForNode = function(n) {
        return this.relationMap[n.getId()];
    };
    prototype.getNarrowsIsRequiredByEqualsRelationListForNode = function(n) {
        var retList = new Array();
        if (this.relationMap[n.getId()] != null) {
            var nra = this.relationMap[n.getId()];
            var nr;
            for (var i = 0; i < nra.length; i++) {
                nr = nra[i];
                if (nr.getType() == RelationType.RELATION_TYPE.IS_EQUIVALENT_TO || nr.getType() == RelationType.RELATION_TYPE.NARROWS || nr.getType() == RelationType.RELATION_TYPE.IS_REQUIRED_BY) {
                    retList.push(nr);
                }
            }
        }
        return retList;
    };
    prototype.getBroadensRequiresEqualsRelationListForNode = function(n) {
        var retList = new Array();
        if (this.relationMap[n.getId()] != null) {
            var nra = this.relationMap[n.getId()];
            var nr;
            for (var i = 0; i < nra.length; i++) {
                nr = nra[i];
                if (nr.getType() == RelationType.RELATION_TYPE.IS_EQUIVALENT_TO || nr.getType() == RelationType.RELATION_TYPE.BROADENS || nr.getType() == RelationType.RELATION_TYPE.REQUIRES) {
                    retList.push(nr);
                }
            }
        }
        return retList;
    };
    prototype.getNodeList = function() {
        return this.nodeList;
    };
    prototype.setNodeList = function(nodeList) {
        this.nodeList = nodeList;
    };
    prototype.getRelationList = function() {
        return this.relationList;
    };
    prototype.setRelationList = function(relationList) {
        this.relationList = relationList;
    };
    prototype.nodeHasRelations = function(n) {
        if (this.relationMap[n.getId()] == null) 
            return false;
        return true;
    };
    prototype.doesRelationAlreadyExist = function(nodeRelation, nodeRelationList) {
        var nr;
        for (var i = 0; i < nodeRelationList.length; i++) {
            nr = nodeRelationList[i];
            if (nodeRelation.getSource().getId() == nr.getSource().getId() && nodeRelation.getTarget().getId() == nr.getTarget().getId() && nodeRelation.getType() == nr.getType()) 
                return true;
        }
        return false;
    };
    prototype.toStringGraphAll = function() {
        var ret = "";
        var n;
        for (var i = 0; i < this.nodeList.length; i++) {
            n = this.nodeList[i];
            ret = ret + n.toString() + "\n";
        }
        var nr;
        for (var i = 0; i < this.relationList.length; i++) {
            nr = this.relationList[i];
            ret = ret + nr.toString() + "\n";
        }
        return ret;
    };
    prototype.toStringGraphByNode = function() {
        var ret = "";
        ret = ret + " - TEST HOWDY - \n";
        var n;
        var nra;
        var nr;
        for (var i = 0; i < this.nodeList.length; i++) {
            n = this.nodeList[i];
            ret = ret + "   --> " + n.toString() + "\n";
            if (this.nodeHasRelations(n)) {
                nra = this.getRelationListForNode(n);
                for (var j = 0; j < nra.length; j++) {
                    nr = nra[j];
                    ret = ret + "\t\t" + nr.toString() + "\n";
                }
            } else 
                ret = ret + "\t\t---------NO RELATIONSHIPS---------\n";
        }
        return ret;
    };
    prototype.toStringGraphByNodeSplit = function() {
        var ret = "";
        var n;
        var nra;
        var nr;
        for (var i = 0; i < this.nodeList.length; i++) {
            n = this.nodeList[i];
            ret = ret + "   --> " + n.toString() + "\n";
            if (this.nodeHasRelations(n)) {
                ret = ret + "\t\t=== Narrows/isRequiredBy ===\n";
                nra = this.getNarrowsIsRequiredByEqualsRelationListForNode(n);
                for (var j = 0; j < nra.length; j++) {
                    nr = nra[j];
                    ret = ret + "\t\t" + nr.toString() + "\n";
                }
                ret = ret + "\t\t=== Broadens/Requires ===\n";
                nra = this.getBroadensRequiresEqualsRelationListForNode(n);
                for (var j = 0; j < nra.length; j++) {
                    nr = nra[j];
                    ret = ret + "\t\t" + nr.toString() + "\n";
                }
            } else 
                ret = ret + "\t\t---------NO RELATIONSHIPS---------\n";
        }
        return ret;
    };
}, {nodeList: {name: "Array", arguments: ["Node"]}, nodeMap: {name: "Map", arguments: [null, "Node"]}, relationList: {name: "Array", arguments: ["NodeRelation"]}, relationMap: {name: "Map", arguments: [null, {name: "Array", arguments: ["NodeRelation"]}]}}, {});
