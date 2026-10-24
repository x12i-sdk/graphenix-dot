import assert from 'node:assert/strict';
import { graphenixToDot } from '@x12i/graphenix-dot';

const graph = { formatVersion: '2.1.0', id: 'graph:demo', graph: {
  nodes: [{ id: 'node:start', name: 'Start', kind: 'task:demo', inputs: [], outputs: [] }], edges: [], inputs: [], outputs: [],
} };
const dot = graphenixToDot(graph);
assert(dot.includes('digraph'));
assert(dot.includes('Start'));
console.log(dot);
// This produces DOT source; a host can pass it to its chosen Graphviz renderer.
