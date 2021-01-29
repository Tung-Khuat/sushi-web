import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import sushiReducer from './sushiReducer'

const reducer =  combineReducers({
    sushiStore: sushiReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))