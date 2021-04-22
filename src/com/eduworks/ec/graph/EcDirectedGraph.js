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
module.exports = class EcDirectedGraph extends Graph{
    edges = [];
    verticies = [];
    getEdges() {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) 
            results[i] = this.edges[i].edge;
        return results;
    };
    getVertices() {
        var results = [];
        for (var i = 0; i < this.verticies.length; i++) 
            results[i] = this.verticies[i];
        return results;
    };
    containsVertex(vertex) {
        for (var i = 0; i < this.verticies.length; i++) 
            if (vertex.equals(this.verticies[i])) 
                return true;
        return false;
    };
    containsEdge(edge) {
        for (var i = 0; i < this.edges.length; i++) 
            if (edge.equals(this.edges[i].edge)) 
                return true;
        return false;
    };
    getEdgeCount() {
        return this.edges.length;
    };
    getVertexCount() {
        return this.verticies.length;
    };
    getNeighbors(vertex) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].destination);
             else if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].source);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    getIncidentEdges(vertex) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].edge);
             else if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].edge);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    getIncidentVertices(edge) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) {
                results.push(this.edges[i].source);
                results.push(this.edges[i].destination);
            }
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    findEdge(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].source) && v2.equals(this.edges[i].destination)) 
                return this.edges[i].edge;
            if (v1.equals(this.edges[i].destination) && v2.equals(this.edges[i].source)) 
                return this.edges[i].edge;
        }
        return null;
    };
    findEdgeSet(v1, v2) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].source) && v2.equals(this.edges[i].destination)) 
                results.push(this.edges[i].edge);
            if (v1.equals(this.edges[i].destination) && v2.equals(this.edges[i].source)) 
                results.push(this.edges[i].edge);
        }
        return results;
    };
    addVertex(vertex) {
        this.verticies.push(vertex);
        return true;
    };
    addVertexSafely(vertex) {
        if (EcArray.has(this.verticies, vertex)) 
            return false;
        this.verticies.push(vertex);
        return true;
    };
    removeVertex(vertex) {
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
    removeEdge(edge) {
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
    isNeighbor(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].source) && v2.equals(this.edges[i].destination)) 
                return true;
             else if (v1.equals(this.edges[i].destination) && v2.equals(this.edges[i].source)) 
                return true;
        }
        return false;
    };
    isIncident(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if ((vertex.equals(this.edges[i].source) || vertex.equals(this.edges[i].destination)) && edge.equals(this.edges[i].edge)) 
                return true;
        }
        return false;
    };
    degree(vertex) {
        var count = 0;
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source) || vertex.equals(this.edges[i].destination)) 
                count++;
        }
        return count;
    };
    getNeighborCount(vertex) {
        return this.getNeighbors(vertex).length;
    };
    getIncidentCount(edge) {
        return this.getIncidentVertices(edge).length;
    };
    getEdgeType(edge) {};
    getDefaultEdgeType() {};
    getEdgesOfType(edge_type) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (this.getEdgeType(this.edges[i].edge) == edge_type) 
                results.push(this.edges[i].edge);
        }
        return results;
    };
    getEdgeCountOfType(edge_type) {
        return this.getEdgesOfType(edge_type).length;
    };
    getInEdges(vertex) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].edge);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    getOutEdges(vertex) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].edge);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    inDegree(vertex) {
        return this.getInEdges(vertex).length;
    };
    outDegree(vertex) {
        return this.getOutEdges(vertex).length;
    };
    getSource(directed_edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (directed_edge.equals(this.edges[i].edge)) 
                return this.edges[i].source;
        }
        return null;
    };
    getDest(directed_edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (directed_edge.equals(this.edges[i].edge)) 
                return this.edges[i].destination;
        }
        return null;
    };
    getPredecessors(vertex) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].destination)) 
                results.push(this.edges[i].source);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    getSuccessors(vertex) {
        var results = [];
        for (var i = 0; i < this.edges.length; i++) {
            if (vertex.equals(this.edges[i].source)) 
                results.push(this.edges[i].destination);
        }
        EcArray.removeDuplicates(results);
        return results;
    };
    isPredecessor(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v1.equals(this.edges[i].destination)) 
                if (v2.equals(this.edges[i].source)) 
                    return true;
        }
        return false;
    };
    isSuccessor(v1, v2) {
        for (var i = 0; i < this.edges.length; i++) {
            if (v2.equals(this.edges[i].destination)) 
                if (v1.equals(this.edges[i].source)) 
                    return true;
        }
        return false;
    };
    getPredecessorCount(vertex) {
        return this.getPredecessors(vertex).length;
    };
    getSuccessorCount(vertex) {
        return this.getSuccessors(vertex).length;
    };
    isSource(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) 
                if (vertex.equals(this.edges[i].source)) 
                    return true;
        }
        return false;
    };
    isDest(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) 
                if (vertex.equals(this.edges[i].destination)) 
                    return true;
        }
        return false;
    };
    addEdge(e, v1, v2) {
        this.addVertexSafely(v1);
        this.addVertexSafely(v2);
        var t = new Triple();
        t.source = v1;
        t.destination = v2;
        t.edge = e;
        this.edges.push(t);
        return true;
    };
    addEdgeUnsafely(e, v1, v2) {
        var t = new Triple();
        t.source = v1;
        t.destination = v2;
        t.edge = e;
        this.edges.push(t);
        return true;
    };
    addEdgeSafely(e, v1, v2) {
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
    getOpposite(vertex, edge) {
        for (var i = 0; i < this.edges.length; i++) {
            if (edge.equals(this.edges[i].edge)) 
                if (vertex.equals(this.edges[i].destination)) 
                    return this.edges[i].source;
                 else if (vertex.equals(this.edges[i].source)) 
                    return this.edges[i].destination;
        }
        return null;
    };
};
