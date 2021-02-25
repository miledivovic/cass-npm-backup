var PapDependencyDefinitionBase = function(depClass, reverse, weight, leak) {
    this.depClass = depClass;
    this.reverse = reverse;
    this.weight = weight;
    this.leak = leak;
};
PapDependencyDefinitionBase = stjs.extend(PapDependencyDefinitionBase, null, [], function(constructor, prototype) {
    prototype.depClass = null;
    prototype.reverse = false;
    prototype.weight = null;
    prototype.leak = null;
    prototype.getDepClass = function() {
        return this.depClass;
    };
    prototype.setDepClass = function(depClass) {
        this.depClass = depClass;
    };
    prototype.getReverse = function() {
        return this.reverse;
    };
    prototype.setReverse = function(reverse) {
        this.reverse = reverse;
    };
    prototype.getWeight = function() {
        return this.weight;
    };
    prototype.setWeight = function(weight) {
        this.weight = weight;
    };
    prototype.getLeak = function() {
        return this.leak;
    };
    prototype.setLeak = function(leak) {
        this.leak = leak;
    };
}, {}, {});
