import logo from './logo.svg';
import './App.css';
import react from 'react';
import TextInput from "./TextInput";
import {useState} from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(msg) {
    setMessages([...messages,msg]);
  }
  console.log(messages)
  return (
    <div className="App">
      <header className = "header">
        <img className = "logo"/>
        <span className= "title"> Chatter!</span>
      </header>
      <div className = "messages"> 
        {messages.map((msg)=> {
          return <div className = "message" > {msg} </div>;

        })}
       </div>
      <TextInput sendMessage={sendMessage} size="50"/>
    </div>
  );
}

export default App;
