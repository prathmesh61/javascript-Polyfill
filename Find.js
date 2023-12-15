let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];
Array.prototype.myFind = function (callback) {
  let result = undefined;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result = this[i];
    }
  }
  return result;
};
let output = names.myFind((val, i) => val === "suraj");
console.log(output);
