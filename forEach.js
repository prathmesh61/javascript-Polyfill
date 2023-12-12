let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
num.myForEach((el) => console.log(el * 2));
