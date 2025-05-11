import { useState } from "react";
import styles from "./Slider.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function Slider({img}) {
const images = [img, img, img];




  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.mainImageWrapper}>
        <button onClick={prevImage} className={styles.arrow}>
          <ChevronLeft />
        </button>

        <img
          src={`/${images[currentIndex]}`}
          alt={`Slide ${currentIndex}`}
          className={styles.mainImage}
        />

        <button onClick={nextImage} className={styles.arrow}>
          <ChevronRight />
        </button>
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={`/${images[currentIndex]}`}
            alt={`Thumb ${index}`}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
