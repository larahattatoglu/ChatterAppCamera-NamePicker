import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';
import Camera from 'react-snap-pic';
import Header from './Header';

// useState creates a variable called messages //
// setMessages is a function that updates the message//


  function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  function sendMessage(msg) {
    console.log(msg);
    setMessages([msg, ...messages]);
  }

  console.log(messages);
 
  // function that adds camera to messages
  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }

  return (
    <div className="App">
      {showCamera && <Camera takePicture={takePicture} />}
      <Header />
      <div className ='messages'> 
        {messages.map((msg)=>{
          return <div className='message'>{msg}</div>;
        })}
      </div>
      <TextInput sendMessage={sendMessage} 
        showCamera={()=>setShowCamera(true)}
      />
     </div>
     
  );
}

export default App;