var Node = function(nameId) {
    this.name = nameId;
    this.id = nameId;
};
Node = stjs.extend(Node, null, [], function(constructor, prototype) {
    prototype.name = null;
    prototype.id = null;
    prototype.description = null;
    prototype.getName = function() {
        return this.name;
    };
    prototype.setName = function(name) {
        this.name = name;
    };
    prototype.getId = function() {
        return this.id;
    };
    prototype.setId = function(id) {
        this.id = id;
    };
    prototype.getDescription = function() {
        return this.description;
    };
    prototype.setDescription = function(description) {
        this.description = description;
    };
    prototype.toString = function() {
        return "Node: \"" + this.id + "\"";
    };
}, {}, {});
