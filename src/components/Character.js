import { Link } from 'react-router-dom';
import styles from './Character.module.css';

export default function Charcter({ id, imgSrc, name, description }) {
  return (
    <Link to={`/character/${id}`}>
      <div className={styles.character}>
        <img className={styles.char_img} src={imgSrc} alt="char thumbnail" />
        <div className={styles.char_name}>
          {name}
          <p>
            {description === ''
              ? 'Sorry, the description will be uploaded soon.'
              : description}
          </p>
        </div>
      </div>
    </Link>
  );
}
