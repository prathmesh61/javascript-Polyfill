let num = [1, 2, 8];

Array.prototype.myReduce = function (cb, initValue = null) {
  let acc = initValue;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

console.log(num.myReduce((acc, curr) => acc + curr, 0));
