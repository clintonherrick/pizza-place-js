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

}

  $(document).ready(function() {
  $("#add-topping").click(function(event) {
    event.preventDefault();
    $("#topping-options").append(
      '<div class="form-group new-topping">' +
        '<select id="toppings">' +
          '<option value="pepperoni">Pepperoni</option>' +
          '<option value="extra cheese">Extra Cheese</option>' +
          '<option value="mushroom">Mushroom</option>' +
          '<option value="Sausage">Sausage</option>' +
          '<option value="olives">Olives</option>' +
          '<option value="bear sausage">Bear Sausage</option>' +

        '</select>' +
      '</div>')
    });
  });

  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var quantity = parseInt($("input#quantity").val());
    var pizzaSize = $("select#size").val();
    var pizzaToppings = [];

    $(".add-topping").each(function() {
      pizzaToppings.push($("select#topping").val());
    });

    var newOrder = new Order(quantity, pizzaSize, pizzaToppings);

    $("#pizza-price").text(newOrder.calculateCost());

  });
