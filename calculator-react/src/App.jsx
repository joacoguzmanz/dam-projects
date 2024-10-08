import { useState } from 'react'
import Display from './Display.jsx';
import Keypad from './Keypad.jsx';
import './styles/App.css'

function App() {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');
        } else if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (e) {
                setInput('error');
            }
        } else {
            setInput(input + value);
        }
    }

    return (
        <div className='calculator'>
            <Display value={input} />
            <Keypad handleClick={handleClick} />
        </div>
    )
}

export default App;
