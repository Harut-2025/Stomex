import React, { useState } from 'react'
import styles from './Header.module.scss'
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Input from '../Ul/Input/Input';
import Menu from '../Ul/Menu/Menu';
import Leng from '../Ul/Leng/Leng';
import Basket from '../Basket/Basket.js';
import { Link } from 'react-router-dom';
import CountInput from '../Ul/CountInput/CountInput.js';




export default function Header({ buyCard, setBuyCard, favorit, setFavorit }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const pagesList = i18n.t('pages', { returnObjects: true })
  let size = buyCard.length
  let favsize = favorit.length

  const [basketOpen, setBasketOpen] = useState(false);
  const [favoritOpen, setFavoritOpen] = useState(false);

  function total() {
    return buyCard.reduce((sum, item) => sum += Number(item.price), 0);
  }
  let totalPrice = total();

  return (

    <header >
      <div className={styles.headerImg}></div>
      <div className={styles.containerOne}>
        <nav>
          <div className={styles.logoMenu}><Menu /></div>
          <div className={styles.lengDiv}><Leng /></div>
          <div className={styles.mediaLogo}>
            <Link to="/">
              <img src="./Assets/Img/watermark2 1.png" alt="Logo" className={styles.nonLogo} />
            </Link>
          </div>

          <div className={styles.number}>
            <img src="./Assets/Img/Group 26.png" alt="" />
            <p className={styles.phoneNumber}> +374 33-25-01-25</p>
          </div>
          <Input />
          <div className={styles.icons}>
            <p className={styles.iconsInfo}>{buyCard.length}/{totalPrice} {t('value')}</p>

            <div className={styles.basketShop}> <Basket count={size} onClick={() => setBasketOpen(!basketOpen)} img={"./Assets/Img/Group 18.png"} /></div>
            {basketOpen && (

              <div className={styles.shopCard}>
                {buyCard.map((cart, index) => (
                  <div className={styles.soloDiv} key={index}>
                    <img src={cart.img} alt="" className={styles.basketImg} />
                    <div>
                      <p className={styles.basketTitle}>{cart.type} {cart.name}</p>
                      <CountInput/>
                    </div>
                    <div>
                      <p className={styles.basketPrice}>{cart.price} {t('money')}</p>
                    </div>
                    <img src="./Assets/Img/Vector (1).png" alt="" className={styles.delete} onClick={() => { setBuyCard(buyCard => buyCard.filter((_, i) => i !== index)) }} />
                  </div>
                ))}
                <div className={styles.shopCardFooter}>
                  <div className={styles.product}>{t('product')} {buyCard.length}</div>
                  <div className={styles.general}>{t('general')} {totalPrice} {t('money')}</div>
                </div>
              </div>


            )}

            <div className={styles.basketFav}>
              <Basket count={favsize} onClick={() => setFavoritOpen(!favoritOpen)} img={"./Assets/Img/Group 19.png"} />
            </div>
            {favoritOpen && (
              <div className={styles.favoritList}>
                {favorit.map((cart, index) => (
                  <div className={styles.soloFav} key={index}>
                    <img src={cart.img} alt="" className={styles.basketImg} />
                    <div>
                      <p className={styles.basketTitle}>{cart.type} {cart.name}</p>
                    </div>

                    <img src="./Assets/Img/Vector (1).png" alt="" className={styles.delete} onClick={() => { setFavorit(favorit => favorit.filter((_, i) => i !== index)) }} />
                  </div>
                ))}


              </div>
            )}



            <a href=""><img src="./Assets/Img/Group 20.png" alt="" className={styles.user} /></a>

          </div>

        </nav>
        <Link to="/">
          <img src="./Assets/Img/watermark2 1.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.page}>
        <div className={styles.containerOne}>
          <ul className={styles.pagesList}>
            {pagesList.map((pages, index) => (
              <li key={index}>
                <Link to={pages.path}>{pages.name}</Link>

              </li>
            ))}
            <div className={styles.menuDiv}><Menu /></div>
          </ul>

        </div>

      </div>

    </header>



  )
}
