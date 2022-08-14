import styles from './Hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Hero({
  imgName,
  title,
  subtitleList,
  isHome,
  backgroundPosition = 'center',
  imgPath="landing-hero3.png",
  imgwidth,
}) {
  const [isLoad, setIsLoad] = useState('none');
  const [path,setpath] = useState(imgPath)
  useEffect(() => {
    setTimeout(() => {
      setIsLoad('');
      imgwidth=window.innerWidth;
      console.log("dd",imgwidth);
      if(imgwidth<600) setpath("landing-hero4.png");
      console.log(imgPath)
    }, 2000);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)), url("static/images/hero/${path}")`,
          backgroundPosition: backgroundPosition,
        }}
        className={styles.hero}
      >
        <div className={styles.heroHead}>{title}</div>
        <div className={styles.heroSub}>
          {subtitleList.map((heroTag, index) => {
            return subtitleList.length !== index + 1 ? (
              <span key={`hero_${index}`}>
                {heroTag}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
              </span>
            ) : (
              <span key={`hero_${index}`}>{heroTag}</span>
            );
          })}
        </div>
        <a href='#is'>
          <div className={styles.scrollIndicator}></div>
        </a>
        {isHome && (
          <a
            href='#notifs'
            className={styles.notif}
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faBell} />
          </a>
        )}
      </div>
      {isHome && (
        <div className={styles.is} id='is'>
          <div
            style={{
              backgroundImage: `linear-gradient(#00000081, #00000081),
		url("/static/images/ideate.png")`,
            }}
            className={styles.caption}
          >
            <div className={styles.captionHead}>Ideate</div>
            <div className={styles.captionSub}>
              Changing the world, one solution at a time.
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(#00000098, #00000098),
		url("/static/images/innovate.png")`,
            }}
            className={styles.caption}
          >
            <div className={styles.captionHead}>Innovate</div>
            <div className={styles.captionSub}>
              Creativity is thinking up new things. Innovation is doing new
              things.
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(#00000081, #00000081),
		url("/static/images/inspire.png")`,
            }}
            className={styles.caption}
          >
            <div className={styles.captionHead}>Inspire</div>
            <div className={styles.captionSub}>
              Don't inspire by being perfect, inspire by embracing your
              imperfections.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
