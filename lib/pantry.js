export default class Pantry {
  constructor() {
    this.stock = {};
  }

  stockCheck(ingredientName) {
    if (this.stock[ingredientName] == undefined) {
      return 0;
    }
    return this.stock[ingredientName];
  }

  restock(ingredientName, amount) {
    return (this.stock[ingredientName] += amount);
  }
}
