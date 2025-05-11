import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useTranslation } from 'react-i18next';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Karzina from './Pages/Karzina/Karzina';
import ProductPage from './Pages/ProducrPage/ProductPage'


function App() {
  const [buyCard, setBuyCard] = useState([]);
  const [favorit, setFavorit] = useState([]);
  
  

  useEffect(() => {
    const savedBuyCard = JSON.parse(localStorage.getItem('buyCard')) || [];
    const savedFavorits = JSON.parse(localStorage.getItem('favorits')) || [];
    setBuyCard(savedBuyCard);
    setFavorit(savedFavorits);
  }, []);

  const addCardToBasket = (card) => {
    setBuyCard(prev => {
      const alreadyInCart = prev.some(item => item.id === card.id );
      if (alreadyInCart) return prev;
      const updated = [...prev, card];
      localStorage.setItem('buyCard', JSON.stringify(updated)); 
      return updated;
      
      
    });
  };

  const addCardToFavorit = (card) => {
    setFavorit(prev => {
      const alreadyFavorited = prev.some(item => item.id === card.id);
      let updated;
      if (alreadyFavorited) {
        updated = prev.filter(item => item.id !== card.id); 
      } else {
        updated = [...prev, card];
      }
      localStorage.setItem('favorits', JSON.stringify(updated));
      return updated;
    });
  };

  function total() {
    return buyCard.reduce((sum, item) => sum += Number(item.price), 0);
  }
  let totalPrice = total();

  const { t, i18n } = useTranslation();
  const pagesList = i18n.t('pages', { returnObjects: true });

  const pagesComponents = {
    "/about": <About />,


  };


  return (
    <Router>
      <div className="App">
        <Header addCardToBasket={addCardToBasket} buyCard={buyCard} setBuyCard={setBuyCard} favorit={favorit} setFavorit={setFavorit} totalPrice={totalPrice} />
        <Routes>
          <Route path="/" element={<Home addCardToBasket={addCardToBasket} addCardToFavorit={addCardToFavorit} favorit={favorit} />} />
          <Route path="/karzina" element={<Karzina buyCard={buyCard} setBuyCard={setBuyCard} totalPrice={totalPrice}/> } />
           <Route path="/user/:id" element={<ProductPage />} />
          
          {pagesList.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={pagesComponents[page.path]}
            />
          ))}
          
        </Routes>
        <Footer />

      </div>
    </Router>

  );

}

export default App;
