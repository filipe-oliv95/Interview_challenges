import { useState } from 'react'
import Bubble from './components/Bubble';
import './App.css'

function App() {
  const [positionClickList, setPositionClickList] = useState([]);
  
  const handleClick = (event) => {
    const x = event.pageX;
    const y = event.pageY;
    setPositionClickList((prevList) => [...prevList, { x, y }]);
  }

  const handleRedo = (event) => {
    event.stopPropagation();
    setPositionClickList((prevList) => prevList.slice(0, prevList.length - 1));
  }

  return (
    <div id="container" onClick={handleClick}>
      <button onClick={handleRedo} className='btn-redo'>redo</button>
      {positionClickList.map((position, index) => 
        <Bubble key={index} x={position.x} y={position.y} number={index + 1}/>
      )}
    </div>
  )
}

export default App;
