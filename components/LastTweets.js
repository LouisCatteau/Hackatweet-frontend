import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function LastTweets() {

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <img className={styles.userLogo} src='/instagram.png' alt="Logo" />
        <p className={styles.Firstname}>Instagram  </p>
        <p className={styles.Username}>@InstaLaResta - 5 hours</p>
      </div>
      <div className={styles.message}>Hello this is my first tweet !</div>
      <FontAwesomeIcon icon={faHeart} className="like" />   0</div>
  );
}

export default LastTweets;
