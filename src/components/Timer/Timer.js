import styles from './Timer.module.scss';


const Timer = ({ time }) => {
  
  return(
    <div className={styles.time}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  )};
export default Timer;



// import styles from './Stopwatch.module.scss';
// import React, { useState, useEffect } from 'react';


// const Timer = () => {
//   const [time, setTime] = useState(0);
//   const [start, setStart] = useState(null);
//   useEffect(() => {
//     let interval;
//     if (start) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 10);
//       }, 10);
//     } else if (!start) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [start]);
//   return (
//     <div className={styles.stopwatch}>
//       <div className="numbers">
//         <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
//         <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
//         <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
//       </div>
// //       <div className={styles.button}>
// //         <button onClick={() => setStart(true)}>Start</button>
// //         <button onClick={() => setStart(false)}>Stop</button>
// //         <button onClick={() => setTime(0)}>Reset</button>       
// //       </div>
// //     </div>
// //   );
// // };

// export default Timer;
