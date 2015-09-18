describe('Pizza', function() {
  it("creats a new Pizza with the given specifications", function(){
    var testPizza = new Pizza("large", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.pizzaTopping).to.equal("pepperoni");
  });

  it("adds the pizzaSize method to all of the pizzas", function() {
    var testPizza = new Pizza("large", "pepperoni");
    expect(testPizza.pizzaSize()).to.equal(15);
  });

  it("adds the pizzaTopping method to all of the pizzas", function() {
    var testPizza = new Pizza("large", "pepperoni");
    expect(testPizza.pizzaTopping()).to.equal(15);
  });




});
