const Hypergraph = require("./Hypergraph.js");
/**
 *  A graph consisting of a set of vertices of type <code>V</code>
 *  set and a set of edges of type <code>E</code>.  Edges of this
 *  graph type have exactly two endpoints; whether these endpoints
 *  must be distinct depends on the implementation.
 *  <p>
 *  This interface permits, but does not enforce, any of the following
 *  common variations of graphs:
 *  <ul>
 *  <li> directed and undirected edges
 *  <li> vertices and edges with attributes (for example, weighted edges)
 *  <li> vertices and edges of different types (for example, bipartite
 *  or multimodal graphs)
 *  <li> parallel edges (multiple edges which connect a single set of vertices)
 *  <li> representations as matrices or as adjacency lists or adjacency maps
 *  </ul>
 *  Extensions or implementations of this interface
 *  may enforce or disallow any or all of these variations.
 *  <p>
 *  <p>Definitions (with respect to a given vertex <code>v</code>):
 *  <ul>
 *  <li/><b>incoming edge</b> of <code>v</code>: an edge that can be traversed
 *  from a neighbor of <code>v</code> to reach <code>v</code>
 *  <li/><b>outgoing edge</b> of <code>v</code>: an edge that can be traversed
 *  from <code>v</code> to reach some neighbor of <code>v</code>
 *  <li/><b>predecessor</b> of <code>v</code>: a vertex at the other end of an
 *  incoming edge of <code>v</code>
 *  <li/><b>successor</b> of <code>v</code>: a vertex at the other end of an
 *  outgoing edge of <code>v</code>
 *  <li/>
 *  </ul>
 *
 *  @author Joshua O'Madadhain
 *          <p>
 *          Ported to Javascript by:
 *  @author Fritz Ray (fritz.ray@eduworks.com)
 *  @author Tom Buskirk (tom.buskirk@eduworks.com)
 *  @class Graph
 *  @module com.eduworks.ec
 *  @extends Hypergraph
 */
