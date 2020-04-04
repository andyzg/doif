import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import ActionToolbar from './ActionToolbar'

const Content = ({ dispatch }) => {
  let condition = "If your full name has an 'A'";
  let consequence = "Do 10 pushups";

  return (
    <div className="content pure-u-4-5">
      <div className="exercise-content">
        <div className="condition"> {condition} </div>
        <div className="consequence" > {consequence} </div>
      </div>
      <ActionToolbar />
    </div>
  )
}

export default connect()(Content)
