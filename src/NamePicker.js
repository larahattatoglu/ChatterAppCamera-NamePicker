
import {useState} from 'react';
import { FiEdit } from 'react-icons/fi';


// the component decleration
export default function NamePicker(props) {
    // this is the state of the name itself
    const [name, setName] = useState('')
    // toggle to show or hide the input
    const [showInput, setShowInput] = useState(false)
    
  

    function ok() {
        props.setUsername(name);
        setShowInput(false);

    }
    
    if (showInput) {
        return (
        
        <div className = 'name-picker' >
            <input 
                className = "name-picker-input" 
                onChange = {(e) => setName(e.target.value)}
                value = {name}
                />

            <button 
            className = 'name-picker-button' 
            onClick = {ok} >
                Ok
            </button>

        </div>
        );
    
    }
    return (
    <div className = 'name-picker'> 
        <span className = "name-picker-name" > {name || "Set Username: " }</span>
        <FiEdit size="24" onClick = {()=> setShowInput(true)}/> 
        </div>
    );

}
