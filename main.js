const fs = require("fs");
const { DiscountedProduct } = require("./Product");

const getFinalResult = (filename) => {
  try {
    // parse the file and then apply your appropriate logic to get the desired output
    // Print product details and product price as specified in the problem statement
    // return total amount as your final answer
    // For example, if you're answer is 'Total Amount: 29261', just return 29261.
    const inputIds = fs.readFileSync(filename, "utf8");
    const productData = fs.readFileSync("Products.json", "utf8");
    const filteredData = filterProductsByIds(productData, inputIds);
    let totalAmount = 0;
    for (const product of filteredData) {
      const { id, name, category, price, discount } = product;
      const discountedProduct = new DiscountedProduct(
        id,
        name,
        category,
        price,
        discount
      );
      console.log(discountedProduct.getProductDetails());
      console.log(discountedProduct.getProductPrice());
      totalAmount += discountedProduct.getProductPrice();
    }

    return totalAmount;
  } catch (error) {
    console.error(error);
  }
};
const filterProductsByIds = (products, inputIds) => {
  return JSON.parse(products).filter((product) =>
    inputIds
      .split(" ")
      .map(Number)
      .find((id) => id === product.id)
  );
};

module.exports = { getFinalResult };
