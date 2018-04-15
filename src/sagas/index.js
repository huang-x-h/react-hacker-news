import { put, takeEvery } from 'redux-saga/effects'
import { fetchIdsByTopic, fetchItems, fetchUser } from '../services/HNService'
import { FETCH_STORIES, FETCH_USER, SET_STROTIES, SET_LIST, SET_USER, SET_ACTIVE_TOPIC, FETCH_COMMENTS, SET_COMMENTS } from '../actions'
import { constants } from '../utils'

function activeIds(ids, page) {
  const size = constants.pageSize
  const start = (page - 1) * size
  const end = page * size

  return ids.slice(start, end)
}

function* fetchStories(action) {
  const { topic, page = 1 } = action;
  yield put({ type: SET_ACTIVE_TOPIC, topic });
  const ids = yield fetchIdsByTopic(topic);
  yield put({ type: SET_LIST, topic, ids });
  const stories = yield fetchItems(activeIds(ids, page));
  yield put({ type: SET_STROTIES, topic, stories });
}

function* fetchUserProfile(action) {
  const { id } = action;
  const user = yield fetchUser(id);
  yield put({ type: SET_USER, user });
}

function* fetchComments(action) {
  const { ids } = action;
  const comments = yield fetchItems(ids);
  yield put({ type: SET_COMMENTS, comments });
}

function* rootSaga() {
  yield takeEvery(FETCH_STORIES, fetchStories);
  yield takeEvery(FETCH_USER, fetchUserProfile);
  yield takeEvery(FETCH_COMMENTS, fetchComments)
}

export default rootSaga;
