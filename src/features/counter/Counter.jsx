import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

export const Counter = () => {

    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => {
                    dispatch(increment())
                }}>+</button>
                <button onClick={() => {
                    dispatch(reset())
                }}>Reset</button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>-</button>

                <input type="text" value={incrementAmount} onChange={(e) => {
                  setIncrementAmount(e.target.value);
                }} />
            </div>
            <div>
                <button onClick={() => {
                  dispatch(incrementByAmount(addValue))
                }}>Add Amount</button>
                <button onClick={resetAll}>Reset All</button>
            </div>
        </section>
    )
}
