import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/Login';
import Nav from './components/NavigationDrawe';
function App() {
  return (
    <div className="App">
       <Nav />
      <SignIn />
    </div>
  );
}

export default App;
