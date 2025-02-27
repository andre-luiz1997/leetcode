type Graph = { [key: string]: { [key: string]: number } }

export function djikstra(graph: Graph, start: string, end: string): string[] {
  // Objeto para armazenar as menores distâncias conhecidas
  const distances: { [key: string]: number } = {};
  // Objeto para rastrear o nó anterior no caminho mais curto
  const previous: { [key: string]: string | null } = {};
  // Fila de prioridade improvisada usando Set
  const unvisited = new Set<string>();
  // Array para armazenar o caminho final
  const path: string[] = [];

  // Inicialização
  for (const vertex in graph) {
    distances[vertex] = Number.POSITIVE_INFINITY; // Todas as distâncias começam como infinito
    previous[vertex] = null;      // Nenhum predecessor inicialmente
    unvisited.add(vertex);        // Todos os nós começam como não visitados
  }
  distances[start] = 0; // Distância do início é 0

  while (unvisited.size > 0) {
    // Encontra o nó não visitado com menor distância
    const current = Array.from(unvisited).reduce((minNode, node) =>
      distances[node] < distances[minNode] ? node : minNode
    );
    // Se chegamos ao destino, podemos parar
    if (current === end) break;

    // Remove o nó atual dos não visitados
    unvisited.delete(current);

    // Verifica todos os vizinhos do nó atual
    for (const neighbor in graph[current]) {
      // Calcula a distância alternativa através do nó atual
      const alt = distances[current] + graph[current][neighbor];
      // Se encontramos um caminho mais curto
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = current;
      }
    }
  }
  // Constrói o caminho do fim ao início
  let currentNode: string | null = end;
  while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
  }

  // Verifica se há um caminho válido
  return path[0] === start ? path : [];
}

const graph: Graph = {
  'A': { 'B': 1, 'C': 4 },
  'B': { 'A': 1, 'C': 2, 'D': 5 },
  'C': { 'A': 4, 'B': 2, 'D': 1 },
  'D': { 'B': 5, 'C': 1 }
}

console.log(djikstra(graph, 'A', 'D'))