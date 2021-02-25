var CgEdge = function(source, target, relation) {
    this.source = source;
    this.target = target;
    this.relation = relation;
};
CgEdge = stjs.extend(CgEdge, null, [], function(constructor, prototype) {
    prototype.source = null;
    prototype.target = null;
    prototype.relation = null;
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
    prototype.getRelation = function() {
        return this.relation;
    };
    prototype.setRelation = function(relation) {
        this.relation = relation;
    };
}, {}, {});
