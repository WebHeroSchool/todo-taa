import './App.css';
import { count, length } from './modules/number.js';

// вывод объекта style:
const parStyle = {
  backgroundColor: 'red',
  fontSize: '2em',
}
// вывод значения переменной:
const parText = 'my first react app';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style ={parStyle}>
          {parText}
        </p>
        <p>
          Произведение count * length = {count * length}
        </p>
      </header>
    </div>
  );
}

export default App;
