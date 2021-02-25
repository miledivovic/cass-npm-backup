/**
 *  A directed implementation of {{#crossLink "Graph"}}Graph{{/crossLink}}. Edges have types. Two vertices may have many edges between them.
 * 
 *  @param <V>
 *  @param <E>
 *  @author fray
 *  @class EcDirectedGraph
 *  @module com.eduworks.ec
 *  @extends Graph
 */
var EcDirectedGraph = function() {
    this.edges = new Array();
    this.verticies = new Array();
};
EcDirectedGraph = stjs.extend(EcDirectedGraph, null, [Graph], function(constructor, prototype) {
    prototype.edges = null;
    prototype.verticies = null;
    prototype.getEdges = function() {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) 
            results[i] = this.edges[i].edge;
        return results;
    };
    prototype.getVertices = function() {
        var results = new Array();
        for (var i = 0; i < this.verticies.length; i++) 
            results[i] = this.verticies[i];
        return results;
    };
    prototype.containsVertex = function(vertex) {
        for (var i = 0; i < this.verticies.length; i++) 
            if (vertex.equals(this.verticies[i])) 
                return true;
        return false;
    };
    prototype.containsEdge = function(edge) {
        for (var i = 0; i < this.edges.length; i++) 
            if (edge.equals(this.edges[i].edge)) 
                return true;
        return false;
    };
    prototype.getEdgeCount = function() {
        return this.edges.length;
    };
    prototype.getVertexCount = function() {
        return this.verticies.length;
    };
    prototype.getNeighbors = function(vertex) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].destination);
             else if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].source);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.getIncidentEdges = function(vertex) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].edge);
             else if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].edge);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.getIncidentVertices = function(edge) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) {
                results.push(this.edges[i].source);
                results.push(this.edges[i].destination);
            }
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.findEdge = function(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].source) && v2.equals(this.edges[i].destination)) 
                return this.edges[i].edge;
            if (v1.equals(this.edges[i].destination) && v2.equals(this.edges[i].source)) 
                return this.edges[i].edge;
        }
        return null;
    };
    prototype.findEdgeSet = function(v1, v2) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].source) && v2.equals(this.edges[i].destination)) 
                results.push(this.edges[i].edge);
            if (v1.equals(this.edges[i].destination) && v2.equals(this.edges[i].source)) 
                results.push(this.edges[i].edge);
        }
        return results;
    };
    prototype.addVertex = function(vertex) {
        this.verticies.push(vertex);
        return true;
    };
    prototype.addVertexSafely = function(vertex) {
        if (EcArray.has(this.verticies, vertex)) 
            return false;
        this.verticies.push(vertex);
        return true;
    };
    prototype.removeVertex = function(vertex) {
        var indexOf = EcArray.indexOf(this.verticies, vertex);
        if (indexOf != -1) {
            for (var i = 0; i < this.edges.length; i++) {
                if (this.edges[i].source.equals(vertex) || this.edges[i].destination.equals(vertex)) {
                    this.edges.splice(i, 1);
                    i--;
                }
            }
            this.verticies.splice(indexOf, 1);
            return true;
        }
        return false;
    };
    prototype.removeEdge = function(edge) {
        var success = false;
        for (var i = 0; i < this.edges.length; i++) {
            if (this.edges[i].edge.equals(edge)) {
                this.edges.splice(i, 1);
                i--;
                success = true;
            }
        }
        return success;
    };
    prototype.isNeighbor = function(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].source) && v2.equals(this.edges[i].destination)) 
                return true;
             else if (v1.equals(this.edges[i].destination) && v2.equals(this.edges[i].source)) 
                return true;
        }
        return false;
    };
    prototype.isIncident = function(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if ((vertex.equals(this.edges[i].source) || vertex.equals(this.edges[i].destination)) && edge.equals(this.edges[i].edge)) 
                return true;
        }
        return false;
    };
    prototype.degree = function(vertex) {
        var count = 0;
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source) || vertex.equals(this.edges[i].destination)) 
                count++;
        }
        return count;
    };
    prototype.getNeighborCount = function(vertex) {
        return this.getNeighbors(vertex).length;
    };
    prototype.getIncidentCount = function(edge) {
        return this.getIncidentVertices(edge).length;
    };
    prototype.getEdgeType = function(edge) {};
    prototype.getDefaultEdgeType = function() {};
    prototype.getEdgesOfType = function(edge_type) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (this.getEdgeType(this.edges[i].edge) == edge_type) 
                results.push(this.edges[i].edge);
        }
        return results;
    };
    prototype.getEdgeCountOfType = function(edge_type) {
        return this.getEdgesOfType(edge_type).length;
    };
    prototype.getInEdges = function(vertex) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].edge);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.getOutEdges = function(vertex) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].edge);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.inDegree = function(vertex) {
        return this.getInEdges(vertex).length;
    };
    prototype.outDegree = function(vertex) {
        return this.getOutEdges(vertex).length;
    };
    prototype.getSource = function(directed_edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (directed_edge.equals(this.edges[i].edge)) 
                return this.edges[i].source;
        }
        return null;
    };
    prototype.getDest = function(directed_edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (directed_edge.equals(this.edges[i].edge)) 
                return this.edges[i].destination;
        }
        return null;
    };
    prototype.getPredecessors = function(vertex) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].source);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.getSuccessors = function(vertex) {
        var results = new Array();
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].destination);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    prototype.isPredecessor = function(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].destination)) 
                if (v2.equals(this.edges[i].source)) 
                    return true;
        }
        return false;
    };
    prototype.isSuccessor = function(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v2.equals(this.edges[i].destination)) 
                if (v1.equals(this.edges[i].source)) 
                    return true;
        }
        return false;
    };
    prototype.getPredecessorCount = function(vertex) {
        return this.getPredecessors(vertex).length;
    };
    prototype.getSuccessorCount = function(vertex) {
        return this.getSuccessors(vertex).length;
    };
    prototype.isSource = function(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) 
                if (vertex.equals(this.edges[i].source)) 
                    return true;
        }
        return false;
    };
    prototype.isDest = function(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) 
                if (vertex.equals(this.edges[i].destination)) 
                    return true;
        }
        return false;
    };
    prototype.addEdge = function(e, v1, v2) {
        this.addVertexSafely(v1);
        this.addVertexSafely(v2);
        var t = new Triple();
        t.source = v1;
        t.destination = v2;
        t.edge = e;
        this.edges.push(t);
        return true;
    };
    prototype.addEdgeUnsafely = function(e, v1, v2) {
        var t = new Triple();
        t.source = v1;
        t.destination = v2;
        t.edge = e;
        this.edges.push(t);
        return true;
    };
    prototype.addEdgeSafely = function(e, v1, v2) {
        this.addVertexSafely(v1);
        this.addVertexSafely(v2);
        var t = new Triple();
        t.source = v1;
        t.destination = v2;
        t.edge = e;
        if (EcArray.has(this.edges, t)) 
            return false;
        this.edges.push(t);
        return true;
    };
    prototype.getOpposite = function(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) 
                if (vertex.equals(this.edges[i].destination)) 
                    return this.edges[i].source;
                 else if (vertex.equals(this.edges[i].source)) 
                    return this.edges[i].destination;
        }
        return null;
    };
}, {edges: {name: "Array", arguments: [{name: "Triple", arguments: ["V", "V", "E"]}]}, verticies: {name: "Array", arguments: ["V"]}}, {});