module.exports = class Graph extends Hypergraph {
	/**
	 *  Returns a <code>Collection</code> view of the incoming edges incident to <code>vertex</code>
	 *  in this graph.
	 *
	 *  @param vertex the vertex whose incoming edges are to be returned
	 *  @return a <code>Collection</code> view of the incoming edges incident
	 *  to <code>vertex</code> in this graph
	 *  @method getInEdges
	 */
	getInEdges(vertex) {}
	/**
	 *  Returns a <code>Collection</code> view of the outgoing edges incident to <code>vertex</code>
	 *  in this graph.
	 *
	 *  @param vertex the vertex whose outgoing edges are to be returned
	 *  @return a <code>Collection</code> view of the outgoing edges incident
	 *  to <code>vertex</code> in this graph
	 *  @method getOutEdges
	 */
	getOutEdges(vertex) {}
	/**
	 *  Returns a <code>Collection</code> view of the predecessors of <code>vertex</code>
	 *  in this graph.  A predecessor of <code>vertex</code> is defined as a vertex <code>v</code>
	 *  which is connected to
	 *  <code>vertex</code> by an edge <code>e</code>, where <code>e</code> is an outgoing edge of
	 *  <code>v</code> and an incoming edge of <code>vertex</code>.
	 *
	 *  @param vertex the vertex whose predecessors are to be returned
	 *  @return a <code>Collection</code> view of the predecessors of
	 *  <code>vertex</code> in this graph
	 *  @method getPredecessors
	 */
	getPredecessors(vertex) {}
	/**
	 *  Returns a <code>Collection</code> view of the successors of <code>vertex</code>
	 *  in this graph.  A successor of <code>vertex</code> is defined as a vertex <code>v</code>
	 *  which is connected to
	 *  <code>vertex</code> by an edge <code>e</code>, where <code>e</code> is an incoming edge of
	 *  <code>v</code> and an outgoing edge of <code>vertex</code>.
	 *
	 *  @param vertex the vertex whose predecessors are to be returned
	 *  @return a <code>Collection</code> view of the successors of
	 *  <code>vertex</code> in this graph
	 *  @method getSuccessors
	 */
	getSuccessors(vertex) {}
	/**
	 *  Returns the number of incoming edges incident to <code>vertex</code>.
	 *  Equivalent to <code>getInEdges(vertex).size()</code>.
	 *
	 *  @param vertex the vertex whose indegree is to be calculated
	 *  @return the number of incoming edges incident to <code>vertex</code>
	 *  @method inDegree
	 */
	inDegree(vertex) {}
	/**
	 *  Returns the number of outgoing edges incident to <code>vertex</code>.
	 *  Equivalent to <code>getOutEdges(vertex).size()</code>.
	 *
	 *  @param vertex the vertex whose outdegree is to be calculated
	 *  @return the number of outgoing edges incident to <code>vertex</code>
	 *  @method outDegree
	 */
	outDegree(vertex) {}
	/**
	 *  Returns <code>true</code> if <code>v1</code> is a predecessor of <code>v2</code> in this graph.
	 *  Equivalent to <code>v1.getPredecessors().contains(v2)</code>.
	 *
	 *  @param v1 the first vertex to be queried
	 *  @param v2 the second vertex to be queried
	 *  @return <code>true</code> if <code>v1</code> is a predecessor of <code>v2</code>, and false otherwise.
	 *  @method isPredecessor
	 */
	isPredecessor(v1, v2) {}
	/**
	 *  Returns <code>true</code> if <code>v1</code> is a successor of <code>v2</code> in this graph.
	 *  Equivalent to <code>v1.getSuccessors().contains(v2)</code>.
	 *
	 *  @param v1 the first vertex to be queried
	 *  @param v2 the second vertex to be queried
	 *  @return <code>true</code> if <code>v1</code> is a successor of <code>v2</code>, and false otherwise.
	 *  @method isSuccessor
	 */
	isSuccessor(v1, v2) {}
	/**
	 *  Returns the number of predecessors that <code>vertex</code> has in this graph.
	 *  Equivalent to <code>vertex.getPredecessors().size()</code>.
	 *
	 *  @param vertex the vertex whose predecessor count is to be returned
	 *  @return the number of predecessors that <code>vertex</code> has in this graph
	 *  @method getPredecessorCount
	 */
	getPredecessorCount(vertex) {}
	/**
	 *  Returns the number of successors that <code>vertex</code> has in this graph.
	 *  Equivalent to <code>vertex.getSuccessors().size()</code>.
	 *
	 *  @param vertex the vertex whose successor count is to be returned
	 *  @return the number of successors that <code>vertex</code> has in this graph
	 *  @method getSuccessorCount
	 */
	getSuccessorCount(vertex) {}
	/**
	 *  If <code>directed_edge</code> is a directed edge in this graph, returns the source;
	 *  otherwise returns <code>null</code>.
	 *  The source of a directed edge <code>d</code> is defined to be the vertex for which
	 *  <code>d</code> is an outgoing edge.
	 *  <code>directed_edge</code> is guaranteed to be a directed edge if
	 *  its <code>EdgeType</code> is <code>DIRECTED</code>.
	 *
	 *  @param directed_edge
	 *  @return the source of <code>directed_edge</code> if it is a directed edge in this graph, or <code>null</code> otherwise
	 *  @method getSource
	 */
	getSource(directed_edge) {}
	/**
	 *  If <code>directed_edge</code> is a directed edge in this graph, returns the destination;
	 *  otherwise returns <code>null</code>.
	 *  The destination of a directed edge <code>d</code> is defined to be the vertex
	 *  incident to <code>d</code> for which
	 *  <code>d</code> is an incoming edge.
	 *  <code>directed_edge</code> is guaranteed to be a directed edge if
	 *  its <code>EdgeType</code> is <code>DIRECTED</code>.
	 *
	 *  @param directed_edge
	 *  @return the destination of <code>directed_edge</code> if it is a directed edge in this graph, or <code>null</code> otherwise
	 *  @method getDest
	 */
	getDest(directed_edge) {}
	/**
	 *  Returns <code>true</code> if <code>vertex</code> is the source of <code>edge</code>.
	 *  Equivalent to <code>getSource(edge).equals(vertex)</code>.
	 *
	 *  @param vertex the vertex to be queried
	 *  @param edge   the edge to be queried
	 *  @return <code>true</code> iff <code>vertex</code> is the source of <code>edge</code>
	 *  @method isSource
	 */
	isSource(vertex, edge) {}
	/**
	 *  Returns <code>true</code> if <code>vertex</code> is the destination of <code>edge</code>.
	 *  Equivalent to <code>getDest(edge).equals(vertex)</code>.
	 *
	 *  @param vertex the vertex to be queried
	 *  @param edge   the edge to be queried
	 *  @return <code>true</code> iff <code>vertex</code> is the destination of <code>edge</code>
	 */
	isDest(vertex, edge) {}
	/**
	 *  Adds edge <code>e</code> to this graph such that it connects
	 *  vertex <code>v1</code> to <code>v2</code>.
	 *  Equivalent to <code>addEdge(e, new Pair<V>(v1, v2))</code>.
	 *  If this graph does not contain <code>v1</code>, <code>v2</code>,
	 *  or both, implementations may choose to either silently add
	 *  the vertices to the graph or throw an <code>IllegalArgumentException</code>.
	 *  If this graph assigns edge types to its edges, the edge type of
	 *  <code>e</code> will be the default for this graph.
	 *  See <code>Hypergraph.addEdge()</code> for a listing of possible reasons
	 *  for failure.
	 *
	 *  @param e  the edge to be added
	 *  @param v1 the first vertex to be connected
	 *  @param v2 the second vertex to be connected
	 *  @return <code>true</code> if the add is successful, <code>false</code> otherwise
	 *  @method addEdge
	 *  @see Hypergraph#addEdge(Object, Collection)
	 *  @see #addEdge(Object, Object, Object, EdgeType)
	 */
	addEdge(e, v1, v2) {}
	/**
	 *  Returns the vertex at the other end of <code>edge</code> from <code>vertex</code>.
	 *  (That is, returns the vertex incident to <code>edge</code> which is not <code>vertex</code>.)
	 *
	 *  @param vertex the vertex to be queried
	 *  @param edge   the edge to be queried
	 *  @return the vertex at the other end of <code>edge</code> from <code>vertex</code>
	 *  @method getOpposite
	 */
	getOpposite(vertex, edge) {}
};
