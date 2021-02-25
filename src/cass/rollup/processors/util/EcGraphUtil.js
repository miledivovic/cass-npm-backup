var EcGraphUtil = function() {};
EcGraphUtil = stjs.extend(EcGraphUtil, null, [], function(constructor, prototype) {
    constructor.buildIdSearchQueryForIdList = function(idList) {
        var searchQuery = "";
        if (idList.length > 1) 
            searchQuery = "(";
        for (var i = 0; i < idList.length; i++) {
            if (i > 0) 
                searchQuery += " OR ";
            searchQuery += "(\\*@id:\"" + idList[i] + "\")";
        }
        if (idList.length > 1) 
            searchQuery += ")";
        return searchQuery;
    };
}, {}, {});
