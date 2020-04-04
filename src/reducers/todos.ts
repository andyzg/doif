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
        "conditions": conditions
      }
    case 'LOAD_CONDITIONS':
      let exercises = state['exercises'];
      if (!exercises) {
        exercises = []
      }
      return {
        "exercises": exercises,
        "conditions": action.conditions
      }
    default:
      return state
  }
}

export default content
