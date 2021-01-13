import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';
import {useState} from 'react';

function App() {
  const [colorList, setColorList] = useState([]);
  const addColor = newEntry => {
    setColorList([...colorList, newEntry])
  }
  return (
    <div className="App">
    <Form newColor={addColor}/>
    <Results allColors={colorList}/>
    </div>
  );
}

export default App;
