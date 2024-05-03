import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function LastTweets(props) {

const time='time'

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <img className={styles.userLogo} src={`/${props.firstname}.png`} alt="Logo" />
        <p className={styles.Firstname}>{props.firstname}  </p>
        <p className={styles.Username}>@{props.username} - {time}</p>
      </div>
      <div className={styles.message}>{props.message}</div>
      <FontAwesomeIcon icon={faHeart} className={styles.like} />{props.nbLike}</div>
  );
}

export default LastTweets;
