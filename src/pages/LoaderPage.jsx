import React, { useState, useEffect } from 'react';
import { NavLink, Navigate } from 'react-router-dom';

import styles from './LoaderPage.module.css';

function Activate() {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(5);
  const [panelVisible, setPanelVisible] = useState(false);
  const [coverOpened, setCoverOpened] = useState(false);
  const [theCount, setTheCount] = useState(null);

  const toggleActivation = () => {
    if (!isActive) {
      setIsActive(false);

      setCount(5);
      setPanelVisible(true);
      setCoverOpened(false);

      const countInterval = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
      setTheCount(countInterval);
    } else {
      setIsActive(true);

      setCount(5);
      clearInterval(theCount);
      setPanelVisible(false);
      setCoverOpened(true);
    }
  };

  useEffect(() => {
    if (count === 0) {
      clearInterval(theCount);
      setPanelVisible(true);
    }
  }, [count, theCount]);

  if (count === 0) {
    return <Navigate to="/home" />;
  }

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
        <NavLink to="/home" id="abort" className={styles.abort}>
          GO TO SITE
        </NavLink>
      </div>
      <div id="turn-off"></div>
    </div>
  );
}

export default Activate;
