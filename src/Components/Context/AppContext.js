import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [buyCard, setBuyCard] = useState([]);
  const [favorit, setFavorit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBuyCard(JSON.parse(localStorage.getItem('buyCard')) || []);
    setFavorit(JSON.parse(localStorage.getItem('favorits')) || []);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const addCardToBasket = (card) => {
    setBuyCard((prev) => {
      if (prev.some((item) => item.id === card.id)) return prev;
      const updated = [...prev, card];
      localStorage.setItem('buyCard', JSON.stringify(updated));
      return updated;
    });
  };

  const addCardToFavorit = (card) => {
    setFavorit((prev) => {
      const updated = prev.some((item) => item.id === card.id)
        ? prev.filter((item) => item.id !== card.id)
        : [...prev, card];
      localStorage.setItem('favorits', JSON.stringify(updated));
      return updated;
    });
  };

  const totalPrice = buyCard.reduce((sum, item) => sum + Number(item.price), 0);

  const value = {
    buyCard,
    favorit,
    loading,
    totalPrice,
    addCardToBasket,
    addCardToFavorit,
    setBuyCard,
    setFavorit
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}