import { combineReducers } from 'redux'
import { SET_STROTIES, SET_ACTIVE_TOPIC, SET_LIST, SET_USER } from '../actions'

function stories(state = {}, action) {
  switch (action.type) {
    case SET_STROTIES: return {
      ...state,
      [action.topic]: action.stories
    }

    case SET_LIST: return {
      ...state,
      page: action.page,
      size: action.size
    }

    default: return state;
  }
}

function user(state = null, action) {
  switch (action.type) {
    case SET_USER: return action.user;

    default: return state;
  }
}

function activeTopic(state = "tops", action) {
  switch (action.type) {
    case SET_ACTIVE_TOPIC: return {
      activeTopic: action.activeTopic
    }

    default:
      return state;
  }
}

export default combineReducers({
  stories,
  user,
  activeTopic
});
