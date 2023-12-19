let num = [1, 2, 8];

Array.prototype.myReduce = function (callback, initval = null) {
  let acc = initval;
  let arr = Array.from(this); // Convert to array
  for (let i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i)) {
      acc = callback(acc, arr[i], i, arr);
    }
  }
  return acc;
};

console.log(num.myReduce((acc, curr) => acc + curr, 0));
