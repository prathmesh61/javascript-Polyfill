let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

console.log(names.myMap((el, index) => `${el} and ${index}`));
console.log(num.myMap((el) => el * 2));
