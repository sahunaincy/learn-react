import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'


function App() {
  let [counter, setCounter] = useState(15);//useState se humko do chij milte hai array kai form mai 1.counter 2.function

  const addvalue = function () {
    //console.log("clicked ", counter);
    //counter = counter + 1;
    if (counter < 20) {
      {/* setCounter(counter + 1); useState kya karte hai bacho mai kam karte hai 
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1); ak ak he update hoga*/}
      setCounter(precounter => precounter + 1);//isme humko callback milte hai
      setCounter(precounter => precounter + 1);
      setCounter(precounter => precounter + 1);
      setCounter(precounter => precounter + 1);
    }
  };
  const removevalue = function () {
    //setCounter(counter-1);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>hello naincy , UI updation ki react handle karte hai</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>Add value </button>
      <br />
      <button onClick={removevalue}>remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
