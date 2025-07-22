function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitives or functions as is
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  console.log(clone);

  return clone;
}

function deepClone_2(obj) {
  if ((typeof obj !== "object" && obj !== undefined) || obj === null)
    return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  const clone = {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

const original = {
  name: "Pratik",
  meta: {
    age: 28,
    skills: ["React", "Node"],
    nested: {
      active: true,
    },
  },
  created: new Date(),
};

const copy = deepClone(original);
copy.meta.skills[0] = "Angular";
copy.meta.nested.active = false;

console.log("Original:", original.meta.skills[0]); // React
console.log("Copied:", copy.meta.skills[0]);
