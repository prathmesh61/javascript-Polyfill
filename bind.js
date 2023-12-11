// try 1
let obj = {
  name: "Jack",
};

function myFun(id) {
  return console.log(`${this.name},  this is my ${id}`);
}

Function.prototype.myBind = function (obj, ...arg) {
  let func = this;
  return function () {
    func.apply(obj, [...arg]);
  };
};
let neBind = myFun.myBind(obj, "myID@@");
neBind();

// try 2
let object = {
  name: "Prathmesh",
};

function regular(myID) {
  return console.log(`${this.name} and ${myID}`);
}

Function.prototype.newMyBind = function (object, ...arg) {
  let thisVal = this;
  return function () {
    thisVal.apply(object, [...arg]);
  };
};

let bjj = regular.newMyBind(object, "987666");
bjj();
