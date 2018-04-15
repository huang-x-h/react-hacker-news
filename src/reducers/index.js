import { combineReducers } from 'redux'
import { SET_STROTIES, SET_ACTIVE_TOPIC, SET_LIST, SET_USER, SET_COMMENTS } from '../actions'

function stories(state = {}, action) {
  switch (action.type) {
    case SET_STROTIES: return {
      ...state,
      [action.topic]: action.stories
    }

    default: return state;
  }
}

function list(state = {}, action) {
  switch (action.type) {
    case SET_LIST: return {
      ...state,
      [action.topic]: action.ids
    }

    default: return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case SET_USER: return action.user;
    default: return state;
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case SET_COMMENTS: return action.comments;
    default: return state;
  }
}

function activeTopic(state = "tops", action) {
  switch (action.type) {
    case SET_ACTIVE_TOPIC: return {
      activeTopic: action.activeTopic
    }

    default: return state;
  }
}

export default combineReducers({
  stories,
  list,
  user,
  comments,
  activeTopic
});
