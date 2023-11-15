import React from 'react'
import { useDispatch } from 'react-redux'
import * as ActionsCreators from '../redux/ActionsCreators'

export default function Operations() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(ActionsCreators.increment(2))}>Incrementer</button>
        <button onClick={() => dispatch(ActionsCreators.decrement())}>Decrementer</button>
        <button onClick={() => dispatch(ActionsCreators.init())}>Initialiser</button>
    </div>
  )
}
