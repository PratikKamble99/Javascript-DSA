function mergeData(arr1, arr2) {
  const updated = [...arr1, ...arr2];
  const result = [];

  for (let ele in updated) {
    const index = result.findIndex((e) => e.id === updated[ele].id);
    if (index >= 0) {
      result[index] = { ...result[index], ...updated[ele] };
    } else {
      result.push(updated[ele]);
    }
  }
  return result;
}

mergeData(
  [
    { id: 1, name: "pratik" },
    { id: 2, name: "Alice" },
  ],
  [
    { id: 3, name: "ww" },
    { id: 2, name: "Alicia", age: 22 },
  ]
);
