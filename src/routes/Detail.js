import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [tab, setTab] = useState('소개');
  const { id } = useParams();

  const getData = async () => {
    await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    )
      .json()
      .then((json) => {
        setInfo(json.data.results[0]);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const onSelectTab = (e) => {
    setTab(e.target.innerText);
  };

  console.log(info);
  return (
    <>
      {!loading && (
        <div className={styles.container}>
          <Link to={'/'}>
            <span className={styles.backBtn}>{'<'}</span>
          </Link>
          <div className={styles.upper}>
            <img
              src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
              alt="thumbnail"
              className={styles.thumbnail_img}
            />
            <h1>{info.name}</h1>
          </div>
          <div className={styles.tabBtnContainer}>
            <span onClick={onSelectTab} className={styles.tabBtn}>
              소개
            </span>
            <span onClick={onSelectTab} className={styles.tabBtn}>
              코믹스
            </span>
            <span onClick={onSelectTab} className={styles.tabBtn}>
              시리즈
            </span>
          </div>
          <div className={styles.tabBox}>
            {tab === '소개' && (
              <>
                {info.description === '' ? (
                  <p>"Sorry, there's no description"</p>
                ) : (
                  info.description
                )}
              </>
            )}
            {tab === '코믹스' && (
              <>
                {info.comics.items.map((item) => {
                  return <p>{item.name}</p>;
                })}
              </>
            )}
            {tab === '시리즈' && (
              <>
                {info.series.items.map((item) => {
                  return <p>{item.name}</p>;
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
