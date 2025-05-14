import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n.js';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import Stars from '../Ul/Stars/Stars.js';
import FavoritButton from '../Ul/FavoritButton/FavoritButton.js';
import BasketButton from '../Ul/BasketButton/BasketButton.jsx';
import { convertPrice } from '../../Components/Currency/Currency.js';

export default function Card({ addCardToBasket, addCardToFavorit, favorit, img, type, cardName, info, price, id, cartid, newStyle }) {
    const { t, i18n } = useTranslation();
    
    const card = { id, img, type, cardName, info, price };
    const displayPrice = convertPrice(price, i18n.language);
    
    

    const isCardFavorited = (id) => favorit.some(item => item.id === id);

    return (
        <div className={styles.cardsList}>
            <div className={styles.card} style={{ backgroundImage: `url(${img})`, }}>
                <div className={styles.reiting}>
                    <div className={newStyle}><p>New</p></div>
                    <div className={styles.starsDiv}> <Stars /></div>
                </div>
                <div className={styles.forPositing}>
                    <Link key={cartid} to={`/user/${cartid}`} style={{textDecoration:'none'}}>
                        <h3>{type} {cardName}</h3>
                        <p className={styles.cardInfo}>{info}</p>
                        <p className={styles.cardPrice}>
                          {displayPrice.value} {displayPrice.currency}
                        </p>
                    </Link>
                    <div className={styles.cardButtons}>
                        <BasketButton card={card} addCardToBasket={addCardToBasket} className={styles.append}/>
                        <FavoritButton onClick={() => addCardToFavorit(card)} isFavorited={isCardFavorited(card.id)} />
                    </div>
                </div>
            </div>
        </div>
    );
}