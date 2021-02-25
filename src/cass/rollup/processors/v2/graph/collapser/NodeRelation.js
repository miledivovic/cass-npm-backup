var NodeRelation = function(source, target, type) {
    this.source = source;
    this.target = target;
    this.type = type;
};
NodeRelation = stjs.extend(NodeRelation, null, [], function(constructor, prototype) {
    prototype.type = null;
    prototype.source = null;
    prototype.target = null;
    prototype.getSource = function() {
        return this.source;
    };
    prototype.setSource = function(source) {
        this.source = source;
    };
    prototype.getTarget = function() {
        return this.target;
    };
    prototype.setTarget = function(target) {
        this.target = target;
    };
    prototype.getType = function() {
        return this.type;
    };
    prototype.setType = function(type) {
        this.type = type;
    };
    prototype.toString = function() {
        return this.getSource().toString() + " >>" + this.getType() + "<< " + this.getTarget().toString();
    };
}, {type: {name: "Enum", arguments: ["RelationType.RELATION_TYPE"]}, source: "Node", target: "Node"}, {});
