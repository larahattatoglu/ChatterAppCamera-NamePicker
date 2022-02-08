import react from "react";
import "./TextInput.css";
import { useState } from "react";
import { FiSend, FiCamera } from 'react-icons/fi';
 

function TextInput(props) {
    const [text, setText] = useState("");
    /* function that sends message and automatically sets text to blank string */
    function send() {
        props.sendMessage(text);
        setText("");      
    }
    /* function that takes key press enter and returns the send function */
    function onKeyPress(e) {
        console.log(e);
        if (e.key === 'Enter') {
            send();
        }
    }

    return (
        <footer className = "footer" > 
            <button className = "camera" onClick={props.showCamera}
                style={{left:10, right:'auto'}}>
                <FiCamera style={{height:15, width:15}} />
            </button>
            
            <input 
            className = "text-input"
            value = {text} 
            onChange={(e) => setText(e.target.value)}
            onKeyPress = {onKeyPress}
            />
            
            <button className = "send" onClick={send}> 
                Send 
            </button>
        </footer>
    );
}

export default TextInput;