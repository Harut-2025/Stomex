// src/utils/currency.js
export const convertPrice = (price, language, exchangeRate = 400) => {
  if (language === 'hy') {
    // Price is stored in AMD, no conversion needed
    return {
      value: Math.round(price),
      currency: '֏',
      originalValue: price
    };
  } else {
    // Convert AMD to USD (using 400 as default exchange rate)
    const usdValue = price / exchangeRate;
    return {
      value: usdValue.toFixed(2),
      currency: '$',
      originalValue: price
    };
  }
};

export const convertAllPrices = (data, language, exchangeRate = 400) => {
  return data.map(item => {
    const priceValue = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    return {
      ...item,
      displayPrice: convertPrice(priceValue, language, exchangeRate)
    };
  });
};