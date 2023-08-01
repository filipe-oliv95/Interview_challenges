import { useState } from 'react'
import Bubble from './components/Bubble';
import axios from 'axios';
import './App.css'

function App() {
  const [positionClickList, setPositionClickList] = useState([]);
  
  const handleClick = (event) => {
    const x = event.pageX;
    const y = event.pageY;

    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
      const url = response.data[0].url;
      setPositionClickList((prevList) => [...prevList, { x, y, url }]);
    })
    .catch(error => {
      console.error("Ocorreu um erro ao fazer a requisição: ", error);
    });
  }

  const handleRedo = (event) => {
    event.stopPropagation();
    setPositionClickList((prevList) => prevList.slice(0, prevList.length - 1));
  }

  return (
    <div id="container" onClick={handleClick}>
        <>
          {positionClickList.map((position, index) => 
            <Bubble key={index} x={position.x} y={position.y} url={position.url} />
          )}
        </>
      <button onClick={handleRedo} className='btn-redo'>redo</button>
    </div>
  )
}

export default App;
