import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import styles from './Calling.module.scss';

Modal.setAppElement('#root');

const Calling = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.callButton} onClick={() => setIsOpen(true)}>
        <img src="./Assets/Img/Group 276.png" alt={t('callAlt')} />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>×</button>
        <p className={styles.message}>
          {t('fillFormMessagePart1')} <br />
          {t('fillFormMessagePart2')}
        </p>
        <div className={styles.icon}>
          <img src="/Assets/Img/Calling.png" alt={t('callAlt')} />
        </div>
        <p className={styles.phoneNumber}>+374 33-25-01-25</p>
        <a href="tel:+37433250125">
          <button className={styles.callAction}>{t('callButton')}</button>
        </a>
      </Modal>
    </>
  );
};

export default Calling;
