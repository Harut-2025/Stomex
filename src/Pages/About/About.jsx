import React from 'react'
import styles from './About.module.scss'
import '../../i18n.js'
import { useTranslation } from 'react-i18next';
import Calling from '../../Components/Calling/Calling.js';
import Order from '../../Components/Order/Order.jsx'

export default function About() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <section>
                <div className={styles.container}>
                    <p className={styles.title}> {t('aboutUs')}</p>
                </div>
                <div className={styles.aboutDiv}>
                    <div>
                        <h1 className={styles.about}>{t('aboutUs')}</h1>
                    </div>
                </div>

            </section>
            <section>
                <div className={styles.containerTwo}>
                    <div className={styles.aboutInfo}>
                        <div className={styles.add}><a href="https://www.zoho.com/"><img src="./Assets/Img/LeftADD.png" alt="add" /></a></div>
                        <div className={styles.video}>
                            <iframe width="100%" height="788px"
                                src="https://www.youtube.com/embed/vU_DVBdiqMQ?si=xe1MlhMfsYvrGznU"
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>
                        <div className={styles.add}><a href="https://www.zendesk.com/"><img src="./Assets/Img/RightADD.png" alt="add" /></a></div>
                    </div>

                </div>
            </section>
            <Calling/>
            <section>
                <div className={styles.containerTwo}>
                    <div className={styles.sectionTree}>
                    <div className={styles.paragraf}>
                        <p>
                            {t('stomexInfo')}
                        </p>
                    </div>
                    </div>
                </div>
                <div className={styles.orderDiv}><Order/></div>
            </section>
        </>
    )
}
