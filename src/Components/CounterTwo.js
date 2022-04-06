import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../Components/services/actions/counterAction';

const CounterTwo = () => {

    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch

  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={() => dispatch(increment(2))}>Incerment</button>
        <button onClick={() => dispatch(decrement(2))}>Decerment</button>
    </div>
  )
}

export default CounterTwo