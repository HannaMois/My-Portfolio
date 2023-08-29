import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
import { NavLink } from 'react-router-dom';

import styles from './Loader.module.css';

function Loader() {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [count, setCount] = useState(9);
  const [panelVisible, setPanelVisible] = useState(false);
  const [coverOpened, setCoverOpened] = useState(false);
  const [alarmSound, setAlarmSound] = useState(null);
  const [theCount, setTheCount] = useState(null);
  //   const [toHome, setToHome] = useState(false);

  //   const Redirect = () => {
  //     if (toHome === true) {
  //       return <Navigate to="/home" />;
  //     }
  //   };

  const toggleActivation = () => {
    if (!isActive) {
      setIsActive(false);
      setIsMuted(false);
      setCount(9);
      setPanelVisible(true);
      setCoverOpened(false);
      const alarm = new Audio(
        'https://cdn.josetxu.com/audio/self-destruct-count.mp3'
      );
      alarm.volume = 0.5;
      setAlarmSound(alarm);
      alarm.play();

      const countInterval = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
      setTheCount(countInterval);
    } else {
      setIsActive(true);
      setIsMuted(true);
      setCount(9);
      clearInterval(theCount);
      setPanelVisible(false);
      setCoverOpened(true);
      alarmSound.pause();
      alarmSound.currentTime = 9;
    }
  };

  useEffect(() => {
    if (count === 0) {
      clearInterval(theCount);
      setPanelVisible(true);
    }
  }, [count, theCount]);

  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
    if (alarmSound) {
      alarmSound.muted = !alarmSound.muted;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.warning}></div>
      <div className={styles.base}>
        <button
          id="activate"
          className={isActive ? styles.pushed : ''}
          onClick={toggleActivation}
        >
          <span></span>
        </button>
      </div>
      <div
        className={`${styles.box} ${coverOpened ? styles.opened : ''}`}
        onClick={() => setCoverOpened(!coverOpened)}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
        <span></span>
      </div>
      <div className={styles.hinges}></div>

      <div className={styles.text}>START DOWNLOAD</div>

      <div id="panel" className={panelVisible ? styles.show : ''}>
        <div id="msg">LOADING IN PROGRESS</div>
        <div id="time" className={count === 0 ? styles.crono : ''}>
          {count.toString().padStart(1, '0')}
        </div>
        {/* <span id="abort" className={styles.abort} onClick={toggleActivation}>
         */}
        {/* <span id="abort" className={styles.abort} onClick={Redirect}>
          GO TO SITE
        </span> */}
        <NavLink to="/" id="abort" className={styles.abort}>
          GO TO SITE
        </NavLink>
      </div>
      <div id="turn-off"></div>
      <div id="closing"></div>

      <div
        id="mute"
        className={`${styles.mute} ${isMuted ? styles.muted : ''}`}
        onClick={toggleMute}
      ></div>
      <audio id="alarm">
        <source
          src="https://cdn.josetxu.com/audio/self-destruct-count.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default Loader;

// function Loader() {
//   const [count, setCount] = useState(9);
//   const [isActive, setIsActive] = useState(false);
//   const [isPanelVisible, setIsPanelVisible] = useState(false);
//   const [isCoverOpened, setIsCoverOpened] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);

//   const [alarmSound, setAlarmSound] = useState(null);

//   let theCount;

//   useEffect(() => {
//     if (count === 0) {
//       clearInterval(theCount);
//       setIsPanelVisible(false);
//       setIsCoverOpened(false);
//       setIsActive(false);
//       setIsMuted(true);
//     }
//   }, [count, theCount]);

//   const startCountdown = () => {
//     setIsActive(true);
//     setIsPanelVisible(true);
//     theCount = setInterval(() => setCount(prevCount => prevCount - 1), 1000);
//   };

//   const abortCountdown = () => {
//     clearInterval(theCount);
//     setIsPanelVisible(false);
//     setCount(9);
//   };

//   const restart = () => {
//     setIsPanelVisible(false);
//     setIsCoverOpened(false);
//     // Сброс других состояний
//   };

//   const toggleCover = () => {
//     setIsCoverOpened(prevOpened => !prevOpened);
//   };

//   const toggleActivation = () => {
//     if (!isActive) {
//       // Активация
//       setIsActive(true);
//       setIsMuted(false); // Включение звука
//       setCount(9); // Устанавливаем начальное значение счетчика
//       setPanelVisible(true); // Отображаем панель
//       setCoverOpened(false); // Закрываем "крышку"
//       const alarm = new Audio(
//         'https://cdn.josetxu.com/audio/self-destruct-count.mp3'
//       );
//       alarm.volume = 0.5;
//       setAlarmSound(alarm); // Сохраняем объект звука в состоянии
//       alarm.play();
//       const countInterval = setInterval(() => {
//         setCount(prevCount => prevCount - 1);
//       }, 1000);
//       setTheCount(countInterval); // Сохраняем интервал в состоянии
//     } else {
//       // Деактивация
//       setIsActive(false);
//       setIsMuted(true); // Отключение звука
//       setCount(9); // Сбрасываем счетчик
//       clearInterval(theCount);
//       setPanelVisible(false); // Скрываем панель
//       setCoverOpened(false); // Закрываем "крышку"
//       alarmSound.pause();
//       alarmSound.currentTime = 10;
//       setReloadVisible(true); // Отображаем кнопку перезагрузки
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.warning}></div>

