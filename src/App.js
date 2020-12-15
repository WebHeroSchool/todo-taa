const App = () => {
  return (<div>
    <Title/>
    <ItemList/>
  </div>);
}

const Title = () => {
  return (<div>
    <h2>Композиция компонентов</h2>
    <p>Список элементов:</p>
  </div>);
}

const ItemList = () => {
  return (<ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 2</li>
    <li>Пункт 4</li>
  </ul>);
}

export default App;
