const data = [
  {
    column: "policycenterexecutuionstatus",
    parent: ["PCAS"],
  },
  {
    column: "PCAS",
    parent: ["policycenterexecutuionstatus"],
  }
];

function traverseParents(column, data) {
  let nodes = [];
  let parents = data.find((x) => x.column === column).parent;
  if (!parents.includes(column)) {
    while (parents?.length > 0) {
        if(nodes.includes(parents[0])) {
            break
        }
      nodes.push(parents[0]);
      const { parent, column } = data.find((x) => x.column === parents[0]);
      if(parent.includes(column)) {
        parents = []
      } else {
        parents = parent
      }
    }
  }
  return nodes.reverse();
}

let table = ["PCAS"];
for (let row of table) {
  console.log(traverseParents(row, data));
}
