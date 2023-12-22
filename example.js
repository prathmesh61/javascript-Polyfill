let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];

// filter
Array.prototype.myNewFilterMethod = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
console.log(names.myNewFilterMethod((el, i) => el !== "pooja"));
console.log(num.myNewFilterMethod((el, i) => el > 3));

// Map
Array.prototype.myNewMapMethod = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// forEach
Array.prototype.myNewForeachMethod = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Reduce
Array.prototype.myNewReduceMethod = function (callback, initVal = null) {
  let total = initVal;
  for (let i = 0; i < this.length; i++) {
    total = callback(total, this[i], i, this);
  }
  return total;
};

// Bind
Function.prototype.myNewBindMethod = function (obj, ...arg) {
  obj.fn = this;
  return function (...newArgs) {
    return obj.fn(...arg, ...newArgs);
  };
};

let obj = {
  name: "Jack",
};

function myFun(id) {
  return console.log(`${this.name},  this is my ${id}`);
}

let newFun = myFun.myNewBindMethod(obj);
console.log(newFun("09876"));
