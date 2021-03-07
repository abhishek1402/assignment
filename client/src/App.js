import './App.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import { useState } from 'react';
import { auth } from './service/firebase.service';
import { Routes } from './route';
function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const login = async (email, password) => {
    let user = await auth().signInWithEmailAndPassword(email, password);
    if (user) {
      localStorage.setItem("authenticated", true)
      setAuthenticated(true)
      return true;
    }
  }
  return (
    <div className="App container">
      <Router>
        <Routes login={login} authenticated={authenticated} />
      </Router>
    </div>
  );
}

export default App;
