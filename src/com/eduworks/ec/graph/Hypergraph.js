/**
 *  A hypergraph, consisting of a set of vertices of type <code>V</code> and a
 *  set of hyperedges of type <code>E</code> which connect the vertices. This is
 *  the base interface for all JUNG graph types.
 *  <p>
 *  This interface permits, but does not enforce, any of the following common
 *  variations of graphs:
 *  <ul>
 *  <li/>hyperedges (edges which connect a set of vertices of any size)
 *  <li/>edges (these have have exactly two endpoints, which may or may not be
 *  distinct)
 *  <li/>self-loops (edges which connect exactly one vertex)
 *  <li>directed and undirected edges
 *  <li>vertices and edges with attributes (for example, weighted edges)
 *  <li>vertices and edges with different constraints or properties (for example,
 *  bipartite or multimodal graphs)
 *  <li>parallel edges (multiple edges which connect a single set of vertices)
 *  <li>internal representations as matrices or as adjacency lists or adjacency
 *  maps
 *  </ul>
 *  Extensions or implementations of this interface may enforce or disallow any
 *  or all of these variations.
 *  <p>
 *  <b>Notes</b>:
 *  <ul>
 *  <li/>The collections returned by <code>Hypergraph</code> instances should be
 *  treated in general as if read-only. While they are not contractually
 *  guaranteed (or required) to be immutable, this interface does not define the
 *  outcome if they are mutated. Mutations should be done via
 *  <code>{add,remove}{Edge,Vertex}</code>, or in the constructor.
 *  <li/>
 *  </ul>
 * 
 *  @author Joshua O'Madadhain
 *          <p>
 *          Ported to Javascript by:
 *  @author Fritz Ray (fritz.ray@eduworks.com)
 *  @author Tom Buskirk (tom.buskirk@eduworks.com)
 *  @class Hypergraph
 *  @module com.eduworks.ec
 */
