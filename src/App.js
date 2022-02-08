import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';
import Camera from 'react-snap-pic';
import Header from './Header';
import NamePicker from './NamePicker';
import Message from './Message';

// useState creates a variable called messages //
// setMessages is a function that updates the message//


function App() {
  let [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  let [username, setUsername] = useState('');
// "sendMessage" runs whenever we click the send button
  function sendMessage(text) {
    if (!text.trim()) return;
    // we'll create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
  // set the "messages" to be a new array
  // that contains the new message + all the old messages
    setMessages([newMessage, ...messages]);
  }


  console.log(messages);
 
  // function that adds camera to messages
  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }
  // loops through messages //
  return (
    <div className="App">
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
        {/* the NamePicker */}
        <NamePicker setUsername={setUsername} />
      </header>
      <div className ='messages'> 
        {messages.map((msg,i)=>{
          return <Message {...msg} key={i} fromMe={msg.user === username} />;
        })}
      </div>

      <TextInput sendMessage={sendMessage} 
        showCamera={()=>setShowCamera(true)}
      />
     </div>
     
  );
}

export default App;