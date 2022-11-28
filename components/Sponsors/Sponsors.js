import styles from './Sponsors.module.scss';
import Hero from '../Hero/Hero';
import {
  diamondSponsors,
  goldSponsors,
  silverSponsors,
  levelImages,
  sponsorsText_1,
  sponsorsText_2,
  sponsorsSubText,
} from '../../data/sponsors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLink,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { faOpencart, faOpenid } from '@fortawesome/free-brands-svg-icons';
import useWindowSize from '../../utils/ResizeHook';
import { useEffect, useState } from 'react';

const Sponsors = () => {
  const [mobileView, setMobileView] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 780) {
      setMobileView(false);
    } else {
      // navbar.style.clipPath = "circle(15% at 100% 0%)";
      setMobileView(true);
    }
  }, [size]);

  return (
    <>
      <Hero
        imgName={'sponsors-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Sponsors us</>}
        subtitleList={[
          'Our sponsors helps us maintain our legacy of excellence',
        ]}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <h1>Why Sponsor Us ?</h1>
          <p>{sponsorsText_1}</p>
          {mobileView ? (
            <button
              className={styles.more}
              onClick={() => setMobileView(false)}
            >
              read more{' '}
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </button>
          ) : (
            <>
              <p>{sponsorsText_2}</p>
              {size.width < 780 ? (
                <button
                  className={styles.more}
                  onClick={() => setMobileView(true)}
                >
                  Read Less{' '}
                  <span>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </span>
                </button>
              ) : (
                <></>
              )}
            </>
          )}
          <p>
            <b>{sponsorsSubText}</b>
          </p>
          {/* <a
            href='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf'
            target={'_blank'}
            download={'brochure'}
            
          >
            <button disabled={"true"}>
              Brochure{' '}
              <span>
                <FontAwesomeIcon icon={faExternalLink} />
              </span>
            </button>
          </a> */}
          <h1>Sponsors</h1>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[0]}`}
            alt=''
            className={styles.levelImage}
            key={`level_1`}
          ></img>
          <div className={styles.reachGroup}>
            {diamondSponsors.map((item, idx) => {
              return (
                <a href={item.link}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.diamondImg}
                    key={`alumni_reach_${idx}`}
                  ></img>
                </a>
              );
            })}
          </div>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[1]}`}
            alt=''
            className={styles.levelImage}
            key={`level_1`}
          ></img>
          <div className={styles.reachGroup}>
            {goldSponsors.map((item, idx) => {
              return (
                <a href={item.link}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.goldImg}
                    key={`alumni_reach_${idx}`}
                  ></img>
                </a>
              );
            })}
          </div>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[2]}`}
            alt=''
            className={styles.levelImage}
            key={`level_1`}
          ></img>
          <div className={styles.reachGroup}>
            {silverSponsors.map((item, idx) => {
              return (
                <a href={item.link}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.silverImg}
                    key={`alumni_reach_${idx}`}
                  ></img>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;