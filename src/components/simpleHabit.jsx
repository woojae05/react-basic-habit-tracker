import React,{useState} from 'react'

const SimpleHabit = () => {
    const [count, setCount] = useState(0); // hooks

    const handleIncrement = () => {
        setCount(count+1);
    }
    
    const handleDecrement = () => {
        setCount(count > 0 ? count-1 : count);
    }

    return (
        <li className='habit'>
        <span className="habit-name">Reading</span>
                <span className="habit-count">{count}</span>
                <button className='habit-button habit-increase' onClick={handleIncrement}> 
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={handleDecrement}> 
                    <i className="fas fa-minus-square"></i>
                </button>
        </li>
    )
}

export default SimpleHabit
