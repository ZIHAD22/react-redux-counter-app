import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterReset } from '../services/actions/counterAction';


const Counter = () => {
    const count = useSelector(state => state.count)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()
    const hanldeIncrementCount = () => {
        dispatch(counterIncrement())
    }
    const handleDecrement = () => {
        dispatch(counterDecrement())
    }

    const handleResetCount = () => {
        dispatch(counterReset())
    }
    return (
        <div>
            <h1>This is counter app</h1>
            <h2>Count: {count} {error && `: ${error}`}</h2>
            <button onClick={hanldeIncrementCount}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleResetCount}>RESET</button>
        </div>
    );
};

export default Counter;