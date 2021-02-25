var NodeRelationMap = function() {
    this.nodeList = new Array();
    this.relationMap = {};
};
NodeRelationMap = stjs.extend(NodeRelationMap, null, [], function(constructor, prototype) {
    prototype.nodeList = null;
    prototype.relationMap = null;
    prototype.addNodeRelations = function(n, rm) {
        this.nodeList.push(n);
        this.relationMap[n.getId()] = rm;
    };
    prototype.getRelationsForNode = function(n) {
        return this.relationMap[n.getId()];
    };
    prototype.getNodeList = function() {
        return this.nodeList;
    };
    prototype.setNodeList = function(nodeList) {
        this.nodeList = nodeList;
    };
    prototype.getRelationMap = function() {
        return this.relationMap;
    };
    prototype.setRelationMap = function(relationMap) {
        this.relationMap = relationMap;
    };
    prototype.toString = function() {
        var ret = "";
        var n;
        var nra;
        for (var i = 0; i < this.nodeList.length; i++) {
            n = this.nodeList[i];
            ret = ret + n.toString() + "\n";
            nra = this.relationMap[n.getId()];
            for (var j = 0; j < nra.length; j++) {
                ret = ret + "\t" + nra[j].toString() + "\n";
            }
        }
        return ret;
    };
}, {nodeList: {name: "Array", arguments: ["Node"]}, relationMap: {name: "Map", arguments: [null, {name: "Array", arguments: ["NodeRelation"]}]}}, {});