var Hypergraph = function() {};
Hypergraph = stjs.extend(Hypergraph, null, [], function(constructor, prototype) {
    /**
     *  Returns a view of all edges in this graph. In general, this obeys the
     *  <code>Array</code> contract, and therefore makes no guarantees about the
     *  ordering of the vertices within the set.
     * 
     *  @return a <code>Array</code> view of all edges in this graph
     *  @method getEdges
     */
    prototype.getEdges = function() {};
    /**
     *  Returns a view of all vertices in this graph. In general, this obeys the
     *  <code>Array</code> contract, and therefore makes no guarantees about the
     *  ordering of the vertices within the set.
     * 
     *  @return a <code>Array</code> view of all vertices in this graph
     *  @method getVerticies
     */
    prototype.getVertices = function() {};
    /**
     *  Returns true if this graph's vertex collection contains
     *  <code>vertex</code>. Equivalent to
     *  <code>getVertices().contains(vertex)</code>.
     * 
     *  @param vertex the vertex whose presence is being queried
     *  @return true iff this graph contains a vertex <code>vertex</code>
     *  @method containsVertex
     */
    prototype.containsVertex = function(vertex) {};
    /**
     *  Returns true if this graph's edge collection contains <code>edge</code>.
     *  Equivalent to <code>getEdges().contains(edge)</code>.
     * 
     *  @param edge the edge whose presence is being queried
     *  @return true iff this graph contains an edge <code>edge</code>
     *  @method containsEdge
     */
    prototype.containsEdge = function(edge) {};
    /**
     *  Returns the number of edges in this graph.
     * 
     *  @return the number of edges in this graph
     *  @method getEdgeCount
     */
    prototype.getEdgeCount = function() {};
    /**
     *  Returns the number of vertices in this graph.
     * 
     *  @return the number of vertices in this graph
     *  @method getVertexCount
     */
    prototype.getVertexCount = function() {};
    /**
     *  Returns the collection of vertices which are connected to
     *  <code>vertex</code> via any edges in this graph. If <code>vertex</code>
     *  is connected to itself with a self-loop, then it will be included in the
     *  collection returned.
     * 
     *  @param vertex the vertex whose neighbors are to be returned
     *  @return the collection of vertices which are connected to
     *  <code>vertex</code>, or <code>null</code> if <code>vertex</code>
     *  is not present
     *  @method getNeighbors
     */
    prototype.getNeighbors = function(vertex) {};
    /**
     *  Returns the collection of edges in this graph which are connected to
     *  <code>vertex</code>.
     * 
     *  @param vertex the vertex whose incident edges are to be returned
     *  @return the collection of edges which are connected to
     *  <code>vertex</code>, or <code>null</code> if <code>vertex</code>
     *  is not present
     *  @method getIncidentEdges
     */
    prototype.getIncidentEdges = function(vertex) {};
    /**
     *  Returns the collection of vertices in this graph which are connected to
     *  <code>edge</code>. Note that for some graph types there are guarantees
     *  about the size of this collection (i.e., some graphs contain edges that
     *  have exactly two endpoints, which may or may not be distinct).
     *  Implementations for those graph types may provide alternate methods that
     *  provide more convenient access to the vertices.
     * 
     *  @param edge the edge whose incident vertices are to be returned
     *  @return the collection of vertices which are connected to
     *  <code>edge</code>, or <code>null</code> if <code>edge</code> is
     *  not present
     *  @method getIncidentVertices
     */
    prototype.getIncidentVertices = function(edge) {};
    /**
     *  Returns an edge that connects this vertex to <code>v</code>. If this edge
     *  is not uniquely defined (that is, if the graph contains more than one
     *  edge connecting <code>v1</code> to <code>v2</code>), any of these edges
     *  may be returned. <code>findEdgeSet(v1, v2)</code> may be used to return
     *  all such edges. Returns null if either of the following is true:
     *  <ul>
     *  <li/><code>v2</code> is not connected to <code>v1</code>
     *  <li/>either <code>v1</code> or <code>v2</code> are not present in this
     *  graph
     *  </ul>
     *  <p>
     *  <b>Note</b>: for purposes of this method, <code>v1</code> is only
     *  considered to be connected to <code>v2</code> via a given <i>directed</i>
     *  edge <code>e</code> if
     *  <code>v1 == e.getSource() && v2 == e.getDest()</code> evaluates to
     *  <code>true</code>. (<code>v1</code> and <code>v2</code> are connected by
     *  an undirected edge <code>u</code> if <code>u</code> is incident to both
     *  <code>v1</code> and <code>v2</code>.)
     * 
     *  @param v1 between this
     *  @param v2 and that
     *  @return an edge that connects <code>v1</code> to <code>v2</code>, or
     *  <code>null</code> if no such edge exists (or either vertex is not
     *  present)
     *  @method findEdge
     *  @see Hypergraph#findEdgeSet(Object, Object)
     */
    prototype.findEdge = function(v1, v2) {};
    /**
     *  Returns all edges that connects this vertex to <code>v</code>. If this
     *  edge is not uniquely defined (that is, if the graph contains more than
     *  one edge connecting <code>v1</code> to <code>v2</code>), any of these
     *  edges may be returned. <code>findEdgeSet(v1, v2)</code> may be used to
     *  return all such edges. Returns null if <code>v2</code> is not connected
     *  to <code>v1</code>. <br/>
     *  Returns an empty collection if either <code>v1</code> or <code>v2</code>
     *  are not present in this graph.
     *  <p>
     *  <p>
     *  <b>Note</b>: for purposes of this method, <code>v1</code> is only
     *  considered to be connected to <code>v2</code> via a given <i>directed</i>
     *  edge <code>d</code> if
     *  <code>v1 == d.getSource() && v2 == d.getDest()</code> evaluates to
     *  <code>true</code>. (<code>v1</code> and <code>v2</code> are connected by
     *  an undirected edge <code>u</code> if <code>u</code> is incident to both
     *  <code>v1</code> and <code>v2</code>.)
     * 
     *  @param v1 between this
     *  @param v2 and that
     *  @return a collection containing all edges that connect <code>v1</code> to
     *  <code>v2</code>, or <code>null</code> if either vertex is not
     *  present
     *  @method findEdgeSet
     *  @see Hypergraph#findEdge(Object, Object)
     */
    prototype.findEdgeSet = function(v1, v2) {};
    /**
     *  Adds <code>vertex</code> to this graph. Fails if <code>vertex</code> is
     *  null or already in the graph.
     * 
     *  @param vertex the vertex to add
     *  @return <code>true</code> if the add is successful, and
     *  <code>false</code> otherwise
     *  @throws IllegalArgumentException if <code>vertex</code> is <code>null</code>
     *  @method addVertex
     */
    prototype.addVertex = function(vertex) {};
    /**
     *  Adds <code>edge</code> to this graph. Fails under the following
     *  circumstances:
     *  <ul>
     *  <li/><code>edge</code> is already an element of the graph
     *  <li/>either <code>edge</code> or <code>vertices</code> is
     *  <code>null</code>
     *  <li/><code>vertices</code> has the wrong number of vertices for the graph
     *  type
     *  <li/><code>vertices</code> are already connected by another edge in this
     *  graph, and this graph does not accept parallel edges
     *  </ul>
     * 
     *  @param edge
     *  @param vertices
     *  @return <code>true</code> if the add is successful, and
     *  <code>false</code> otherwise
     *  @throws IllegalArgumentException if <code>edge</code> or <code>vertices</code> is null, or if
     *                                   a different vertex set in this graph is already connected by
     *                                   <code>edge</code>, or if <code>vertices</code> are not a
     *                                   legal vertex set for <code>edge</code>
     *  @method addHyperEdge
     */
    prototype.addHyperEdge = function(edge, vertices) {};
    /**
     *  Removes <code>vertex</code> from this graph. As a side effect, removes
     *  any edges <code>e</code> incident to <code>vertex</code> if the removal
     *  of <code>vertex</code> would cause <code>e</code> to be incident to an
     *  illegal number of vertices. (Thus, for example, incident hyperedges are
     *  not removed, but incident edges--which must be connected to a vertex at
     *  both endpoints--are removed.)
     *  <p>
     *  <p>
     *  Fails under the following circumstances:
     *  <ul>
     *  <li/><code>vertex</code> is not an element of this graph
     *  <li/><code>vertex</code> is <code>null</code>
     *  </ul>
     * 
     *  @param vertex the vertex to remove
     *  @return <code>true</code> if the removal is successful,
     *  <code>false</code> otherwise
     *  @method removeVertex
     */
    prototype.removeVertex = function(vertex) {};
    /**
     *  Removes <code>edge</code> from this graph. Fails if <code>edge</code> is
     *  null, or is otherwise not an element of this graph.
     * 
     *  @param edge the edge to remove
     *  @return <code>true</code> if the removal is successful,
     *  <code>false</code> otherwise
     *  @method removeEdge
     */
    prototype.removeEdge = function(edge) {};
    /**
     *  Returns <code>true</code> if <code>v1</code> and <code>v2</code> share an
     *  incident edge. Equivalent to <code>getNeighbors(v1).contains(v2)</code>.
     * 
     *  @param v1 the first vertex to test
     *  @param v2 the second vertex to test
     *  @return <code>true</code> if <code>v1</code> and <code>v2</code> share an
     *  incident edge
     *  @method isNeighbor
     */
    prototype.isNeighbor = function(v1, v2) {};
    /**
     *  Returns <code>true</code> if <code>vertex</code> and <code>edge</code>
     *  are incident to each other. Equivalent to
     *  <code>getIncidentEdges(vertex).contains(edge)</code> and to
     *  <code>getIncidentVertices(edge).contains(vertex)</code>.
     * 
     *  @param vertex
     *  @param edge
     *  @return <code>true</code> if <code>vertex</code> and <code>edge</code>
     *  are incident to each other
     *  @method isIncident
     */
    prototype.isIncident = function(vertex, edge) {};
    /**
     *  Returns the number of edges incident to <code>vertex</code>. Special
     *  cases of interest:
     *  <ul>
     *  <li/>Incident self-loops are counted once.
     *  <li>If there is only one edge that connects this vertex to each of its
     *  neighbors (and vice versa), then the value returned will also be equal to
     *  the number of neighbors that this vertex has (that is, the output of
     *  <code>getNeighborCount</code>).
     *  <li>If the graph is directed, then the value returned will be the sum of
     *  this vertex's indegree (the number of edges whose destination is this
     *  vertex) and its outdegree (the number of edges whose source is this
     *  vertex), minus the number of incident self-loops (to avoid
     *  double-counting).
     *  </ul>
     *  <p>
     *  Equivalent to <code>getIncidentEdges(vertex).size()</code>.
     * 
     *  @param vertex the vertex whose degree is to be returned
     *  @return the degree of this node
     *  @method degree
     *  @see Hypergraph#getNeighborCount(Object)
     */
    prototype.degree = function(vertex) {};
    /**
     *  Returns the number of vertices that are adjacent to <code>vertex</code>
     *  (that is, the number of vertices that are incident to edges in
     *  <code>vertex</code>'s incident edge set).
     *  <p>
     *  <p>
     *  Equivalent to <code>getNeighbors(vertex).size()</code>.
     * 
     *  @param vertex the vertex whose neighbor count is to be returned
     *  @return the number of neighboring vertices
     *  @method getNeighborCount
     */
    prototype.getNeighborCount = function(vertex) {};
    /**
     *  Returns the number of vertices that are incident to <code>edge</code>.
     *  For hyperedges, this can be any nonnegative integer; for edges this must
     *  be 2 (or 1 if self-loops are permitted).
     *  <p>
     *  <p>
     *  Equivalent to <code>getIncidentVertices(edge).size()</code>.
     * 
     *  @param edge the edge whose incident vertex count is to be returned
     *  @return the number of vertices that are incident to <code>edge</code>.
     *  @method getIncidentCount
     */
    prototype.getIncidentCount = function(edge) {};
    /**
     *  Returns the edge type of <code>edge</code> in this graph.
     * 
     *  @param edge
     *  @return the <code>EdgeType</code> of <code>edge</code>, or
     *  <code>null</code> if <code>edge</code> has no defined type
     *  @method getEdgeType
     */
    prototype.getEdgeType = function(edge) {};
    /**
     *  Returns the default edge type for this graph.
     * 
     *  @return the default edge type for this graph
     *  @method getDefaultEdgeType
     */
    prototype.getDefaultEdgeType = function() {};
    /**
     *  Returns the collection of edges in this graph which are of type
     *  <code>edge_type</code>.
     * 
     *  @param edge_type the type of edges to be returned
     *  @return the collection of edges which are of type <code>edge_type</code>,
     *  or <code>null</code> if the graph does not accept edges of this
     *  type
     *  @method getEdgesOfType
     *  @see EdgeType
     */
    prototype.getEdgesOfType = function(edge_type) {};
    /**
     *  Returns the number of edges of type <code>edge_type</code> in this graph.
     * 
     *  @param edge_type the type of edge for which the count is to be returned
     *  @return the number of edges of type <code>edge_type</code> in this graph
     *  @method getEdgeCountOfType
     */
    prototype.getEdgeCountOfType = function(edge_type) {};
    /**
     *  Returns a <code>Array</code> view of the incoming edges incident to
     *  <code>vertex</code> in this graph.
     * 
     *  @param vertex the vertex whose incoming edges are to be returned
     *  @return a <code>Array</code> view of the incoming edges incident to
     *  <code>vertex</code> in this graph
     *  @method getInEdges
     */
    prototype.getInEdges = function(vertex) {};
    /**
     *  Returns a <code>Array</code> view of the outgoing edges incident to
     *  <code>vertex</code> in this graph.
     * 
     *  @param vertex the vertex whose outgoing edges are to be returned
     *  @return a <code>Array</code> view of the outgoing edges incident to
     *  <code>vertex</code> in this graph
     *  @method getOutEdges
     */
    prototype.getOutEdges = function(vertex) {};
    /**
     *  Returns the number of incoming edges incident to <code>vertex</code>.
     *  Equivalent to <code>getInEdges(vertex).size()</code>.
     * 
     *  @param vertex the vertex whose indegree is to be calculated
     *  @return the number of incoming edges incident to <code>vertex</code>
     *  @method inDegree
     */
    prototype.inDegree = function(vertex) {};
    /**
     *  Returns the number of outgoing edges incident to <code>vertex</code>.
     *  Equivalent to <code>getOutEdges(vertex).size()</code>.
     * 
     *  @param vertex the vertex whose outdegree is to be calculated
     *  @return the number of outgoing edges incident to <code>vertex</code>
     *  @method outDegree
     */
    prototype.outDegree = function(vertex) {};
    /**
     *  If <code>directed_edge</code> is a directed edge in this graph, returns
     *  the source; otherwise returns <code>null</code>. The source of a directed
     *  edge <code>d</code> is defined to be the vertex for which <code>d</code>
     *  is an outgoing edge. <code>directed_edge</code> is guaranteed to be a
     *  directed edge if its <code>EdgeType</code> is <code>DIRECTED</code>.
     * 
     *  @param directed_edge
     *  @return the source of <code>directed_edge</code> if it is a directed edge
     *  in this graph, or <code>null</code> otherwise
     *  @method getSource
     */
    prototype.getSource = function(directed_edge) {};
    /**
     *  If <code>directed_edge</code> is a directed edge in this graph, returns
     *  the destination; otherwise returns <code>null</code>. The destination of
     *  a directed edge <code>d</code> is defined to be the vertex incident to
     *  <code>d</code> for which <code>d</code> is an incoming edge.
     *  <code>directed_edge</code> is guaranteed to be a directed edge if its
     *  <code>EdgeType</code> is <code>DIRECTED</code>.
     * 
     *  @param directed_edge
     *  @return the destination of <code>directed_edge</code> if it is a directed
     *  edge in this graph, or <code>null</code> otherwise
     *  @method getDest
     */
    prototype.getDest = function(directed_edge) {};
    /**
     *  Returns a <code>Array</code> view of the predecessors of
     *  <code>vertex</code> in this graph. A predecessor of <code>vertex</code>
     *  is defined as a vertex <code>v</code> which is connected to
     *  <code>vertex</code> by an edge <code>e</code>, where <code>e</code> is an
     *  outgoing edge of <code>v</code> and an incoming edge of
     *  <code>vertex</code>.
     * 
     *  @param vertex the vertex whose predecessors are to be returned
     *  @return a <code>Array</code> view of the predecessors of
     *  <code>vertex</code> in this graph
     *  @method getPredecessors
     */
    prototype.getPredecessors = function(vertex) {};
    /**
     *  Returns a <code>Array</code> view of the successors of
     *  <code>vertex</code> in this graph. A successor of <code>vertex</code> is
     *  defined as a vertex <code>v</code> which is connected to
     *  <code>vertex</code> by an edge <code>e</code>, where <code>e</code> is an
     *  incoming edge of <code>v</code> and an outgoing edge of
     *  <code>vertex</code>.
     * 
     *  @param vertex the vertex whose predecessors are to be returned
     *  @return a <code>Array</code> view of the successors of
     *  <code>vertex</code> in this graph
     *  @method getSuccessors
     */
    prototype.getSuccessors = function(vertex) {};
}, {}, {});
