import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Input from '../Ul/Input/Input';
import Menu from '../Ul/Menu/Menu';
import Leng from '../Ul/Leng/Leng';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';
import CountInput from '../Ul/CountInput/CountInput';
import User from '../Ul/User/User';
import { useAppContext } from '../Context/AppContext';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';



const shopList = [
  { name: "Alfa Stom", link: "alfa" },
  { name: "ArmDental.", link: "armdental" },
  { name: "Artenyanner LLC.", link: "artenyan" },
  { name: "Aledent", link: "aledent" },
  { name: "Arkona", link: "arkona" },
  { name: "BioChem", link: "biochem" },
  { name: "Dental Butique", link: "butique" },
  { name: "Dentax", link: "dentax" },
  { name: "Eldex", link: "eldex" },
  { name: "GALIARD", link: "galiard" },
  { name: "GDC", link: "gdc" },
  { name: "ГАВА Груп", link: "gava" },
  { name: "GARNI Line", link: "garni" },
  { name: "GlobMed", link: "globmed" },
  { name: "Medtechservice", link: "medtechservice" },
  { name: "MED ENGINEERING SERVICE", link: "medengineering" },
  { name: "M&D Dental Shop", link: "mddental" },
  { name: "Medem", link: "medem" },
  { name: "ParMed", link: "permed" },
  { name: "Skamed", link: "skamed" },
  { name: "Мед-Прогресс", link: "medprogress" },
  { name: "Stomion", link: "stomion" }
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const {
    buyCard,
    setBuyCard,
    favorit,
    setFavorit,
    totalPrice
  } = useAppContext();

  const [basketOpen, setBasketOpen] = useState(false);
  const [favoritOpen, setFavoritOpen] = useState(false);
  const pagesList = i18n.t('pages', { returnObjects: true });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const removeFromCart = (index) => {
    setBuyCard(prev => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem('buyCard', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromFavorites = (index) => {
    setFavorit(prev => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem('favorits', JSON.stringify(updated));
      return updated;
    });
  };
  const items = shopList.map((shop, index) => ({
    key: index.toString(),
    label: <Link to={`/shops/${shop.link}`}>{shop.name}</Link>,
  }));

  const displayTotalPrice = Number(totalPrice) || 0;

  const basketRef = useRef(null);
  const favoritRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        basketRef.current && !basketRef.current.contains(event.target)
      ) {
        setBasketOpen(false);
      }
      if (
        favoritRef.current && !favoritRef.current.contains(event.target)
      ) {
        setFavoritOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);





  return (
    <header>
      <div className={styles.headerImg}></div>
      <div className={styles.containerOne}>
        <nav>
          <div className={styles.logoMenu}><Menu /></div>
          <div className={styles.lengDiv}><Leng changeLanguage={changeLanguage} /></div>
          <div className={styles.mediaLogo}>
            <Link to="/">
              <img src="/Assets/Img/watermark2 1.png" alt="Logo" className={styles.nonLogo} />
            </Link>
          </div>

          <div className={styles.number}>
            <img src="./Assets/Img/Group 26.png" alt="" />
            <p className={styles.phoneNumber}> +374 33-25-01-25</p>
          </div>

          <Input />

          <div className={styles.icons}>
            <p className={styles.iconsInfo}>
              {buyCard.length}/{displayTotalPrice.toFixed(2)}{t('value')}
            </p>

            <div className={styles.basketShop}>
              <Basket
                count={buyCard.length}
                onClick={() => setBasketOpen(!basketOpen)}
                img={"./Assets/Img/Group 18.png"}
              />
            </div>

            {basketOpen && (
              <div className={styles.shopCard} ref={basketRef}>
                <div className={styles.list}>
                  {buyCard.map((cart, index) => {
                    const cartItemPrice = Number(cart.price) || 0;
                    return (
                      <div className={styles.soloDiv} key={index}>
                        <img src={cart.img} alt="" className={styles.basketImg} />
                        <div>
                          <p className={styles.basketTitle}>{cart.type} {cart.cardName}</p>
                          <CountInput />
                        </div>
                        <div>
                          <p className={styles.basketPrice}>{cartItemPrice.toFixed(2)} {t('money')}</p>
                        </div>
                        <img
                          src="/Assets/Img/Vector (1).png"
                          alt=""
                          className={styles.delete}
                          onClick={() => removeFromCart(index)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className={styles.shopCardFooter}>
                  <div className={styles.product}>{t('product')} {buyCard.length}</div>
                  <div className={styles.general}>
                    {t('general')} {displayTotalPrice.toFixed(2)} {t('money')}
                  </div>
                </div>

                <div className={styles.goToBasket}>
                  <Link to="/karzina">
                    <button>
                      <img src="./Assets/Img/Group 18.png" alt="" />
                      <p>{t('skip')}</p>
                    </button>
                  </Link>
                </div>
              </div>
            )}

            <div className={styles.basketFav}>
              <Basket
                count={favorit.length}
                onClick={() => setFavoritOpen(!favoritOpen)}
                img={"./Assets/Img/Group 19.png"}
              />
            </div>

            {favoritOpen && (
              <div className={styles.favoritList} ref={favoritRef} >
                {favorit.length > 0 ? (
                  favorit.map((cart, index) => (
                    <div className={styles.soloFav} key={index}>
                      <img src={cart.img} alt="" className={styles.basketImg} />
                      <div>
                        <p className={styles.basketTitle}>{cart.type} {cart.cardName}</p>
                      </div>
                      <img
                        src="/Assets/Img/Vector (1).png"
                        alt=""
                        className={styles.delete}
                        onClick={() => removeFromFavorites(index)}
                      />
                    </div>
                  ))
                ) : (
                  <div>{t('addproducts')} ❤️️</div>
                )}
              </div>
            )}

            <div className={styles.user}>
              <User img={'./Assets/Img/Group 20.png'} />
            </div>
          </div>
        </nav>

        <Link to="/">
          <img src="./Assets/Img/watermark2 1.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.page}>
        <div className={styles.containerOne}>
          <ul className={styles.pagesList}>
            {Array.isArray(pagesList) &&
              pagesList.map((page, index) => (
                <li key={index}>
                  {page.name === 'Shops' || page.name === 'Խանութներ' ? (
                    <Dropdown
                      overlay={
                        <div className={`${styles.dropdownMenu} custom-dropdown`}>
                          <ul>
                            {shopList.map((shop, index) => (
                              <li key={index}>
                                <Link to={`/shops/${shop.link}`}>{shop.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      }
                      trigger={['hover']}
                      placement="bottomLeft"
                    >

                      <a onClick={e => e.preventDefault()} href="#">
                        <Space>
                          {page.name}
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>

                  ) : (
                    <Link to={page.path || '#'}>{page.name}</Link>
                  )}
                </li>
              ))}
            <div className={styles.menuDiv}>
              <Menu />
            </div>
          </ul>

        </div>
      </div>
    </header>
  );
}
