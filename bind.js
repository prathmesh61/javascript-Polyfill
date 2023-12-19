// try 1
let obj = {
  name: "Jack",
};

function myFun(id) {
  return console.log(`${this.name},  this is my ${id}`);
}

Function.prototype.myBind = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("context must be a function");
  }
  obj.fn = this;
  return function (...newArgs) {
    return obj.fn(...args, ...newArgs);
  };
};
let neBind = myFun.myBind(obj, "870@@");
neBind();
