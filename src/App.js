import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Karzina from './Pages/Karzina/Karzina';
import ProductPage from './Pages/ProducrPage/ProductPage';
import { CurrencyProvider } from './Components/Currency/CurrencyContext';

function App() {
  const [buyCard, setBuyCard] = useState([]);
  const [favorit, setFavorit] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const pagesList = i18n.t('pages', { returnObjects: true });
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
  if (loading) return <Loader />;
  return (
    <CurrencyProvider>
      <Router>
        <div className="App">
          <Header addCardToBasket={addCardToBasket} buyCard={buyCard} setBuyCard={setBuyCard} favorit={favorit} setFavorit={setFavorit} totalPrice={totalPrice}/>
          <Routes><Route path="/" element={<Home addCardToBasket={addCardToBasket} addCardToFavorit={addCardToFavorit} favorit={favorit} />}/>
          <Route path="/karzina" element={ <Karzina buyCard={buyCard} setBuyCard={setBuyCard} totalPrice={totalPrice} /> } />
          <Route path="/user/:id" element={ <ProductPage addCardToBasket={addCardToBasket} addCardToFavorit={addCardToFavorit} favorit={favorit}/> }/>
            {pagesList.map(({ path }, i) => (
              <Route key={i} path={path} element={<About />} />
            ))}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}
export default App;
