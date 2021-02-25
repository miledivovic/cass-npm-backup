var PapUpdate = function(index, change, positive) {
    this.index = index;
    this.change = change;
    this.visited = new Array();
    this.positive = positive;
};
PapUpdate = stjs.extend(PapUpdate, null, [], function(constructor, prototype) {
    prototype.index = 0;
    prototype.visited = null;
    prototype.change = 0.0;
    prototype.positive = false;
    prototype.hasVisited = function(index) {
        for (var i = 0; i < this.visited.length; i++) {
            if (this.visited[i].intValue() == index) 
                return true;
        }
        return false;
    };
    prototype.updateChild = function(index, change) {
        var res = new PapUpdate(index, change, this.positive);
        res.setVisited(this.cloneVisited());
        res.getVisited().push(index);
        return res;
    };
    prototype.toString = function() {
        var sign = this.positive ? "+" : "-";
        return "<update " + this.index + " | " + sign + this.change + ">";
    };
    prototype.compare = function(other) {
        var diff = this.change - other.getChange();
        if (diff < 0) 
            return 1;
        if (diff > 0) 
            return -1;
        return 0;
    };
    prototype.cloneVisited = function() {
        var newVis = new Array();
        for (var i = 0; i < this.visited.length; i++) {
            newVis.push(this.visited[i]);
        }
        return newVis;
    };
    prototype.getIndex = function() {
        return this.index;
    };
    prototype.setIndex = function(index) {
        this.index = index;
    };
    prototype.getVisited = function() {
        return this.visited;
    };
    prototype.setVisited = function(visited) {
        this.visited = visited;
    };
    prototype.getChange = function() {
        return this.change;
    };
    prototype.setChange = function(change) {
        this.change = change;
    };
    prototype.getPositive = function() {
        return this.positive;
    };
    prototype.setPositive = function(positive) {
        this.positive = positive;
    };
}, {visited: {name: "Array", arguments: [null]}}, {});
