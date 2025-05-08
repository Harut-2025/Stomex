import { useState } from 'react';
import { Heart } from 'lucide-react';
import styles from './FavoritButton.module.scss'

export default function FavoritButton({onClick, isFavorited}) {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
    if(onClick){
        onClick()
    }
  };

  return (
    <div className={styles.favoritecontainer}>
      <button
        onClick={handleClick}
        className={styles.favoritebutton}
        aria-label="Toggle heart"
      >
        <Heart
          size={32}
          color={isFavorited ? "red" : "gray"}
          fill={isFavorited ? "red" : "none"}
        />
      </button>
    </div>
  );
}
