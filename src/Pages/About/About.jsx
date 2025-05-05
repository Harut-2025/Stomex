import React from 'react'
import styles from './About.module.scss'
import '../../i18n.js'
import { useTranslation } from 'react-i18next';
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
            <section>
                <div className={styles.containerTwo}>
                    <div className={styles.sectionTree}>
                    <div className={styles.paragraf}>
                        <p>
                            Stomex -ը հարթակ է,որը հնարավորություն է տալիս բժշկին 1 զանգի շնորհիվ  ստանալ  տեղեկություն ու պատվիրել   անհրաժեշտ  ապրանքը  21  խանութների  տեսականուց:
                            Կայքում ներառված են Հայաստանի ստոմատոլոգիական պարագաներ մատակարարող կազմակերպությունները և իրենց տեսականին։
                            Stomex Delivery -ով պատվիրելու արդյունքում խնայում եք Ձեր ժամանակը, խուսափում տարբեր խանութներում գնումներ կատարելու քաշքշուկներից :
                            <span> Երևանի տարածքում առաքումը արժե 400 դրամ՝ անկախ ապրանքի ծավալից ու չափերից</span>
                            Stomex.am Delivery-ն տրամադրում է է կուտակային Բոնուս քարտ,որի շնորհիվ ՀՀ դրամ-ով կատարված գնումների 2%-ը կուտակվում է Բոնուս քարտին՝ հետագա գնումներ կատարելու համար:
                            Քարտը տրամադրվում է միանվագ՝ 25000.00 ՀՀ դրամ-ի գնումներ կատարելու դեպքում և հասանելի է դառնում կուտակված 5001.00 ՀՀ դրամը գերազանցելու դեպքում:
                            Stomex.am-n ընդլայնել  է նաև  իր գործունեությունը՝ նոր համագործակցություն է սկսելով հասարակական ու սպասարկման օբյեկտների հետ՝ ապահովելով վերջիններիս այցելուների և աշխատակիցների հիգիենիկ պաշտպանությունը:
                        </p>
                    </div>
                    </div>
                </div>
                <div className={styles.orderDiv}><Order/></div>
            </section>
        </>
    )
}
