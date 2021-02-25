var NodePacketGraph = function() {
    this.nodePacketList = new Array();
    this.nodePacketMap = {};
    this.relationList = new Array();
};
NodePacketGraph = stjs.extend(NodePacketGraph, null, [], function(constructor, prototype) {
    prototype.nodePacketList = null;
    prototype.nodePacketMap = null;
    prototype.relationList = null;
    prototype.initNodePacketGraph = function(nodes) {
        var np;
        var n;
        this.nodePacketList = new Array();
        this.nodePacketMap = {};
        this.relationList = new Array();
        for (var i = 0; i < nodes.length; i++) {
            n = nodes[i];
            np = new NodePacket();
            np.addNode(n);
            this.nodePacketList.push(np);
            this.nodePacketMap[n.getId()] = np;
        }
    };
    prototype.getNodePacketForNode = function(n) {
        return this.nodePacketMap[n.getId()];
    };
    prototype.mergeNodePackets = function(packet1, packet2) {
        if (packet1 != packet2) {
            var n;
            var na = packet2.getNodeList();
            for (var i = 0; i < na.length; i++) {
                n = na[i];
                packet1.addNode(n);
                this.nodePacketMap[n.getId()] = packet1;
            }
            this.nodePacketList = ArrayUtil.arrayRemove(this.nodePacketList, packet2);
        }
    };
    prototype.getNodePacketList = function() {
        return this.nodePacketList;
    };
    prototype.setNodePacketList = function(nodePacketList) {
        this.nodePacketList = nodePacketList;
    };
    prototype.getRelationList = function() {
        return this.relationList;
    };
    prototype.setRelationList = function(relationList) {
        this.relationList = relationList;
    };
    prototype.addNodePacket = function(np) {
        this.nodePacketList.push(np);
    };
    prototype.addRelation = function(sourceNodePacket, targetNodePacket, relationType) {
        var newPacketRelation = new PacketRelation(sourceNodePacket, targetNodePacket, relationType);
        this.relationList.push(newPacketRelation);
    };
    prototype.buildPacketRelationsFromNodeRelations = function(nodeRelationList) {
        var sourceNodePacket;
        var targetNodePacket;
        var nr;
        for (var i = 0; i < nodeRelationList.length; i++) {
            nr = nodeRelationList[i];
            sourceNodePacket = this.getNodePacketForNode(nr.getSource());
            targetNodePacket = this.getNodePacketForNode(nr.getTarget());
            if (sourceNodePacket != targetNodePacket) 
                this.addRelation(sourceNodePacket, targetNodePacket, nr.getType());
        }
    };
    prototype.toStringGraphAll = function() {
        var ret = "";
        ret = ret + ">> Packets: \n";
        var np;
        for (var i = 0; i < this.nodePacketList.length; i++) {
            np = this.nodePacketList[i];
            ret = ret + "   " + np.toString() + "\n";
        }
        var pr;
        if (this.relationList.length > 0) {
            ret = ret + ">>Relationships: >\n";
            for (var i = 0; i < this.relationList.length; i++) {
                pr = this.relationList[i];
                ret = ret + "   " + pr.toString() + "\n";
            }
        } else {
            ret = ret + ">>NO RELATIONS EXIST!";
        }
        return ret;
    };
}, {nodePacketList: {name: "Array", arguments: ["NodePacket"]}, nodePacketMap: {name: "Map", arguments: [null, "NodePacket"]}, relationList: {name: "Array", arguments: ["PacketRelation"]}}, {});
