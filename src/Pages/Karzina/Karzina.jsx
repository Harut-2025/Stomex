import React from 'react'
import styles from './Karzina.module.scss'
import CountInput from '../../Components/Ul/CountInput/CountInput';
import '../../i18n'
import { useTranslation } from 'react-i18next';
import Carusel from '../../Components/Carousel/Carousel'
import Order from '../../Components/Order/Order'

export default function Karzina({ buyCard, setBuyCard, totalPrice }) {
   const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <>
    <Carusel/>
    <section className={styles.sectionOne}>
      <div className={styles.container}>
        <div className={styles.shoping}>
          <div className={styles.add}>
            <a href="https://www.zoho.com/" target="blank">
              <img src="./Assets/Img/LeftADD.png" alt="" />
            </a>
          </div>
          <div className={styles.cardsList}>
            {buyCard.map((cart, index) => (
              <div className={styles.soloDiv} key={index}>
                <img src={cart.img2} alt="" className={styles.basketImg} />
                <div>
                  <p className={styles.basketTitle}>{cart.type} {cart.name} {cart.info}</p>
                  <p className={styles.basketPrice}>{cart.price} {t('money')}</p>
                  <CountInput/>
                </div>
                <img src="./Assets/Img/Vector (1).png" alt="" className={styles.delete} onClick={() => {
                  setBuyCard(prev => {
                    const updated = prev.filter((_, i) => i !== index);
                    localStorage.setItem('buyCard', JSON.stringify(updated));
                    return updated;
                  });
                }} />
              </div>
            ))}
          </div>
          <div className={styles.order}>
            <p className={styles.yourOrder}>{t('yourorder')}</p>
            <div className={styles.divOne}>
              <div className={styles.flex}>
                <p className={styles.orderInfo} >{t('product')} </p>
                <p className={styles.orderInfo}>{buyCard.length}</p>
              </div>
              <div className={styles.flex}> 
                <p className={styles.orderInfo}>{t('thatsall')} </p>
                <p className={styles.orderInfo}>{totalPrice}  </p>
              </div>
              <div className={styles.flex}>
                  <p className={styles.orderInfo}> {t('shipping')}  </p>
                  <p className={styles.orderInfo}> 0</p>
              </div>
              <div className={styles.flex}>
                <p className={styles.orderInfo}>{t('discount')} </p>
                <p className={styles.orderInfo}> 0</p>
              </div>

            </div>
            <div className={styles.line}></div>
            <div className={styles.divTwo}>
              <p className={styles.orderFinish}>{t('general')}  </p>
              <p className={styles.orderFinish}>{totalPrice} {t('money')}</p>
            </div>

          </div>
          <div className={styles.add}>
            <a href="https://www.zendesk.com/" target="blank">
              <img src="./Assets/Img/RightADD.png" alt="" />
            </a>
          </div>
         
        </div>
        <div className={styles.last}>
          <p className={styles.take}>{t('take')}</p>
          <p className={styles.ticket}>{t('ticket')}</p>
          
        </div>

      </div>
    </section>
    <section>
      <Order/>
    </section>
    </>
  )
}
