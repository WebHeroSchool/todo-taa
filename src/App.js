import logo from './logo.svg';
import './App.css';

// вывод объекта style:
const parStyle = {
  backgroundColor: 'red',
  fontSize: '2em',
}

// вывод значения переменной:
const parText = 'my first react app';

// вывод результата логической операции:
const bool = () => {
  if(true) {
    return 'будет выведена в разметку';
  } return 'НЕ будет выведена в разметку';
}

// пример с тернарным оператором:
const isAuth = false;

// примеры undefined, null, false и true:
function UserGreeting(props) {
  return 'С возвращением!';
}

function GuestGreeting(props) {
  return 'Войдите, пожалуйста.';
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } return <GuestGreeting />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style ={parStyle}>
          {parText}
        </p>
        <p>
          Пример вывода числа в разметку: {42}
        </p>
        <p>
          Два плюс два, будет {2 + 2}
        </p>
        <p>
          Логическая операция которая {bool()}
        </p>
        <p>
          Пример использования тернарного оператора:
          <br/>
          Пользователь {isAuth ? 'авторизован' : 'НЕ авторизован'} на сайте
        </p>
        <h2>Примеры undefined, null, false и true</h2>
        <h3>TRUE: <Greeting isLoggedIn={true} /></h3>
        <h3>FALSE: <Greeting isLoggedIn={false} /></h3>
        <h3>NULL: <Greeting isLoggedIn={null} /></h3>
        <h3>UNDEFINED: <Greeting isLoggedIn={undefined} /></h3>
      </header>
    </div>
  );
}

export default App;
