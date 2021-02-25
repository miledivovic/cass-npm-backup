var PapDependency = function(depParms) {
    PapDependencyParms.call(this);
    if (depParms.getDependencyFirst()) {
        this.setParentIndex(depParms.getParentIndex());
        this.setChildIndex(depParms.getChildIndex());
    } else {
        this.setChildIndex(depParms.getParentIndex());
        this.setParentIndex(depParms.getChildIndex());
    }
    this.setType(depParms.getType());
    this.setWeight(depParms.getWeight());
    this.setLeak(depParms.getLeak());
};
PapDependency = stjs.extend(PapDependency, PapDependencyParms, [], function(constructor, prototype) {
    constructor.NECESSARY_TYPE = "NECESSARY";
    constructor.SUFFICIENT_TYPE = "SUFFICIENT";
    constructor.EQUIVALENCE_TYPE = "EQUIVALENCE";
    constructor.BROADENS_TYPE = "BROADENS";
    constructor.NULL_TYPE = "NULL";
    constructor.HASH_CODE_MULTIPLIER = 41;
    constructor.HASH_CODE_PERCENTAGE_MULTIPLIER = 97;
    constructor.getDependencyTypes = function() {
        var dt = new Array();
        dt.push(PapDependency.NECESSARY_TYPE);
        dt.push(PapDependency.SUFFICIENT_TYPE);
        dt.push(PapDependency.EQUIVALENCE_TYPE);
        dt.push(PapDependency.BROADENS_TYPE);
        dt.push(PapDependency.NULL_TYPE);
        return dt;
    };
    prototype.toString = function() {
        return "Dependency: [" + this.getType().toString() + "] " + this.getParentIndex() + " <-- " + this.getChildIndex();
    };
    prototype.equals = function(other) {
        return (this.getParentIndex() == (other).getParentIndex()) && (this.getChildIndex() == (other).getChildIndex()) && (this.getType() == (other).getType());
    };
    prototype.hashCode = function() {
        var temp = 0;
        if (PapDependency.NECESSARY_TYPE.equalsIgnoreCase(this.getType())) 
            temp = 1;
         else if (PapDependency.EQUIVALENCE_TYPE.equalsIgnoreCase(this.getType())) 
            temp = 2;
         else if (PapDependency.SUFFICIENT_TYPE.equalsIgnoreCase(this.getType())) 
            temp = 3;
         else if (PapDependency.BROADENS_TYPE.equalsIgnoreCase(this.getType())) 
            temp = 4;
        temp *= PapDependency.HASH_CODE_MULTIPLIER;
        temp += this.getParentIndex();
        temp *= PapDependency.HASH_CODE_MULTIPLIER;
        temp += this.getChildIndex();
        return temp + (stjs.trunc((100 * this.getWeight())) % PapDependency.HASH_CODE_PERCENTAGE_MULTIPLIER);
    };
}, {}, {});
