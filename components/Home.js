import styles from '../styles/Home.module.css';
import Trend from './Trend'
import LastTweets from './LastTweets'
import Tweet from './Tweet'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addTrendToStore, removeTrendFromStore } from '../reducers/trends';
import { addHashtag, removeHashtag } from '../reducers/hashtag';
import { logout } from '../reducers/user';

function Home() {
  const [message, setmessage] = useState('');
  const trends = useSelector((state) => state.trends.value);
  const [tweets, settweets] = useState([]);
  let allTweets = []
  const user = useSelector((state) => state.user.value);
  const router = useRouter()
 
  const dispatch = useDispatch();
  /*
   useEffect(() => {
  router.push('/login')
  }, []);  */


  const clickOnTrend = (trendName) => {
    const hashtagURL = `/hashtag/${trendName}`;
    const finalURL = hashtagURL.replace("#", "/");
    router.push('/hashtag');
    dispatch(addHashtag(trendName))
  };

  function searchHashtag(string) {
    const regex = /#\w+/g; 
    const matches = string.match(regex);

    if (matches) {
      for (let match of matches) {
        if (match) {
          dispatch(addTrendToStore(match))
      } else {
          return null; 
      }
      }
    }
  } 

  const trendsToDisplay = trends.map((trend, i) => {
    return <Trend key={i} name={trend.name} number={trend.number} clickOnTrend={clickOnTrend} />;
  });

  const handleLogOut = () => {
		dispatch(logout());
    router.push('/login') }

  useEffect(() => {
    fetch('http://localhost:3000/tweets/allTweets')
      .then(response => response.json())
      .then(data => {settweets(data.tweets)})
  }, []);

  useEffect(() => {
    for (let tweet of tweets) {
      searchHashtag(tweet.message);
    }
  }, [tweets])

  const sendTweet = () => {
    const date = Date.now()
    const tweet = { date: date, message: message, token: user.token }
    fetch('http://localhost:3000/tweets/newTweet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...tweet }),
    })
      .then(setmessage(''))
  };

  allTweets = tweets.map((e, i) => {
    return (<LastTweets key={i} message={e.message} date={e.date} nbLike={e.nbLike} username={e.username} firstname={e.firstname} isLiked />)
  })

  return (
    <div className={styles.main}>

      <div className={styles.leftBanner}>
        <img className={styles.logo} src='/logo-twitter.png' alt="Logo"/>
        <div className={styles.profile}>
          <div className={styles.user}>
            <img className={styles.userLogo} src={`/${user.firstname}.png`} alt="Logo" />
            <div>
              <p className={styles.Firstname}>{user.firstname}</p>
              <p className={styles.Username}>@{user.username}</p>
            </div>
          </div>
          <button className={styles.logout} onClick={() => handleLogOut()}>Logout</button>
        </div>
      </div>

      <div className={styles.content}>
          <div className={styles.sendTweet}>
            <h2 className={styles.h2}>Home</h2>
            <div className={styles.message}>
              <input className={styles.addMessage} onChange={(e) => setmessage(e.target.value)} value={message}></input>
              <div className={styles.button}>
                <span>{message.length} / 280 </span>
                <button className={styles.buttonSend} onClick={() => sendTweet()}>Tweet</button>
              </div>
            </div>
          </div>

        <div className={styles.tweetContainer}>
          {allTweets}
        </div>
      </div>

      <div className={styles.trends}>
        <h2 className={styles.h2} >Trends</h2>
        <div className={styles.trendsContainer}>
          {trendsToDisplay}
        </div>
      </div>
    </div>
  );
}
export default Home;
