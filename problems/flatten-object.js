function flattenObject(obj) {
  const result = {};
  function fn(_obj, path = "") {
    for (let key in _obj) {
      const value = _obj[key];
      let newPath = `${path}${key}.`;
      if (
        (typeof value == "object" && value !== null) ||
        Array.isArray(value)
      ) {
        fn(value, newPath);
      } else {
        newPath = `${path}${key}`;
        result[newPath] = value;
      }
    }
  }
  fn(obj);
  return result;
}

//For the purpose of user debugging.
console.log(flattenObject({ x: { b: 2 }, c: 2 }));

module.exports = flattenObject;
