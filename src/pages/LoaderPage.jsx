import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from './LoaderPage.module.css';

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
  //       return <Navigate to="/projects" />;
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
        <NavLink to="/home" id="abort" className={styles.abort}>
          GO TO SITE
        </NavLink>
      </div>
      <div id="turn-off"></div>
      {/* <div id="closing"></div> */}

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
