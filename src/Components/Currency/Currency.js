export const convertPrice = (price, language, exchangeRate = 400) => {
  if (language === 'hy') {
    return {
      value: Math.round(price),
      currency: '֏',
      originalValue: price
    };
  } else {
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