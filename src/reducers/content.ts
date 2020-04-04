import { Condition, ConditionList, ConditionPack } from '../models/Condition'


const content = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_EXERCISES':
      let conditions = state['conditions'];
      if (!conditions) {
        conditions = []
      }
      return {
        "exercises": action.exercises,
        "conditions": conditions,
        "pack": 0,
        "exerciseIndex": 0,
        "conditionIndex": 0
      }
    case 'LOAD_CONDITIONS':
      let exercises = state['exercises'];
      if (!exercises) {
        exercises = []
      }
      console.log(state);
      return {
        "exercises": exercises,
        "conditions": action.conditions,
        "pack": 0,
        "exerciseIndex": 0,
        "conditionIndex": 0
      }
    default:
      return state
  }
}

export default content
