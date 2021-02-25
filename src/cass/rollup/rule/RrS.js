var RrS = function() {
    this.token = new Array();
    this.query = new Array();
};
RrS = stjs.extend(RrS, null, [], function(constructor, prototype) {
    prototype.token = null;
    prototype.query = null;
    prototype.addToken = function(rrToken) {
        this.token.push(rrToken);
    };
    prototype.addQuery = function(rrQuery) {
        this.query.push(rrQuery);
    };
}, {token: {name: "Array", arguments: ["RrToken"]}, query: {name: "Array", arguments: ["RrQuery"]}}, {});
