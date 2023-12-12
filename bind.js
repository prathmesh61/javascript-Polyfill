// try 1
let obj = {
  name: "Jack",
};

function myFun(id) {
  return console.log(`${this.name},  this is my ${id}`);
}

Function.prototype.myBind = function (obj, ...arg) {
  obj.fn = this;
  return function (...newArg) {
    return obj.fn(...arg, ...newArg);
  };
};
let neBind = myFun.myBind(obj, "870@@");
neBind();
