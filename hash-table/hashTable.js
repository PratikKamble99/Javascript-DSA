class HashTable {
  numsOfItems = 0;

  constructor(length) {
    this.table = new Array(length);
  }

  _resize() {
    const newTable = new Array(this.table.length * 2);

    this.table.forEach((ele) => {
      if (ele) {
        ele.forEach((e) => {
          const idx = this._hash(e[0], newTable.length);
          if (!newTable[idx]) {
            return (newTable[idx] = [e]);
          }

          newTable[idx].push(e);
        });
      }
    });

    this.table = newTable;
  }

  _hash(key, len) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % len;
  }

  set(key, value) {
    this.numsOfItems++;

    const loadFactory = this.numsOfItems / this.table.length;

    if (loadFactory > 0.8) this._resize();

    const idx = this._hash(key, this.table.length);

    if (!this.table[idx]) {
      return (this.table[idx] = [[key, value]]);
    }

    this.table[idx].push([key, value]);
  }

  get(key) {
    const idx = this._hash(key, this.table.length);

    if (!this.table[idx]) return null;

    return this.table[idx].find((i) => i[0] == key)[1];
  }
}

const ht = new HashTable(length);

ht.set("name", "pratik");
ht.set("na2", "pratw");
ht.set("age", 123);
ht.set("age1", { jsa: "sa" });
ht.set("mail", "mail@dsdd");
console.log(ht.get("name"));
console.log(ht.get("na2"));
console.log(ht.get("age"));
console.log(ht.get("age1"));
