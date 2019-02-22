function range(start, end, step) {
  let ses = [];
  for (i = start; i <= end; i += step) {
    ses.push(i);
  };
return ses;
}


console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));
console.log(range(-5, 2, 3));