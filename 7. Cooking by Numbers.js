function solve (num, p1, p2, p3, p4, p5) {
  let inputAsNumber = Number(num);
  let command = [p1, p2, p3, p4, p5];

  for (let i = 0; i < command.length; i++) {
    let currentCommand = command[i];
      switch (currentCommand){
        case 'chop': inputAsNumber = inputAsNumber / 2; console.log(inputAsNumber); break;
        case 'dice': inputAsNumber = Math.sqrt(inputAsNumber); console.log(inputAsNumber); break;
        case 'spice': inputAsNumber = inputAsNumber + 1; console.log(inputAsNumber); break;
        case 'bake': inputAsNumber = inputAsNumber * 3; console.log(inputAsNumber); break;
        case 'fillet': inputAsNumber = inputAsNumber * 0.80; console.log(inputAsNumber); break;
      }
  }
  
}
solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve ('9', 'dice', 'spice', 'chop', 'bake', 'fillet');