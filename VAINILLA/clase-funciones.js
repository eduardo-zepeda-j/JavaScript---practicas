function calculateDiscountPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;

  return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 15;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);

console.log(`El precio original es de $${originalPrice}`);
console.log(`el descuento es de ${discountPercentage}%`);
console.log(`y el precio con descuento es de $${finalPrice}`);
