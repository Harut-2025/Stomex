import { useState } from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { useTranslation } from 'react-i18next';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';


function App() {
  const [buyCard, setBuyCard] = useState([]);
  const addCardToBasket = (card) => {
    setBuyCard(prev => {
      const cart = prev.some(item => item.id === card.id);
      if (!cart) {
        return [...prev, card];
      }
      return prev;
    });
  };
  const [favorit, setFavorit] = useState([]);

  const addCardToFavorit = (card) => {
    setFavorit(prev => {
      const exists = prev.some(item => item.id === card.id);
      if (!exists) {
        const updated = [...prev, card]; 
      localStorage.setItem('favorits', JSON.stringify(updated));
      return updated;
      }
      return prev;
    });
  };




  const { t, i18n } = useTranslation();
  const pagesList = i18n.t('pages', { returnObjects: true });

  const pagesComponents = {
    "/about": <About />,
    

  };






  return (
    <Router>
      <div className="App">
        <Header addCardToBasket={addCardToBasket} buyCard={buyCard} setBuyCard={setBuyCard} favorit={favorit} setFavorit={setFavorit} />
        <Routes>
          <Route path="/" element={<Home addCardToBasket={addCardToBasket} addCardToFavorit={addCardToFavorit} />} />
          {pagesList.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={pagesComponents[page.path] }
            />
          ))}
        </Routes>
        <Footer />

      </div>
    </Router>

  );

}

export default App;
