export const FETCH_STORIES = 'FETCH_STORIES';
export const SET_STROTIES = 'SET_STROTIES';
export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEM';
export const FETCH_USER = 'FETCH_USER';
export const SET_ACTIVE_TOPIC = 'SET_ACTIVE_TOPIC';
export const SET_LIST = 'SET_LIST';
export const SET_USER = 'SET_USER';

const fetchStories = (topic) => (
  {
    type: FETCH_STORIES,
    topic
  }
)

const fetchUser = (id) => (
  {
    type: FETCH_USER,
    id
  }
)

export {
  fetchStories,
  fetchUser
}
