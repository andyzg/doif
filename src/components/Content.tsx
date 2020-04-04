import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import ActionToolbar from './ActionToolbar'

const Content = ({ condition, exercise, conditionIndex, exerciseIndex, stage, pack }) => {
  console.log(condition);
  console.log(exercise);
  console.log(conditionIndex);
  console.log(exerciseIndex);
  console.log(stage);

  let topText = 'Loading'
  let bottomText = ''
  if (condition && condition.length > 0 && exercise && stage) {
    console.log(condition, exercise, pack);
    let selectedC = condition[pack]
    let ci = conditionIndex % selectedC['list'].length
    topText = selectedC['prefix'] + ' ' + selectedC['list'][ci]['condition'] + ' ' + selectedC['potsfix']

    let selectedE = exercise[stage.toLowerCase()]
    let ei = exerciseIndex % selectedE.length
    console.log(selectedE);
    bottomText = selectedE[ei]['text'];
  }

  return (
    <div className="content pure-u-4-5">
      <div className="exercise-content">
        <div className="condition"> {topText} </div>
        <div className="consequence" > {bottomText} </div>
      </div>
      <ActionToolbar />
    </div>
  )
}

export default Content
