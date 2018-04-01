import { put, takeEvery } from 'redux-saga/effects';
import { fetchIdsByTopic, fetchItems, fetchUser } from '../services/HNService';
import { FETCH_STORIES, FETCH_USER, SET_STROTIES, SET_LIST, SET_USER } from '../actions';

function activeIds(ids, page, size) {
  const start = (page - 1) * size
  const end = page * size

  return ids.slice(start, end)
}

function* fetchStories(action) {
  const { topic, page = 1, size = 20 } = action;
  const ids = yield fetchIdsByTopic(topic);
  yield put({ type: SET_LIST, page, size });
  const stories = yield fetchItems(activeIds(ids, page, size));
  yield put({ type: SET_STROTIES, topic, stories });
}

function* fetchUserProfile(action) {
  const { id } = action;
  const user = yield fetchUser(id);
  yield put({ type: SET_USER, user });
}

function* rootSaga() {
  yield takeEvery(FETCH_STORIES, fetchStories);
  yield takeEvery(FETCH_USER, fetchUserProfile);
}

export default rootSaga;
