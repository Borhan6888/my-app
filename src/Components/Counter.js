import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../Components/services/actions/counterAction'

const Counter = ({increment, decrement, count}) => {
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={() => increment(5)}>Incerment</button>
        <button onClick={() => decrement(1)}>Decerment</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
   count: state.counterReducer.count
})

export default connect(mapStateToProps, {increment,decrement,})(Counter)