import styles from '../styles/Home.module.css';
import Trend from './Trend'
import LastTweets from './LastTweets'
import Tweet from './Tweet'
import Image from 'next/image';
import { useState } from 'react';


function Home() {
  const [message, setmessage] = useState('');
  return (
    <div className={styles.main}>

      <div className={styles.leftBanner}>
        <img className={styles.logo} src='/logo-twitter.png' alt="Logo"/>
        <div className={styles.profile}>
          <div className={styles.user}>
            <img className={styles.userLogo} src='/youtube.png' alt="Logo"/>
            <div>
              <p className={styles.Firstname}>Youtube</p>
              <p className={styles.Username}>@SimplyTheBest</p>
            </div>
          </div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.sendTweet}>
          <h2 className={styles.h2}>Home</h2>
          <div className={styles.message}>
            <input className={styles.addMessage} onChange={(e) => setmessage(e.target.value)} value={message}></input>
            <div className={styles.button}>
              <span>{message.length} / 280 </span>
              <button className={styles.buttonSend}>Tweet</button>
            </div>
          </div>
        </div>
        <div className={styles.tweetContainer}>
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />
          <LastTweets />

        </div>
      </div>

      <div className={styles.trends}>
        <h2 className={styles.h2} >Trends</h2>
        <div className={styles.trendsConatainer}>
          <Trend />
        </div>
      </div>
    </div>
  );
}

export default Home;
