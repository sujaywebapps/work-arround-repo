// Power function
function power(base, powerOf) {
  if (powerOf === 1) return base;
  return base * power(base, powerOf - 1);
}
console.log(power(2, 4));
