function solve (input) {
  let splitValue = input.toString().split('');
  let digitToCompare = Number(splitValue[0]);
  let isSame = true;
  let sumOfDigits = 0;

  for (let index = 0; index < splitValue.length; index++) {
    let currentDigit = Number(splitValue[index]);
    sumOfDigits += currentDigit;

    if(currentDigit !== digitToCompare) {
      isSame = false
    }
  }
  console.log(isSame);
  console.log(sumOfDigits);
}
solve (2222222);
solve (1234);