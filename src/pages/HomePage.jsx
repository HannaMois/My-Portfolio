import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from 'constants/projects';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

import styles from './HomePage.module.css';

import { FaHandPointRight } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { TbMailForward } from 'react-icons/tb';
import { PiTelegramLogo } from 'react-icons/pi';

function HomePage() {
  const projectSlides = projects.map(({ id, title, description, image }) => {
    return (
      <>
        <NavLink key={id} to={`/projects/${id}`} className={styles.link}>
          <SwiperSlide className={styles.swiperSlide}>
            <div>
              <h2>{title}</h2>
              <img
                src={image}
                alt="qwe"
                width="100%"
                height="auto"
                className={styles.image}
              />
              {/* <p>{description}</p> */}
              <NavLink key={id} to={`/projects/${id}`} className={styles.link}>
                See more
              </NavLink>
            </div>
          </SwiperSlide>
        </NavLink>
      </>
    );
  });

  return (
    <main>
      <div className={styles.box}>
        <span>Frontend developer</span>
        <h1>Hanna Moiseienko</h1>
        <hr />
        <p>
          My main goals are acquiring new skills and professional development. I
          am a hard-working person, so I am ready to spend a lot of time
          learning new things and doing work. Every created project is my
          motivation. I am not scared of new tasks and always finish anything I
          start.
        </p>
        <div className={styles.social}>
          <h2>
            Let's talk <FaHandPointRight />
          </h2>
          <a
            href="mailto: hannamois135@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <TbMailForward size="30px" color="#005baa" />
          </a>
          <a
            href="https://www.linkedin.com/in/hanna-moiseienko/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size="30px" color="#005baa" />
          </a>

          <a
            href="https://t.me/MoiseienkoHanna"
            target="_blank"
            rel="noreferrer"
          >
            <PiTelegramLogo size="30px" color="#005baa" />
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1xo2qCwIO2J_jzsiay5d2ZgGhaPc1Offq/view?usp=sharing"
          className={styles.link}
        >
          download resume
        </a>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        speed={1000}
        // slidesPerGroup={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {projectSlides}
        {projectSlides}
        {projectSlides}
        {projectSlides}
        <div class="swiper-pagination"></div>
      </Swiper>
    </main>
  );
}

export default HomePage;
