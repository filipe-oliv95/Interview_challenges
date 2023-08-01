import { useState } from 'react'
import Bubble from './components/Bubble';
import axios from 'axios';
import './App.css'

function App() {
  const [positionClickList, setPositionClickList] = useState([]);
  
  const handleClick = async (event) => {
    const x = event.pageX;
    const y = event.pageY;
  
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const url = response.data[0].url;
      setPositionClickList((prevList) => [...prevList, { x, y, url }]);
    } catch (error) {
      console.error("Ocorreu um erro ao fazer a requisição: ", error);
    }
  }
  

  const handleRedo = (event) => {
    event.stopPropagation();
    setPositionClickList((prevList) => prevList.slice(0, prevList.length - 1));
  }

  const handleClear = (event) => {
    event.stopPropagation();
    setPositionClickList([]);
  }

  return (
    <div id="container" onClick={handleClick}>
        <h1>Clique em qualquer lugar...</h1>
        {positionClickList.length > 0 ? 
          <>
            <div className="btn-container">
              <button onClick={handleRedo} id="btn" className='btn-redo'>Apagar último</button>
              <button onClick={handleClear} id="btn" className='btn-clear'>Apagar todos</button>
            </div>
            <h1>Contador: {positionClickList.length}</h1>
          </> : ""}
        
        
        <>
          {positionClickList.map((position, index) => 
            <Bubble key={index} x={position.x} y={position.y} url={position.url} />
          )}
        </>
    </div>
  )
}

export default App;
