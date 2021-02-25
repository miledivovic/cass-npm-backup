var PapDependencyDefinitions = function() {
    this.dependencyDefinitionMap = {};
};
PapDependencyDefinitions = stjs.extend(PapDependencyDefinitions, null, [], function(constructor, prototype) {
    constructor.DEFAULT_WEIGHT = 1.0;
    constructor.DEFAULT_LEAK = 0.0;
    constructor.DEFAULT_REVERSE = false;
    constructor.DEFAULT_NARROWS_BASE_CLASS = "broadens";
    constructor.DEFAULT_NARROWS_REVERSE = true;
    constructor.DEFAULT_NARROWS_WEIGHT = 0.9;
    constructor.DEFAULT_NARROWS_LEAK = 0.0;
    constructor.DEFAULT_NARROWS_KEY = "narrows";
    constructor.DEFAULT_ENABLES_BASE_CLASS = "isSufficientFor";
    constructor.DEFAULT_ENABLES_REVERSE = true;
    constructor.DEFAULT_ENABLES_WEIGHT = 0.9;
    constructor.DEFAULT_ENABLES_LEAK = 0.0;
    constructor.DEFAULT_ENABLES_KEY = "enables";
    constructor.DEFAULT_REQUIRES_BASE_CLASS = "isRequiredBy";
    constructor.DEFAULT_REQUIRES_REVERSE = false;
    constructor.DEFAULT_REQUIRES_WEIGHT = 0.9;
    constructor.DEFAULT_REQUIRES_LEAK = 0.0;
    constructor.DEFAULT_REQUIRES_KEY = "requires";
    prototype.dependencyDefinitionMap = null;
    /**
     *  Pulled default values from CruncherAssertionProcessor
     *      dependencyDefs = new JSONObject();
     * 
     *      JSONObject narrows = new JSONObject();
     *      narrows.put("class","broadens");
     *      narrows.put("reverse",true);
     *      narrows.put("weight",0.9);
     *      dependencyDefs.put("narrows",narrows);
     * 
     *      JSONObject enables = new JSONObject();
     *      enables.put("class","isSufficientFor");
     *      enables.put("weight",0.9);
     *      enables.put("reverse",true);
     *      dependencyDefs.put("enables",enables);
     * 
     *      JSONObject requires = new JSONObject();
     *      requires.put("class","isRequiredBy");
     *      requires.put("weight",0.9);
     *      dependencyDefs.put("requires",requires);
     */
    prototype.initDefaultDefinitions = function() {
        var narrowsDepDef = new PapDependencyDefinitionBase(PapDependencyDefinitions.DEFAULT_NARROWS_BASE_CLASS, PapDependencyDefinitions.DEFAULT_NARROWS_REVERSE, PapDependencyDefinitions.DEFAULT_NARROWS_WEIGHT, PapDependencyDefinitions.DEFAULT_NARROWS_LEAK);
        var enablesDepDef = new PapDependencyDefinitionBase(PapDependencyDefinitions.DEFAULT_ENABLES_BASE_CLASS, PapDependencyDefinitions.DEFAULT_ENABLES_REVERSE, PapDependencyDefinitions.DEFAULT_ENABLES_WEIGHT, PapDependencyDefinitions.DEFAULT_ENABLES_LEAK);
        var requiresDepDef = new PapDependencyDefinitionBase(PapDependencyDefinitions.DEFAULT_REQUIRES_BASE_CLASS, PapDependencyDefinitions.DEFAULT_REQUIRES_REVERSE, PapDependencyDefinitions.DEFAULT_REQUIRES_WEIGHT, PapDependencyDefinitions.DEFAULT_REQUIRES_LEAK);
        this.addDependencyDefinition(PapDependencyDefinitions.DEFAULT_NARROWS_KEY, narrowsDepDef);
        this.addDependencyDefinition(PapDependencyDefinitions.DEFAULT_ENABLES_KEY, enablesDepDef);
        this.addDependencyDefinition(PapDependencyDefinitions.DEFAULT_REQUIRES_KEY, requiresDepDef);
    };
    prototype.getWeightForType = function(depType) {
        var base = this.dependencyDefinitionMap[depType];
        if (base == null) 
            return PapDependencyDefinitions.DEFAULT_WEIGHT;
         else 
            return base.getWeight();
    };
    prototype.getLeakForType = function(depType) {
        var base = this.dependencyDefinitionMap[depType];
        if (base == null) 
            return PapDependencyDefinitions.DEFAULT_LEAK;
         else 
            return base.getLeak();
    };
    prototype.getReverseForType = function(depType) {
        var base = this.dependencyDefinitionMap[depType];
        if (base == null) 
            return PapDependencyDefinitions.DEFAULT_REVERSE;
         else 
            return base.getReverse();
    };
    prototype.addDependencyDefinition = function(relationshipName, definition) {
        this.getDependencyDefinitionMap()[relationshipName] = definition;
    };
    prototype.getDependencyDefinitionMap = function() {
        return this.dependencyDefinitionMap;
    };
    prototype.setDependencyDefinitionMap = function(dependencyDefinitionMap) {
        this.dependencyDefinitionMap = dependencyDefinitionMap;
    };
}, {dependencyDefinitionMap: {name: "Map", arguments: [null, "PapDependencyDefinitionBase"]}}, {});
