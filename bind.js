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

// version 2 of bind
Function.prototype.bind = function (obj, ...args) {
  return function (...newArgs) {
    if (obj === undefined || obj === null) {
      obj = globalThis; // or use `window` in a browser environment
    }

    if (typeof obj !== "object" && typeof obj !== "function") {
      throw new TypeError('bind - "this" must be an object or function');
    }

    return originalFunction.apply(obj, args.concat(newArgs));
  };
};
