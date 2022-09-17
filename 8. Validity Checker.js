function solve (x1, y1, x2, y2) {
  let ay = 0 - x1;
  let ax = 0 - y1;
  let square = ax*ax + ay*ay;
  let root = Math.sqrt(square);

  let by = 0 - x2;
  let bx = 0 - y2;
  let square1 = bx*bx + by*by;
  let root1 = Math.sqrt(square1);

  let y = x2 - x1;
  let x = y2 - y1;
  let sumxy = x*x + y*y;
  let rootxy = Math.sqrt(sumxy);

  if (Number.isInteger(root)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
  }
  if (Number.isInteger(root1)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
  }
  if (Number.isInteger(rootxy)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
  }
  
}
solve (3, 0, 0, 4);
console.log('-------');
solve (2, 1, 1, 1);