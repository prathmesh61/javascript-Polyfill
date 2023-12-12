let obj = {
  name: "Nitin",
};

function myFun(id) {
  return console.log(`${this.name},  this is my ${id}`);
}

Function.prototype.myCall = function (obj, ...args) {
  obj.fn = this;
  obj.fn(...args);
};

console.log(myFun.myCall(obj, "68576"));
