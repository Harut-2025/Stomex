import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Carusel from '../../Components/Carousel/Carousel';
import styles from './ProductPage.module.scss'
import Slider from '../../Components/Ul/Slider/Slider';
import Stars from '../../Components/Ul/Stars/Stars'
import CountInput from '../../Components/Ul/CountInput/CountInput'
import BasketButton from '../../Components/Ul/BasketButton/BasketButton'
import Card from '../../Components/Card/Card';
import Order from '../../Components/Order/Order'

function ProductPage({ addCardToBasket, addCardToFavorit, favorit }) {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const cardsList = i18n.t('cards', { returnObjects: true });
    const product = cardsList.find((item) => String(item.id) === id);
    const firstFoureCards = cardsList.slice(0, 4);





    if (!product) return <h2>Ապրանքը չի գտնվել</h2>;

    return (
        <>
            <Carusel />
            <section >
                <div className={styles.container}>
                    <p className={styles.market}>Alfa Stom → {product.name}</p>
                    <div className={styles.flex}>
                        <Slider img2={product.img2} img3={product.img3} img4={product.img4} />
                        <div className={styles.productInfo}>
                            <div className={styles.starshere}>
                                <Stars />
                                <div className={styles.shereDiv}>
                                    <img src="/Assets/Img/share 1.png" alt="Shere" />
                                    <p className={styles.shere}>{t('shere')}</p>
                                </div>
                            </div>
                            <h1 className={styles.name}>{product.type} {product.name}</h1>
                            <p className={styles.price}>{product.price} {t('money')}</p>
                            <div className={styles.smallDiv}>
                                <p className={styles.smallInfo}>{t('manufacturer')} <span>Morelli</span></p>
                                <p className={styles.smallInfo}>{t('seller')} <span>Stom</span></p>
                                <p className={styles.smallInfo}>{t('availability')} <span>{t("available")}</span> </p>
                            </div>

                            <p className={styles.count}>{t('count')}</p>
                            <div className={styles.countDiv}><CountInput /></div>
                            <BasketButton className={styles.add} addCardToBasket={addCardToBasket} />


                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sectionTwo}>
                <div className={styles.containerSize}>
                    <p className={styles.gray}>Описание:
                        Изготовлен из титан-молибденового сплава. Подходит для финишной обработки <br />
                        <span className={styles.colorBlue}>Производитель: Morelli (Бразилия)</span></p><br />
                    <p className={styles.gray}>Показано в представлении ортодонтического лечения</p>
                    <p className={styles.gray}>0,18 - 0,45mm</p>
                    <p className={styles.gray}> 0,32 - 0,80mm</p>
                    <p className={styles.gray}>0,16 x .0,16 - 0,40 x 0,40mm</p>
                    <p className={styles.gray}>0,16 x .0,22 - 0,40 x 0,55mm</p>
                    <p className={styles.gray}> 0,17 x .0,25 - 0,43 x 0,63mm</p>
                    <p className={styles.gray}> 0,18 x .0,25 - 0,45 x 0,63mm</p>
                    <p className={styles.gray}> 0,19 x 0,25 - 0,48 x 0,63mm </p>
                </div>
            </section>


            <section>


                <div className={styles.containerTwo}>
                    <p className={styles.otherProduct}>{t('otherproduct')}</p>
                </div>
                <div className={styles.cardsDiv}>

                    {firstFoureCards.map((cart) => (
                        <Card addCardToBasket={addCardToBasket}
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


            </section>
            <section>
                <Order />
            </section>
        </>
    );
}



export default ProductPage;