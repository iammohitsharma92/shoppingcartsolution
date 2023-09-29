class Product {
  constructor(id, name, category, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
  }

  getProductDetails() {
    return `Product_ID: ${this.id} | Product Name: ${this.name} | Category: ${this.category}`;
  }

  getProductPrice() {
    return this.price;
  }
}

class DiscountedProduct extends Product {
  constructor(id, name, category, price, discount) {
    super(id, name, category, price);
    this.discount = discount;
  }

  getProductPrice() {
    if (this.discount) {
      const discountedPrice = this.price - (this.price / 100) * this.discount;
      return discountedPrice;
    } else {
      return super.getProductPrice();
    }
  }
}

module.exports = {
  Product,
  DiscountedProduct,
};
