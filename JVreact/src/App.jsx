import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [contador, setContador] = useState(0);
  const [users, setUsers] = useState([]);

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []); //[] para que solo se ejecute una vez

  
  return (
    <div>
      <h1>My App</h1>
      <button onClick={resta}>-</button>
      <button onClick={reset}>Volver a 0</button>
      <button onClick={suma}>+</button>
      <h2>contador: {contador}</h2>
      {users.map((user) => {
        return <h3>{user.name}</h3>;
      })}
    </div>
  );
  
}

export default App


