import React from 'react'
import ReactDOM from 'react-dom'
import * as $ from 'jquery'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import middleware from './middleware'

import { loadExercises, loadConditions } from './actions/init'

const store = createStore(rootReducer, middleware);

($ as any).get('./content/exercises.json', (data) => {
  console.log(data)
})

store.dispatch(loadExercises())
store.dispatch(loadConditions())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
