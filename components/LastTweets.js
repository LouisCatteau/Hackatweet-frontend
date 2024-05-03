import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function LastTweets(props) {
  const user = useSelector((state) => state.user.value);
  let time = new Date(props.date)
  let timeSpent = ""
  let trash = ""

  let start = Date.now()
  let number = (start - time)

  if (number < 60000) {
    timeSpent = 'a few seconds';
  }
  else if (number > 60000 && number < 3600000) {
    const i = Math.round(number / 60000)
    timeSpent = `${i} minutes`
  }
  else if (number > 3600000 && number < 86400000) {
    const i = Math.round(number / 3600000)
    timeSpent = `${i} heures`
  }
  else if (number > 86400000) {
    const i = Math.round(number / 3600000)
    timeSpent = `${i} jours`
  }


<<<<<<< HEAD
  console.log(props.tweetId)
  const deleteTweet =()=>{
=======
  const deleteTweet = () => {
>>>>>>> fa3e8e6eb7098da121db167b88b3d86b13dc946d
    fetch('http://localhost:3000/tweets/removeTweet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: props.date }),
    })
      .then(() => props.refreshTweets())
  }

  const likeTweet =() => {
    fetch('http://localhost:3000/tweets/addLike', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { tweetId : props.tweetId , token : user.token}),
    })
    .then (response=>response.json())
    .then( () => { props.refreshTweets()

    })


  }

  if (user.username === props.username) {
    trash = <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={() => deleteTweet()} />
  }

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <img className={styles.userLogo} src={`/${props.firstname}.png`} alt="Logo" />
        <p className={styles.Firstname}>{props.firstname}  </p>
        <p className={styles.Username}>@{props.username} - {timeSpent}</p>
      </div>
      <div className={styles.message}>{props.message}</div>
      <FontAwesomeIcon icon={faHeart} className={styles.like} onClick={() => likeTweet()} />{props.nbLike.length}
      {trash}
    </div>
  );
}

export default LastTweets;
