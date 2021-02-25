var PapDependencyParms = function() {};
PapDependencyParms = stjs.extend(PapDependencyParms, null, [], function(constructor, prototype) {
    prototype.parentIndex = null;
    prototype.childIndex = null;
    prototype.type = null;
    prototype.weight = null;
    prototype.leak = null;
    prototype.dependencyFirst = false;
    prototype.reverse = false;
    prototype.getParentIndex = function() {
        return this.parentIndex;
    };
    prototype.setParentIndex = function(parentIndex) {
        this.parentIndex = parentIndex;
    };
    prototype.getChildIndex = function() {
        return this.childIndex;
    };
    prototype.setChildIndex = function(childIndex) {
        this.childIndex = childIndex;
    };
    prototype.getType = function() {
        return this.type;
    };
    prototype.setType = function(type) {
        this.type = type;
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
    prototype.getDependencyFirst = function() {
        return this.dependencyFirst;
    };
    prototype.setDependencyFirst = function(dependencyFirst) {
        this.dependencyFirst = dependencyFirst;
    };
    prototype.getReverse = function() {
        return this.reverse;
    };
    prototype.setReverse = function(reverse) {
        this.reverse = reverse;
    };
    prototype.swapParentChildIndexes = function() {
        var temp = this.parentIndex;
        this.parentIndex = this.childIndex;
        this.childIndex = temp;
    };
}, {}, {});
