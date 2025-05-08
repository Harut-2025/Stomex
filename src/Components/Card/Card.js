import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import '../../i18n.js'

import styles from './Card.module.scss'
import Stars from '../Ul/Stars/Stars.js';
import FavoritButton from '../Ul/FavoritButton/FavoritButton.js';
export default function Card({ addCardToBasket , addCardToFavorit, favorit}) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const cardsList = i18n.t('cards', { returnObjects: true })

    const isCardFavorited = (id) => favorit.some(item => item.id === id);


    return (
        <div className={styles.cardsList}>
            {cardsList.map((card) => (
                <div className={styles.card} key={card.id}  style={{ backgroundImage: `url(${card.img})`, }}>
                    <div className={styles.reiting}>
                        <div className={styles.new}><p>New</p></div>
                        <div className={styles.starsDiv}> <Stars /></div>
                    </div>
                    <div className={styles.forPositing}>

                     <h3>{card.type} {card.name}</h3>
                    <p className={styles.cardInfo}>{card.info}</p>
                    <p className={styles.cardPrice}>{card.price} {t('money')}</p>
                   <div className={styles.cardButtons}>
                    <button className={styles.add} onClick={() => addCardToBasket(card)}><img src="./Assets/Img/Group 469.png" alt="" />{t('add')}</button>
                        <FavoritButton onClick={() => addCardToFavorit(card)} isFavorited={isCardFavorited(card.id)}/>
                    </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
