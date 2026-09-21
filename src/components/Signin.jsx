
import React from 'react';

import styles from './Signin.module.css';

import recuriter from '../assets/images/recuiter.jpeg';
import Deve from '../assets/images/Developer.jpeg';
import Stalk from '../assets/images/stalker.jpeg';
import advent from '../assets/images/Adventurer.jpeg';

import { Link, useNavigate } from 'react-router-dom';

function Signin() {

  const navigate = useNavigate();

  const handleProfileClick = (role) => {
    navigate('/home', {
      state: {
        role: role
      }
    });
  };

  return (

    <div className={styles.container} id="signin">

      <h1 style={{"font-size": "3em", "margin-bottom": "50px"}}>
        Who's Watching?
      </h1>

      <div className={styles.profiles}>

        <div
          className={styles.profile}
          onClick={() => handleProfileClick('recruiter')}
        >
          <Link to="/home" onClick={(e) => e.preventDefault()}>
            <img src={recuriter} alt="Recruiter" />
          </Link>

          <p>Recruiter</p>
        </div>


        <div
          className={styles.profile}
          onClick={() => handleProfileClick('developer')}
        >
          <Link to="/home" onClick={(e) => e.preventDefault()}>
            <img src={Deve} alt="Developer" />
          </Link>

          <p>Developer</p>
        </div>


        <div
          className={styles.profile}
          onClick={() => handleProfileClick('stalker')}
        >
          <Link to="/home" onClick={(e) => e.preventDefault()}>
            <img src={Stalk} alt="Stalker" />
          </Link>

          <p>Stalker</p>
        </div>


        <div
          className={styles.profile}
          onClick={() => handleProfileClick('explorer')}
        >
          <Link to="/home" onClick={(e) => e.preventDefault()}>
            <img src={advent} alt="Explorer" />
          </Link>

          <p>Explorer</p>
        </div>

      </div>

    </div>
  );
}

export default Signin;