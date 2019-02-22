function calculateRectangleArea(length, width) {
  var area = length * width;
  if (area > 0) {
    return length * width;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));


function calculateTriangleArea(base, height) {
var area = base * height / 2;
  if (area > 0) {
    return base * height / 2;
  }
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5));


function calculateCircleArea(radius) {
  var area = Math.PI * radius * radius;
  if (area > 4) {
    return Math.PI * radius * radius;
  }
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));