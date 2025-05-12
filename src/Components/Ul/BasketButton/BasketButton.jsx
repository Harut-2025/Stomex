import React from 'react'
import styles from './BasketButton.module.scss'
import { useTranslation } from 'react-i18next';
export default function BasketButton({addCardToBasket,card, className}) {
    const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
  return (
    <button className={className} style={{color:"white"}} onClick={() => addCardToBasket(card)} >
        <img src="./Assets/Img/Group 469.png" alt="" />{t('add')}</button>
  )
}
