import React from 'react'
import { connect } from 'react-redux'

const ActionToolbar = ({ dispatch }) => {

  return (
    <div className="action-toolbar">
      <div className="action-item action-shuffle"><span className="action-text">Shuffle</span> <img src="./static/img/shuffle.svg" /></div>

    </div>
  )
}

export default connect()(ActionToolbar)
