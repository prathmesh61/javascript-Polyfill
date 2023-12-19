let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];

//  find
// Array.prototype.myFind = function (callback) {
//   let result = undefined;
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result = this[i];
//     }
//   }
//   return result;
// };
let nnn = num.myFind((val, i) => val === 7);
// console.log(nnn);

// reduce
Array.prototype.newReducer = function (callback, initval = null) {
  let acc = initval;
  let arr = Array.from(this); // Convert to array
  for (let i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i)) {
      acc = callback(acc, arr[i], i, arr);
    }
  }
  return acc;
};
// let ex = num.newReduce((acc, curr) => acc + curr, 0);
// console.log(ex);

// map
Array.prototype.newmap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
// let ex = num.newmap((el) => el * 2);
// console.log(ex);

// forEach
Array.prototype.newForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
// num.newForEach((el) => console.log(el * 2));

//filter
Array.prototype.newFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
//bind
let obj = {
  name: "Pol",
};

function myFun(id, myName) {
  return console.log(`${this.name},  this is my ${id} ,yee ${myName}`);
}

Function.prototype.myNewBind = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myNewBind - context must be a function"
    );
  }
  obj.fn = this;
  return function (...newArgs) {
    return obj.fn(...args, ...newArgs);
  };
};
// let bindd = myFun.myNewBind(obj, "9999");
// bindd("pratham");

// call

// console.log(myFun.myCall(obj, "89766", "Pratham"));
