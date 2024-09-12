function fibs(n) {
  let fibSequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    [a, b] = [b, a + b];
  }

  return fibSequence;
}

function fibsRec(n) {
  // initial sequence
  let seq = [0, 1];
  // base cases
  if (n <= 2) return seq.slice(0, n);

  // recursivly get the first n-1 numbers
  const fibSequence = fibsRec(n - 1);
  // calculate the nex fib number by summing up the last two numbers in the sequence
  const nextFib =
    fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
  // append the nextFib
  fibSequence.push(nextFib);
  return fibSequence;
}

console.log(fibs(8));
console.log(fibsRec(8));
