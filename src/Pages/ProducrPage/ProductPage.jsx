import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Carusel from '../../Components/Carousel/Carousel';
import styles from './ProductPage.module.scss'
import Slider from '../../Components/Ul/Slider/Slider';
import Stars from '../../Components/Ul/Stars/Stars'
import CountInput from '../../Components/Ul/CountInput/CountInput'

function ProductPage() {
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
            <section>
                <div className={styles.container}>
                    <p className={styles.market}>Alfa Stom → {product.name}</p>
                    <div className={styles.flex}>
                        <Slider img={product.img2} />
                        <div>
                            <Stars/>
                            <h1 className={styles.name}>{product.type} {product.name}</h1>
                            <p className={styles.price}>{product.price} {t('money')}</p>
                            <div className={styles.smallDiv}>
                                <p className={styles.smallInfo}>{t('manufacturer')} <span>Morelli</span></p>
                                <p className={styles.smallInfo}>{t('seller')} <span>Stom</span></p>
                                <p className={styles.smallInfo}>{t('availability')} <span>{t("available")}</span> </p>
                            </div>
                            
                            <p className={styles.count}>{t('count')}</p>
                            <CountInput/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}



export default ProductPage;