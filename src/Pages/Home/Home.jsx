import React from 'react';
import Carusel from '../../Components/Carousel/Carousel.js';
import styles from './Home.module.scss';
import { useTranslation } from 'react-i18next';
import '../../i18n.js';
import Card from '../../Components/Card/Card.js';
import MenuSlider from '../../Components/MenuSlider/MenuSlider.jsx';
import translationData from '../../locales/hy/translation.json';
import Order from '../../Components/Order/Order.jsx'
import { Link } from 'react-router-dom';


export default function Home({ addCardToBasket, addCardToFavorit, favorit }) {
  const { t, i18n } = useTranslation();
  const shoping = i18n.t('shoping', { returnObjects: true });
  const cardsList = i18n.t('cards', { returnObjects: true });
  const cardsTwo = i18n.t('cardsTwo', { returnObjects: true });




  return (
    <>
      <Carusel />
      <section className={styles.sectionOne}>
        <div className={styles.containerTree}>
          <div className={styles.information}>
            <a href="https://www.zoho.com/" target="blank">
              <img src="./Assets/Img/LeftADD.png" alt="" />
            </a>
            <div>
              <p className={styles.news}>{t('news')}</p>
              <div className={styles.cardsDiv}>
                {cardsList.map((cart) => (
                  <Link  key={cart.id} to={`/user/${cart.id}`}>
                  <Card addCardToBasket={addCardToBasket}
                    addCardToFavorit={addCardToFavorit}
                    favorit={favorit}
                    img={cart.img}
                    type={cart.type}
                    cardName={cart.name}
                    info={cart.info}
                    price={cart.price}
                    id={cart.id}  
                  /></Link>
                ))}
              </div>
              <p className={styles.shops}>{t('shops')}</p>
            </div>
            <a href="https://www.zendesk.com/" target="blank">
              <img src="./Assets/Img/RightADD.png" alt="" />
            </a>

          </div>

          <MenuSlider firmNames={translationData.firmNames} />
        </div>

        <div className={styles.containerTree}>
          <div className={styles.shopItem} >
            {Array.isArray(shoping) &&
              shoping.map((shop, index) => (
                <img key={index}
                  src={shop.img}
                  alt={`shop-${index}`}
                  className={styles.shoplogo}
                />
              ))}

          </div>
        </div>
      </section>
      <section>
        <div className={styles.shopsCont}>
          <p className={styles.news}>{t('suggest')}</p>
          <div className={styles.cardsDiv}>
            {cardsTwo.map((cart) => (
                  <Card addCardToBasket={addCardToBasket}
                    addCardToFavorit={addCardToFavorit}
                    favorit={favorit}
                    img={cart.img}
                    type={cart.type}
                    cardName={cart.name}
                    info={cart.info}
                    price={cart.price}
                    id={cart.id} />
                ))}
          </div>
        </div>
      </section>
      <Order />

      <section className={styles.sectionTwo}>
        <div className={styles.containerJobs}>
          <div >
            <p className={styles.hayt}>{t('jobs')}</p>
            <div className={styles.jobsCard}>
              <div className={styles.jobsInfo}>
                <img src="./Assets/Img/Group 267.png" alt="photo" />
                <p className={styles.jobName}>{t('dentist')}</p>
              </div>
              <div className={styles.jobsInfo}>
                <img src="./Assets/Img/Group 268.png" alt="photo" />
                <p className={styles.jobName}>{t('dental')}</p>
              </div>
              <div className={styles.jobsInfo}>
                <img src="./Assets/Img/Group 269.png" alt="photo" />
                <p className={styles.jobName}>{t('orthodontist')}</p>
              </div>
              <div className={styles.jobsInfo}>
                <img src="./Assets/Img/Group 270.png" alt="photo" />
                <p className={styles.jobName}>{t('doctor')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
