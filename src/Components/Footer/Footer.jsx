import styles from './Footer.module.scss'
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Link } from 'react-router-dom';

export default function Footer() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {

        i18n.changeLanguage(lng);

    };
    const footerList = i18n.t('footerpages', { returnObjects: true });
    const footerListOne = i18n.t('footerpagesOne', { returnObjects: true });
    const footerListTwo = i18n.t('footerpagesTwo', { returnObjects: true });
    const footerListThree = i18n.t('footerpagesThree', { returnObjects: true });
    const footerListFour = i18n.t('footerFour', { returnObjects: true })

    return (
        <div>
            <section>
                <div className={styles.bigBlockFooter}>
                    <div className={styles.containerFooter}>
                        <div className={styles.infoBlock}>
                            <ul>
                                <li><a href=" https://www.viber.com/ru/"><img src="./Assets/Img/Viber 1.svg" alt="" /></a></li>
                                <li><a href=" https://www.facebook.com/"> <img src="./Assets/Img/facebook-logo (2) 1.svg" alt="" /></a></li>
                                <li><a href=" https://www.instagram.com/"><img src="Assets/Img/instagram (1) 1.svg" alt="" /></a></li>
                                <li><a href=" https://whatsapp.com/"><img src="./Assets/Img/whatsapp.svg" alt="" /></a></li>

                            </ul>
                        </div>
                        <div className={styles.footerBlock} >
                            <div className={styles.miniBlock}>
                                <ul>
                                    {footerList.map((footerpages, index) => (
                                        <li key={index}>
                                            <Link to={footerpages.path}>{footerpages.name}</Link>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.miniBlock}>
                                <ul>
                                    {footerListOne.map((footerpagesOne, index) => (
                                        <li key={index}>
                                            <Link to={footerpagesOne.path}>{footerpagesOne.name}</Link>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.miniBlock}>
                                <ul>
                                    {footerListTwo.map((footerpagesTwo, index) => (
                                        <li key={index}>
                                            <Link to={footerpagesTwo.path}>{footerpagesTwo.name}</Link>

                                        </li>
                                    ))}
                                </ul>
                            </div >
                            <div className={styles.miniBlock}>
                                <ul>
                                    {footerListThree.map((footerpagesThree, index) => (
                                        <li key={index}>
                                            <Link to={footerpagesThree.path}>{footerpagesThree.name}</Link>

                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.footerSection}>
                <div className={styles.containerTwo}>
                    <div>
                        {footerListFour.map((footerFour, index) => (
                            <li key={index}>
                                <Link to={footerFour.path}>{footerFour.name}</Link>

                            </li>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}