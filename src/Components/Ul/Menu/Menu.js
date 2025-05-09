import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import '../../../i18n';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss'
import Leng from '../Leng/Leng.js'
import User from '../User/User.jsx'


const Menu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();
  const pagesList = i18n.t('pages', { returnObjects: true });

  return (
    <>
      <img src="./Assets/Img/Group 337.png" alt="Menu" onClick={showDrawer} className={styles.menu}/>
      <Drawer onClose={onClose} open={open}  drawerStyle={{ backgroundColor: '#2E5BCF' }}>
        <div className={styles.menuHeader}>
          <Leng color='white' /> 
          <img src="./Assets/Img/Group 19 (1).png" alt="" />
          <User img={'./Assets/Img/Group 20 (1).png'}/>
        </div>
        
          <ul className={styles.list}>
            {pagesList.map((page, index) => (
              <li key={index}>
                <Link to={page.path} onClick={onClose}>{page.name}</Link>
              </li>
            ))}
          </ul>

      </Drawer>
    </>
  );
};

export default Menu;
