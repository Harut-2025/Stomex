import styles from './Input.module.scss';
import React, { useState, useEffect } from 'react';

const Input = () => {
  const [showInput, setShowInput] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (isSmallScreen) {
      setShowInput(!showInput);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={`${styles.input} ${
          showInput || !isSmallScreen ? styles.show : ''
        }`}
      />
      <button onClick={handleClick} className={styles.inputButton}>
        <img src="./Assets/Img/Group.png" alt="" />
      </button>
    </div>
  );
};

export default Input;
