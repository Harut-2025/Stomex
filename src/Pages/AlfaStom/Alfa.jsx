import React from 'react'
import styles from "./Alfa.module.scss"
import { useTranslation } from 'react-i18next';
import DropDown from "../../Components/Ul/DropDown/DropDown";
import Card from '../../Components/Card/Card.js';
import Order from '../../Components/Order/Order.jsx';

export default function Alfa( {addCardToBasket, addCardToFavorit, favorit }) {
    const { t, i18n } = useTranslation();
    const cardsList = i18n.t('cards', { returnObjects: true });

    const CardSize = [];
    while (CardSize.length < 16) {
        CardSize.push(...cardsList);
    }
    const SixTeenCards = CardSize.slice(0, 16);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headDiv}>
                    <a href="https://www.zoho.com/" target="blank">
                        <img src="/Assets/Img/LeftADD.png" alt="add" />
                    </a>
                    <div>
                        <p className={styles.marketName}>{t('shops')} → Alfa Stom</p>
                        <div className={styles.marketInfo}>
                            <img src="/Assets/Img/AlfaStom.png" alt="AlfaStom" />
                            <div>
                                <h3>Alfa Stom</h3>
                                <p>{t('activity')}</p>
                                <p>{t('adres')}</p>
                                <p>{t('tel')}</p>
                                <p>{t('working')}</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.filterDiv}>
                                <DropDown />
                            </div>
                            <div className={styles.cardDiv}>
                                {SixTeenCards.map((cart) => (
                                    <Card addCardToBasket={addCardToBasket}
                                        key={cart.id}
                                        addCardToFavorit={addCardToFavorit}
                                        favorit={favorit}
                                        img={cart.img}
                                        type={cart.type}
                                        cardName={cart.name}
                                        info={cart.info}
                                        price={cart.price}
                                        id={cart.id}
                                        cartid={cart.id}
                                        newStyle={styles.new}
                                    />
                                ))}


                            </div>




                        </div>

                    </div>

                    <a href="https://www.zendesk.com/" target="blank" >
                        <img src="/Assets/Img/RightADD.png" alt="" />
                    </a>
                </div>

            </div>
            
            <Order/>
            




        </>
    )
}
