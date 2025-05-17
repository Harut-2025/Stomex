import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import globalStyles from "./App.module.scss"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Karzina from './Pages/Karzina/Karzina';
import ProductPage from './Pages/ProducrPage/ProductPage';
import Alfa from './Pages/AlfaStom/Alfa';
import { AppProvider, useAppContext } from '../src/Components/Context/AppContext';


function AppContent() {
  const { i18n } = useTranslation();
  const pagesList = i18n.t('pages', { returnObjects: true });
  const { loading } = useAppContext();

  if (loading) return <Loader />;

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karzina" element={<Karzina />} />
          <Route path="/user/:id" element={<ProductPage />} />
          <Route path="/shops/alfa" element={<Alfa/>} />
          
          {pagesList.map(({ path }, i) => (
            <Route key={i} path={path} element={<About />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
      <AppProvider>
        <AppContent />
      </AppProvider>
  );
}

export default App;