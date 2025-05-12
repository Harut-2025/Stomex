// src/context/CurrencyContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [exchangeRate, setExchangeRate] = useState(400);


  const convertPrice = (price, language = i18n.language) => {
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

  return (
    <CurrencyContext.Provider value={{ exchangeRate, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);