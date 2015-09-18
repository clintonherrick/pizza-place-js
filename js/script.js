function orderPizza(pizzaSize, pizzaTopping, numberOfPizzas) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.numberOfPizzas = numberOfPizzas;
}

orderPizza.prototype.basePizzaPrice = function() {
  var PizzaPrice = 0;

  if(this.pizzaSize === "large") {
    PizzaPrice = 15 * this.numberOfPizzas;
  } else if (this.basePizzaPrice === "medium") {
    PizzaPrice = 13 * this.numberOfPizzas;
  } else {
    PizzaPrice = 10 * this.numberOfPizzas;
  }

  if (this.pizzaTopping !== undefined) {
    this.pizzaTopping.forEach(function(topping) {
      pizzaPrice += 1;
    });
  }

  return pizzaPrice;


});
