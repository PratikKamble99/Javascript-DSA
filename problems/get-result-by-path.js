function getResultByPath(path, obj) {
  const result = path
    .replace(/\[(\w+)\]/g, ".$1")
    .split(".")
    .reduce((acc, ele) => {
      if (acc && acc.hasOwnProperty(ele)) {
        return acc[ele];
      } else if (acc === null) {
        return null;
      } else {
        return undefined;
      }
    }, obj);

  //   console.log(result);
  return result;
}
const path = "config.foo.bar";
const obj = {
  config: {
    settings: null,
  },
};
getResultByPath(path, obj);
