import './App.css';
import Dice from "./components/Dice"
import DiceRoller from './components/DiceRoller'

import React, {useState} from "react";
import DiceHistory from './components/DiceHistory';


function App() {
  const [roll, setRoll] = useState(null);
  const [rolls, setRolls] = useState([]);

  function handleRoll(num){
    console.log(num, "rolled");
    setRoll(num);

    const nextRolls = [...rolls, num];
    setRolls(nextRolls);

    // const array = [...rolls];
    // array.push(num);
    // setRolls(array);
  }

  return (
    <div>
      {/* <p>hello from the App</p> */}
      <DiceRoller onRoll={handleRoll}/>
      {roll && <Dice roll={roll}/>}
      <DiceHistory rolls={rolls}/>
    </div>
  );
}

export default App;
