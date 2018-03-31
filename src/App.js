import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemsList from './containers/ItemsList';

import './App.css';

const App = () => (
  <div className="App">
    <div className="App__wrap">
      <Header />
      <div className="App__content">
        <Route path="/tops" children={() => (<ItemsList topic="tops" />)} />
      </div>
      <Footer />
    </div>
  </div>
)

export default App;
