// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import styles from './Slider.module.css';

// import { EffectCards } from 'swiper/modules';

// export default function Slider() {
//   return (
//     <>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className={styles.swiper}
//       >
//         <SwiperSlide className={styles.swiperSlide}></SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}></SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}></SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from 'constants/projects';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import styles from './Slider.module.css';
import { FaHandPointRight } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { TbMailForward } from 'react-icons/tb';
import { PiTelegramLogo } from 'react-icons/pi';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

function Slider() {
  const projectSlides = projects.map(({ id, title, description, image }) => {
    return (
      <>
        <NavLink key={id} to={`/projects/${id}`} className={styles.link}>
          <SwiperSlide className={styles.swiperSlide}>
            {/* <div className={styles.swiperOne}> */}
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
            {/* </div> */}
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
          I'm looking for a Frontend Developer position with the opportunity of
          career growth and professional development. I want to become a part of
          a friendly team. I am a cheerful and very responsible person. I easily
          adapt to any conditions and learn quickly, I have creative and
          systematic thinking, initiative, attentive to details. I am interested
          in everything that surrounds me. From myself, I am ready to guarantee
          a full dedication to work.
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

export default Slider;

// import { NavLink } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/keyboard';
// import 'swiper/css/mousewheel';
// import styles from './Slider.module.css';

// import { EffectCoverflow, Pagination } from 'swiper/modules';

// import task from '../../images/Task.jpg';

// function Slider() {
//   return (
//     <main>
//       <div>
//         <span>Frontend developer</span>
//         <h1>Hanna Moiseienko</h1>
//         <hr />
//         <p>about me</p>
//         <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://drive.google.com/file/d/1xo2qCwIO2J_jzsiay5d2ZgGhaPc1Offq/view?usp=sharing"
//         >
//           download resume
//         </a>
//       </div>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 3,
//           slideShadows: true,
//         }}
//         keyboard={{ enabled: true }}
//         mousewheel={{ thresholdDelta: 70 }}
//         loop={true}
//         pagination={{
//           clickable: true,
//           el: '.swiper-pagination',
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//           },
//           768: {
//             slidesPerView: 1,
//           },
//           1024: {
//             slidesPerView: 2,
//           },
//           1560: {
//             slidesPerView: 3,
//           },
//         }}
//         modules={[EffectCoverflow, Pagination]}
//         className={styles.swiper}
//       >
//         <SwiperSlide className={styles.swiperSlide}>
//           <img
//             src={task}
//             alt="qwe"
//             width="100%"
//             height="auto"
//             className={styles.img}
//           />
//           <div className={styles.swiperOne}>
//             <div>
//               <h2>Daily task manager</h2>
//               <p>
//                 Daily Task Manager is a web application built with React,
//                 Emotion/Styled, and Redux Toolkit, among other technologies.
//                 Additionally, the app is responsive and can be used on different
//                 devices.
//               </p>
//               <NavLink to={'/projects'}>See more</NavLink>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>
//           <div class="swiper-slide swiper-slide--two">
//             <div>
//               <h2>Film</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
//                 dolores voluptatum temporibus praesentium, nesciunt sit deleniti
//                 autem magnam a expedita alias, ut vero, rem eum asperiores
//                 corporis aut suscipit corrupti?
//               </p>
//               <a href="#" target="_blank">
//                 see more
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>
//           <div class="swiper-slide swiper-slide--three">
//             <div>
//               <h2>SlimMom</h2>
//               <p>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
//                 debitis temporibus saepe ex distinctio omnis voluptates rerum
//                 culpa voluptatem harum, vero ducimus earum, odio qui maiores
//                 recusandae illo velit a?
//               </p>
//               <a href="#" target="_blank">
//                 see more
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>
//           <div class="swiper-slide swiper-slide--four">
//             <div>
//               <h2>Wallet</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
//                 itaque architecto praesentium eligendi, deserunt quasi, dolores
//                 nobis dolor quod ipsum sunt in non perspiciatis tempore quaerat
//                 eveniet eius porro atque?
//               </p>
//               <a href="#" target="_blank">
//                 see more
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>
//           <div class="swiper-slide swiper-slide--five">
//             <div>
//               <h2>qweqweqwe</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
//                 qui dicta sunt expedita enim excepturi a tenetur natus
//                 cupiditate, doloribus temporibus tempora eum eveniet vel,
//                 veritatis dolorum quae? Laboriosam, nemo!
//               </p>
//               <a href="#" target="_blank">
//                 see more
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <div class="swiper-pagination"></div>
//       </Swiper>
//     </main>
//   );
// }

// export default Slider;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './Slider.module.css';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from '../../images/Film.jpg';
// import slide_image_2 from '../../images/SlimMom.jpg';
// import slide_image_3 from '../../images/Task.jpg';
// import slide_image_4 from '../../images/Wallet.jpg';
// import slide_image_5 from '../../images/Film.jpg';
// import slide_image_6 from '../../images/SlimMom.jpg';
// import slide_image_7 from '../../images/Task.jpg';

// function Slider() {
//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default Slider;
