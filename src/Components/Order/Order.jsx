import React from 'react'
import '../../i18n.js'
import { useTranslation } from 'react-i18next';
import styles from './Order.module.scss'

export default function Order() {
    const { t, i18n } = useTranslation();
    return (

        <div className={styles.maping}>
            <div className={styles.mapBlock}>
                <iframe src="https://yandex.ru/map-widget/v1/?ll=44.512546%2C40.177628&z=10">

                </iframe>
            </div>
            <div className={styles.matherOfOrder}>
                <div className={styles.order}><p>{t('orderAll')}</p></div>
                <div className={styles.order}><p>{t('orderMassa')}</p></div>
                <div className={styles.orderWhite}><p>{t('orderPrice')}</p></div>
            </div>
        </div>
    )
}