//       <div className={styles.base}>
//         <button
//           id="activate"
//           onClick={() => {
//             toggleActivation();
//             startCountdown();
//           }}
//           className={isActive ? styles.pushed : ''}
//         >
//           <span></span>
//         </button>
//       </div>

//       <div
//         className={`${styles.box_opened} ${isCoverOpened ? styles.opened : ''}`}
//         id="cover"
//         onClick={toggleCover}
//       >
//         <div className={styles.div1}></div>
//         <div className={styles.div2}></div>
//         <div className={styles.div3}></div>
//         <div className={styles.div4}></div>
//         <div className={styles.div5}></div>
//         <div className={styles.div6}></div>
//         <span></span>
//         <span></span>
//       </div>

//       <div className={styles.hinges}></div>

//       <div className={styles.text}>START DOWNLOAD</div>

//       {isPanelVisible && (
//         <div id="panel">
//           <div id="msg">LOADING IN PROGRESS</div>
//           <div id="time">9</div>
//           <span id="abort"></span>
//           <span id="detonate">START</span>
//         </div>
//       )}
//       <div id="turn-off"></div>
//       <div id="closing"></div>

//       <div id="restart">
//         <button id="reload"></button>
//       </div>

//       <div id="mute"></div>

//       <audio id="alarm">
//         <source
//           src="https://cdn.josetxu.com/audio/self-destruct-count.mp3"
//           type="audio/mpeg"
//         />
//       </audio>
//     </div>
//   );
// }

// export default Loader;

// const Loader = () => {

//   return (
//     <div className={styles.container}>
//       <div className={styles.warning}></div>

//       <div className={styles.base}>
//         {/* <button id="activate"> */}
//         <button id="activate">
//           <span></span>
//         </button>
//       </div>

//       <div className={styles.box_opened} id="cover">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <span></span>
//         <span></span>
//       </div>

//       <div className={styles.hinges}></div>

//       <div className={styles.text}>START DOWNLOAD</div>

//       <div id="panel">
//         <div id="msg">LOADING IN PROGRESS</div>
//         <div id="time">9</div>
//         <span id="abort">ABORT</span>
//         <span id="detonate">START</span>
//       </div>

//       <div id="turn-off"></div>
//       <div id="closing"></div>

//       <div id="restart">
//         <button id="reload"></button>
//       </div>

//       <div id="mute"></div>

//       <audio id="alarm">
//         <source
//           src="https://cdn.josetxu.com/audio/self-destruct-count.mp3"
//           type="audio/mpeg"
//         />
//       </audio>
//     </div>
//   );
// };
// export default Loader;
