import { put, takeEvery } from 'redux-saga/effects';
import { fetchIdsByTopic, fetchItems } from '../services/HNService';
import { FETCH_STORIES, SET_STROTIES, SET_LIST } from '../actions';

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

function* rootSaga() {
  yield takeEvery(FETCH_STORIES, fetchStories);
}

export default rootSaga;
