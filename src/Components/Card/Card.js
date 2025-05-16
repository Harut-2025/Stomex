import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import Stars from '../Ul/Stars/Stars';
import FavoritButton from '../Ul/FavoritButton/FavoritButton';
import BasketButton from '../Ul/BasketButton/BasketButton';
import { useAppContext } from '../../Components/Context/AppContext';

export default function Card({ 
  img, 
  type, 
  cardName, 
  info, 
  price, 
  id, 
  cartid, 
  newStyle 
}) {
  const { i18n } = useTranslation();
  const { 
    favorit = [], 
    addCardToBasket, 
    addCardToFavorit 
  } = useAppContext();
  
  const card = { 
    id, 
    img, 
    type, 
    cardName, 
    info, 
    price
  };
  
  const isCardFavorited = favorit.some(item => item.id === id);


  return (
    <div className={styles.cardsList}>
      <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
        <div className={styles.reiting}>
          {newStyle && (
            <div className={newStyle}>
              <p>New</p>
            </div>
          )}
          <div className={styles.starsDiv}>
            <Stars />
          </div>
        </div>
        
        <div className={styles.forPositing}>
          <Link to={`/user/${cartid}`} style={{ textDecoration: 'none' }}>
            <h3>{type} {cardName}</h3>
            <p className={styles.cardInfo}>{info}</p>
            <p className={styles.cardPrice}>
              {price}$
            </p>
          </Link>
          
          <div className={styles.cardButtons}>
            <BasketButton 
              card={card} 
              addCardToBasket={addCardToBasket} 
              className={styles.append}
            />
            <FavoritButton 
              onClick={() => addCardToFavorit(card)} 
              isFavorited={isCardFavorited} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}