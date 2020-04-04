export const clickWarmup = () => ({
  type: 'WARMUP',
})

export const clickWorkout = () => ({
  type: 'WORKOUT',
})

export const clickEnding = () => ({
  type: 'ENDING',
})

export const switchStage = stage => ({
  type: 'SWITCH_STAGE',
  stage
})
