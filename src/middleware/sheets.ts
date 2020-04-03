export default store => next => action => {
  try {
    console.log('middelware for sheets');
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    throw err
  }
}
