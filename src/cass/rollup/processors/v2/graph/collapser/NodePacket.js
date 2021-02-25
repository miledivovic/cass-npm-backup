var NodePacket = function() {
    this.nodeList = new Array();
    this.nodeMap = {};
};
NodePacket = stjs.extend(NodePacket, null, [], function(constructor, prototype) {
    prototype.nodeList = null;
    prototype.nodeMap = null;
    prototype.getNodeList = function() {
        return this.nodeList;
    };
    prototype.setNodeList = function(nodeList) {
        this.nodeList = nodeList;
    };
    prototype.getNodeCount = function() {
        return this.nodeList.length;
    };
    prototype.addNode = function(n) {
        if (this.nodeMap[n.getId()] == null) {
            this.nodeList.push(n);
            this.nodeMap[n.getId()] = n;
        }
    };
    prototype.toString = function() {
        var ret = "";
        ret = ret + "NodePacket: (";
        for (var i = 0; i < this.nodeList.length; i++) {
            if ((i + 1) < this.nodeList.length) 
                ret = ret + this.nodeList[i].toString() + ", ";
             else 
                ret = ret + this.nodeList[i].toString();
        }
        ret = ret + ")";
        return ret;
    };
}, {nodeList: {name: "Array", arguments: ["Node"]}, nodeMap: {name: "Map", arguments: [null, "Node"]}}, {});
