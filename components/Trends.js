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

function Trends() {
  const [hashtag, setHashtag] = useState('');
  const [filteredTweets, setFilteredTweets] = useState([]);
  const trends = useSelector((state) => state.trends.value);
  const [tweets, settweets] = useState([]);
  let allTweets = []
  const user = useSelector((state) => state.user.value);
  const hashtagReducer = useSelector((state) => state.hashtag.value);
  const router = useRouter();
 
  const dispatch = useDispatch();

  const handleClickLogo = () => {
    router.push('/')
  };
  
  useEffect(() => {
    if (hashtag) {
      const filtered = tweets.filter(tweet => tweet.message.includes(hashtag));
      setFilteredTweets(filtered);
    } else {
      setFilteredTweets([]);
    }
  }, [hashtag, tweets]);

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
    return <Trend key={i} name={trend.name} number={trend.number} />;
  });

  useEffect(() => {
    fetch('http://localhost:3000/tweets/allTweets')
      .then(response => response.json())
      .then(data => {settweets(data.tweets)});
      setHashtag(hashtagReducer)
  }, []);

  useEffect(() => {
    for (let tweet of tweets) {
      searchHashtag(tweet.message);
    }
  }, [tweets])

  allTweets = tweets.map((e, i) => {
    return (<LastTweets key={i} message={e.message} date={e.date} nbLike={e.nbLike} username={e.username} firstname={e.firstname} />)
  })

  return (
    <div className={styles.main}>

      <div className={styles.leftBanner}>
        <img className={styles.logo} src='/logo-twitter.png' alt="Logo" onClick={handleClickLogo}/>
        <div className={styles.profile}>
          <div className={styles.user}>
            <img className={styles.userLogo} src={`/${user.firstname}.png`} alt="Logo" />
            <div>
              <p className={styles.Firstname}>{user.firstname}</p>
              <p className={styles.Username}>@{user.username}</p>
            </div>
          </div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>

      <div className={styles.content}>
          <div className={styles.sendTweet}>
            <h2 className={styles.h2}>Hashtag</h2>
            <div className={styles.message}>
              <input className={styles.addMessage} onChange={(e) => setHashtag(e.target.value)} value={hashtag}></input>
            </div>
          </div>

          <div className={styles.tweetContainer}>
          {filteredTweets.length > 0 ? (
            filteredTweets.map((tweet, index) => (
              <LastTweets
                key={index}
                message={tweet.message}
                date={tweet.date}
                nbLike={tweet.nbLike}
                username={tweet.username}
                firstname={tweet.firstname}
              />
            ))
          ) : (
            <p>No tweets found with {hashtag}</p>
          )}
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

export default Trends;
