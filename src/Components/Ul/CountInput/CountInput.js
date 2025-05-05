import { useState } from 'react';
import styles from './CountInput.module.scss';

function CountInput() {
  const [value, setValue] = useState(1);
  
  const decrement = () => {
    setValue(prev => Math.max(1, prev - 1));
  };
  
  const increment = () => {
    setValue(prev => prev + 1);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.numberinput}>
        <button 
          onClick={decrement}
          className={styles.button}
          aria-label="Decrease value"
        >
          <span>−</span>
        </button>
        
        <div className={styles.value}>
          {value}
        </div>
        
        <button 
          onClick={increment}
          className={styles.button}
          aria-label="Increase value"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default CountInput;