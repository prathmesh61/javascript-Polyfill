let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];

Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log(num.myFilter((n) => n > 4));
