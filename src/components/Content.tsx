import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const Content = ({ dispatch }) => {
  console.log('Content container');
  dispatch(addTodo('todo list item'));
  return (
    <div className="content pure-u-4-5">
      Content
    </div>
  )
}

export default connect()(Content)
