import { Button, Dropdown, Space } from 'antd';
import React from 'react'
import styles from './Leng.module.scss'
import { useTranslation } from 'react-i18next';
import '../../../i18n'
export default function Leng({color}) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => changeLanguage('en')} >
                    ENG
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => changeLanguage('hy')} >
                    ՀԱՅ
                </a>
            ),
        },
    ];
    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown menu={{ items }} placement="bottomLeft">
                    <Button className={styles.change} style={{color:`${color}`}}>{t('leng')}</Button>
                </Dropdown>
            </Space>

        </Space>
    )
}
