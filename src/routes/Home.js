import { useEffect, useState } from 'react';
import Charcter from '../components/Character';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <div className={styles.loader}>Loading...</div>}
      <div className={styles.movies}>
        {!loading &&
          characters.map((character) => {
            return (
              <Charcter
                key={character.id}
                id={character.id}
                imgSrc={`${character.thumbnail.path}.jpg`}
                name={character.name}
                description={character.description}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
