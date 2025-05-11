import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import '../../i18n.js'

import styles from './Card.module.scss'
import Stars from '../Ul/Stars/Stars.js';
import FavoritButton from '../Ul/FavoritButton/FavoritButton.js';
export default function Card({ addCardToBasket , addCardToFavorit, favorit, img, type, cardName, info, price, id,}) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    const card = { id, img, type, cardName, info, price, }

    const isCardFavorited = (id) => favorit.some(item => item.id === id);


    return (
        <div className={styles.cardsList}>
                <div className={styles.card}   style={{ backgroundImage: `url(${img})`, }}>
                   
                    <div className={styles.reiting}>
                        <div className={styles.new}><p>New</p></div>
                        <div className={styles.starsDiv}> <Stars /></div>
                    </div>
                    <div className={styles.forPositing}>

                     <h3>{type} {cardName}</h3>
                    <p className={styles.cardInfo}>{info}</p>
                    <p className={styles.cardPrice}>{price} {t('money')}</p>
                   <div className={styles.cardButtons}>
                    <button className={styles.add} onClick={() => addCardToBasket(card)}><img src="./Assets/Img/Group 469.png" alt="" />{t('add')}</button>
                        <FavoritButton onClick={() => addCardToFavorit(card)} isFavorited={isCardFavorited(card.id)}/>
                    </div>

                    </div>
                </div>
        </div>
    )
}
