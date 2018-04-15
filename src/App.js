import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemsList from './containers/ItemsList'
import CommentsList from './containers/CommentsList'
import UserProfile from './containers/UserProfile'

import './App.css';

const App = () => (
  <div className="App">
    <div className="App__wrap">
      <Header />
      <div className="App__content">
        <Switch>
          <Route path="/top/:page?" render={() => (<ItemsList topic="top" />)} />
          <Route path="/new/:page?" render={() => (<ItemsList topic="new" />)} />
          <Route path="/show/:page?" render={() => (<ItemsList topic="show" />)} />
          <Route path="/ask/:page?" render={() => (<ItemsList topic="ask" />)} />
          <Route path="/job/:page?" render={() => (<ItemsList topic="job" />)} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/story/:id" component={CommentsList} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
)

export default App;
