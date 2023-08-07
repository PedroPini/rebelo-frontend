// Function to find the price for a specific product id
export function findPriceForProduct(productId, prices) {
    const price = prices.data.find((price) => price.product === productId);
    return price ? price.unit_amount/100 : "Price not found";
}

// Function to just divide the price for 100
export function dividePriceForProduct(price) {
    return price ? price/100 : "Price not found";
}