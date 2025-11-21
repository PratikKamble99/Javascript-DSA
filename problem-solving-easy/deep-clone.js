
/* 
  Create new object with all fresh references 

*/

function deepClone(obj) {
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
