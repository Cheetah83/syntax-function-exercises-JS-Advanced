function solve (fruit, weight, price) {
  let fruitType = fruit;
  let pricePerKilo = price;
  let fruitWeight = weight;
  
  let weightInKilo = weight/1000;
  let money = pricePerKilo * weightInKilo;

  console.log(`I need $${money.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruitType}.`)
}
solve ('orange', 2500, 1.80)