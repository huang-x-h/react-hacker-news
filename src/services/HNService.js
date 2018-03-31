import firebase from '@firebase/app';
import '@firebase/database'

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com'
})

let rootRef = firebase.database().ref('/v0');

const fetch = (child) => {
  return new Promise((resolve, reject) => {
    rootRef.child(child);
    rootRef.once('value', snapshot => {
      const val = snapshot.val();
      resolve(val);
    }, reject);
  });
}

const fetchIdsByTopic = (topic) => {
  return fetch(`${topic}stories`);
};

const fetchItem = id => {
  return fetch(`item/${id}`);
}

const fetchItems = ids => {
  return Promise.all(ids.map(id => fetchItem(id)));
}

const fetchUser = id => {
  return fetch(`user/${id}`);
}

export {
  fetchIdsByTopic,
  fetchItem,
  fetchItems,
  fetchUser
}
