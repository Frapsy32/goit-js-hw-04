function isEnoughCapacity(products, containerSize) {
  const totalAmount = 0;

  productsList = Object.keys(products);

  for (let product of productsList) {
    totalAmount += product.value;
  }
  if (totalAmount <= containerSize) {
    return true;
  } else;
}
