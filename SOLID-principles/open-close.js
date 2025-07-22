/* 
    Open-Close principle
    Software entities should be open for extension but closed for modification.

*/


interface DiscountStrategy {
  apply(price: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(price: number) { return price; }
}

class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  apply(price: number) {
    return price - (price * this.percent) / 100;
  }
}

class Cart {
  constructor(private discount: DiscountStrategy) {}
  checkout(price: number) {
    return this.discount.apply(price);
  }
}
