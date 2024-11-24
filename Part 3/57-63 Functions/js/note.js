function calc(n1, n2) {
  return;
  n1 + n2;
}

console.log(calc(2, 2) + 100); //* NaN, WHY? Becuase of the sum operation. (undefined + number = NaN) or (undefined + number = return number) (typeof NaN = number)
console.log(calc(2, 2)); //* undefined
