let names = ["pratham", "pooja", "suraj", "ramesh"];
let num = [3, 4, 5, 6];

Array.prototype.myFilter = function (callback) {
  let newArr = [];
  let arr = Array.from(this); // Convert to array
  for (let i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i) && callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(num.myFilter((n) => n > 4));
