import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';



import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store.js';
// const store = createStore(() => [], {}, applyMiddleware()); // reducer function, initial state, middleware

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header style={{backgroundColor: '#f4f4f4f4'}} >
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        
        <Postform />
        <Posts />
      </div>  
    </Provider>
  );
}

export default App;
