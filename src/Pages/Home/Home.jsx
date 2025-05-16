import React from 'react';
import Carusel from '../../Components/Carousel/Carousel.js';
import styles from './Home.module.scss';
import { useTranslation } from 'react-i18next';
import '../../i18n.js';
import Card from '../../Components/Card/Card.js';
import MenuSlider from '../../Components/MenuSlider/MenuSlider.jsx';
import translationData from '../../locales/hy/translation.json';
import Order from '../../Components/Order/Order.jsx'



export default function Home({ addCardToBasket, addCardToFavorit, favorit }) {
  const { t, i18n } = useTranslation();
  const shoping = i18n.t('shoping', { returnObjects: true });
  const cardsList = i18n.t('cards', { returnObjects: true });
  const jobList = i18n.t('jobList', { returnObjects: true });

  const firstFoureCards = cardsList.slice(0, 4);

  const CardSize = [];
  while (CardSize.length < 8) {
    CardSize.push(...cardsList);
  }
  const firstFiveCards = CardSize.slice(0, 8);



  return (
    <>
      <Carusel />
      <section className={styles.sectionOne}>
        <div className={styles.containerTree}>
          <div className={styles.information}>
            <a href="https://www.zoho.com/" target="blank" className={styles.content}>
              <img src="./Assets/Img/LeftADD.png" alt="" />
            </a>
            <div>
              <p className={styles.news}>{t('news')}</p>
              <div className={styles.cardsDiv}>
                {firstFoureCards.map((cart) => (
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
              <p className={styles.shops}>{t('shops')}</p>
            </div>
            <a href="https://www.zendesk.com/" target="blank" className={styles.content}>
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
            {firstFiveCards.map((cart) => (
              <Card addCardToBasket={addCardToBasket}
                key={Math.random()}
                addCardToFavorit={addCardToFavorit}
                favorit={favorit}
                img={cart.img}
                type={cart.type}
                cardName={cart.name}
                info={cart.info}
                price={cart.price}
                id={cart.id}
                cartid={cart.id}
                newStyle={styles.notNew}
              />
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
             {jobList.map((job)=>(
              <div className={styles.jobsInfo} key={job.id}>
                <img src={job.img} alt="photo" />
                <p className={styles.jobName}>{job.name}</p>

              </div>
             ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
