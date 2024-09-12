let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let sortedArray = [];
    let arrL = [];
    let arrR = [];
    let midPoint = Math.floor(arr.length / 2);

    arrL = mergeSort(arr.slice(0, midPoint));
    arrR = mergeSort(arr.slice(midPoint));

    while (arrL.length && arrR.length) {
      if (arrL[0] < arrR[0]) {
        sortedArray.push(arrL.shift());
      } else {
        sortedArray.push(arrR.shift());
      }
    }
    return sortedArray.concat(arrL).concat(arrR);
  }
}

console.log(mergeSort(array1));
// console.log(mergeSort(array2));
