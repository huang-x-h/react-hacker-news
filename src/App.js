import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemsList from './containers/ItemsList'
import UserProfile from './containers/UserProfile'

import './App.css';

const App = () => (
  <div className="App">
    <div className="App__wrap">
      <Header />
      <div className="App__content">
        <Switch>
          <Route path="/top" children={() => (<ItemsList topic="top" />)} />
          <Route path="/new" children={() => (<ItemsList topic="new" />)} />
          <Route path="/user/:id" component={UserProfile} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
)

export default App;
