let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];

//  find
Array.prototype.myFind = function (callback) {
  let result = undefined;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result = this[i];
    }
  }
  return result;
};
let nnn = num.myFind((val, i) => val === 7);
// console.log(nnn);

// reduce
Array.prototype.newReduce = function (callback, initval = null) {
  let acc = initval;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
// let ex = num.newReduce((acc, curr) => acc + curr, 0);
// console.log(ex);

// map
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};
// let ex = num.map((el) => el * 2);
// console.log(ex);

// forEach
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
// num.myForEach((el) => console.log(el * 2));

//filter
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

//bind
let obj = {
  name: "Pol",
};

function myFun(id, myName) {
  return console.log(`${this.name},  this is my ${id} ,yee ${myName}`);
}

Function.prototype.myBind = function (obj, ...args) {
  obj.fn = this;
  return function (...newArgs) {
    obj.fn(...args, ...newArgs);
  };
};

// let bindd = myFun.myBind(obj, "9999");
// bindd("pratham");

// call
Function.prototype.myCall = function (obj, ...arg) {
  obj.fn = this;
  obj.fn(...arg);
};

// console.log(myFun.myCall(obj, "89766", "Pratham"));
