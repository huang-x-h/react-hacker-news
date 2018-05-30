import firebase from '@firebase/app';
import '@firebase/database';
import DataLoader from 'dataloader';

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com'
})

const api = firebase.database().ref('/v0');

const fetch = (child) => {
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
      const val = snapshot.val();
      resolve(val);
    }, reject);
  });
}

const fetchLoader = new DataLoader(keys => Promise.all(keys.map(key => fetch(key))));

const fetchIdsByTopic = (topic) => {
  return fetchLoader.load(`${topic}stories`);
};

const fetchItem = id => {
  return fetchLoader.load(`item/${id}`);
}

const fetchItems = ids => {
  return fetchLoader.loadMany(ids.map(id => `item/${id}`));
}

const fetchUser = id => {
  return fetchLoader.load(`user/${id}`);
}

export {
  fetchIdsByTopic,
  fetchItem,
  fetchItems,
  fetchUser
}
