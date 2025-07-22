function JSONStringify(value) {
  // Your implementation
  if (typeof value === "function" || value == null) return `${null}`;

  if (typeof value === "string") return `\"${String(value)}\"`;

  if (typeof value !== "object") return `${String(value)}`;

  if (Array.isArray(value)) {
    return `[${value.map((ele) => JSONStringify(ele)).join(",")}]`;
  }

  if (typeof value == "object") {
    const keys = Object.keys(value);
    const keyValuePairs = keys
      .filter((ele) => value[ele] && typeof value[ele] !== "function")
      .map((ele) => `"${ele}":${JSONStringify(value[ele])}`);
    return `{${keyValuePairs.join(",")}}`;
  }
}

//For the purpose of user debugging.
console.log(JSONStringify({ a: null, b: function () {}, c: 5 }));
