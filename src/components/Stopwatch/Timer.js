import styles from './Timer.module.scss';


const Timer = ({ time }) => {
  
        return(
            <div className={styles.time}>
              {("0" + Math.floor(time / 3600000) % 24).slice(-2)}
              {("0" + Math.floor(time / 60000) % 60).slice(-2)}
              {("0" + Math.floor(time / 1000) % 60).slice(-2)}
              {("0" + (time / 10) % 100).slice(-2)}
            </div>
        )};

export default Timer;