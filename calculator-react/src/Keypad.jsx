import './styles/Keypad.css';

const buttons = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '=',
    '1', '2', '3', '.',
    '0',
];

const Keypad = ({ handleClick }) => {
    return (
        <div className='keypad'>
            {buttons.map((button, index) => (
                <Button key={index} value={button} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Keypad;


export const Button = ({ value, handleClick }) => {
    return (
        <button className='button' onClick={() => handleClick(value)}>
            {value}
        </button>
    );
}
