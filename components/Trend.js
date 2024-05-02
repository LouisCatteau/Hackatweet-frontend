import styles from '../styles/Trend.module.css';


function Trend() {


  return (
    <>
    <div className={styles.main}>
      <h3 className={styles.h3}>#first</h3>
      <p className={styles.p}>1 Tweet</p>
    </div>
    <div className={styles.main}>
      <h3 className={styles.h3}>#second</h3>
      <p className={styles.p}>1 Tweet</p>
    </div>
    <div className={styles.main}>
      <h3 className={styles.h3}>#third</h3>
      <p className={styles.p}>1 Tweet</p>
    </div>
    
    </>
  );
}

export default Trend;
