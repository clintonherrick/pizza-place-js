function Pizza(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.basePizzaPrice = function() {
  var basePizzaPrice = 0;

  if(this.pizzaSize === "large") {
    return basePizzaPrice + 15;
  } else if (this.basePizzaPrice === "medium") {
    return basePizzaPrice + 13;
  } else {
    return basePizzaPrice + 10;
  }
});
