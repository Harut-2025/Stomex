import React from 'react';
import Carusel from '../../Carousel/Carousel.js';
import styles from './Home.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../i18n.js';
import Card from '../../Card/Card.js';
import CardTwo from '../../CardTwo/CardTwo.js';
import MenuSlider from '../../MenuSlider/MenuSlider.jsx';
import translationData from './../../../locales/hy/translation.json';

export default function Home({ addCardToBasket, addCardToFavorit }) {
  const { t, i18n } = useTranslation();
  const shoping = i18n.t('shoping', { returnObjects: true });

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
              <Card addCardToBasket={addCardToBasket}  addCardToFavorit={addCardToFavorit}/>
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
        <CardTwo addCardToBasket={addCardToBasket}  addCardToFavorit={addCardToFavorit}/>
        </div>
      </section>
      <div className={styles.maping}>
              <img src={t('map')} alt="" />
      </div>
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
