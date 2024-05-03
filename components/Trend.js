import styles from '../styles/Trend.module.css';

function Trend(props) {
  
  const handleTrendClick = () => {
    props.clickOnTrend(props.name)
  }

  return (
    <>
      <div className={styles.main} onClick={handleTrendClick}>
        <h3 className={styles.h3}>{props.name}</h3>
        <p className={styles.p}>{props.number} Tweet</p>
      </div> 
    </>
  );
}

export default Trend;
