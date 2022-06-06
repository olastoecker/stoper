import Button from './components/Button/Button';
import React, {useEffect, useState} from "react";
import Timer from './components/Timer/Timer';



const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if(start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [start]);

  return (

    <div>
      <Timer time={time} />
      <Button action={() => setStart(true)}>Start</Button>
      <Button action={() => setStart(false)}>Stop</Button>
      <Button action={() => {setTime(0); setStart(false);}}>Reset</Button>
    </div>  
  );

}

export default App;