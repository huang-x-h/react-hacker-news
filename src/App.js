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
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/story/:id" component={CommentsList} />
          <Route path="/:topic/:page?" component={ItemsList} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
)

export default App;
