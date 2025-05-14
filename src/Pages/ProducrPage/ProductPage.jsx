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
    const cardsTwo = i18n.t('cardsTwo', { returnObjects: true });
    const allCards = [...cardsList, ...cardsTwo];
    const product = allCards.find((item) => String(item.id) === id);





    if (!product) return <h2>Ապրանքը չի գտնվել</h2>;

    return (
        <>

            <Carusel />
            <section >
                <div className={styles.container}>
                    <p className={styles.market}>Alfa Stom → {product.name}</p>
                    <div className={styles.flex}>
                        <Slider img2={product.img2} img3={product.img3} img4={product.img4} />
                        <div>
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
                            <BasketButton className={styles.add} />


                        </div>
                    </div>
                </div>
            </section>

            <section>


                <div className={styles.containerTwo}>
                    <p className={styles.otherProduct}>{t('otherproduct')}</p>
                </div>
                <div className={styles.cardsDiv}>

                    {cardsList.map((cart) => (
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