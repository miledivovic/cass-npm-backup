var RelationType = function() {};
RelationType = stjs.extend(RelationType, null, [], function(constructor, prototype) {
    constructor.RELATION_TYPE = stjs.enumeration("IS_EQUIVALENT_TO", "NARROWS", "BROADENS", "REQUIRES", "IS_REQUIRED_BY");
}, {}, {});
