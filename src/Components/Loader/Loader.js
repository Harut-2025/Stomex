import { useState, useEffect } from 'react';
import styles from './Loader.module.scss';

export default function Loader() {
  const prefixText = "STOM";
  const suffixText = "EX";
  const domainExt = ".am";

  const [visiblePrefix, setVisiblePrefix] = useState("");
  const [visibleSuffix, setVisibleSuffix] = useState("");
  const [showExt, setShowExt] = useState(false);
  const [blinkExt, setBlinkExt] = useState(1);
  const [fadeInOpacity, setFadeInOpacity] = useState(0);

  useEffect(() => {
    if (visiblePrefix.length < prefixText.length) {
      const typingTimer = setTimeout(() => {
        setVisiblePrefix(prefixText.substring(0, visiblePrefix.length + 1));
        setFadeInOpacity(0);
        setTimeout(() => setFadeInOpacity(1), 10);
      }, 120);

      return () => clearTimeout(typingTimer);
    } else if (visibleSuffix.length < suffixText.length) {
      const typingSuffixTimer = setTimeout(() => {
        setVisibleSuffix(suffixText.substring(0, visibleSuffix.length + 1));
        setFadeInOpacity(0);
        setTimeout(() => setFadeInOpacity(1), 10);
      }, 120);

      return () => clearTimeout(typingSuffixTimer);
    } else if (!showExt) {
      const extTimer = setTimeout(() => {
        setShowExt(true);

        let direction = -0.05;
        const blinkTimer = setInterval(() => {
          setBlinkExt(prev => {
            if (prev <= 0.4) direction = 0.05;
            if (prev >= 1) direction = -0.05;
            return prev + direction;
          });
        }, 50);

        return () => clearInterval(blinkTimer);
      }, 200);

      return () => clearTimeout(extTimer);
    } else {
      const resetTimer = setTimeout(() => {
        const fadeOutInterval = setInterval(() => {
          setFadeInOpacity(prev => {
            const newValue = prev - 0.1;
            if (newValue <= 0) {
              clearInterval(fadeOutInterval);
              setVisiblePrefix("");
              setVisibleSuffix("");
              setShowExt(false);
              return 0;
            }
            return newValue;
          });
        }, 50);
      }, 3000);

      return () => clearTimeout(resetTimer);
    }
  }, [visiblePrefix, visibleSuffix, showExt]);

  const charAnimation = {
    opacity: fadeInOpacity,
    transition: 'opacity 0.15s ease-in-out'
  };

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderRow}>
        <div className={styles.loaderText}>
          {[...visiblePrefix].map((char, index) => (
            <div
              key={`prefix-${index}`}
              className={styles.whiteText}
              style={index === visiblePrefix.length - 1 ? charAnimation : {}}
            >
              {char}
            </div>
          ))}
        </div>

        <div className={styles.loaderText}>
          {[...visibleSuffix].map((char, index) => (
            <div
              key={`suffix-${index}`}
              className={styles.blueText}
              style={index === visibleSuffix.length - 1 ? charAnimation : {}}
            >
              {char}
            </div>
          ))}
        </div>

        {showExt && (
          <div
            className={styles.extText}
            style={{ opacity: blinkExt }}
          >
            {domainExt}
          </div>
        )}
      </div>
    </div>
  );
}
