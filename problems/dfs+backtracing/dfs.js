function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;

  //   console.log(visited)

  //   console.log(start, '---', graph[start]); // process the node
  visited.add(start);

  for (let neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: [],
  D: [],
  E: ["F"],
  F: [],
};

dfs(graph, "A");
