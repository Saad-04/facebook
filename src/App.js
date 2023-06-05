import React from 'react';
// import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import './components/bodymain.css'
import Widgets from './components/Widgets';
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth'
 import Login from './components/Login';
import { auth } from './firebase';
// import { useStateValue } from './components/stateProvider';
function App() {
const [user] = useAuthState(auth)
console.log(user);
  return(
  <>
  <div className="app">
 {!user ? <Login/> :<div className="body_main" style={{fontFamily:"'Roboto', sans-serif"}}>
  {/* sidebar */}
  <Sidebar/>
  <Feed/>
  <Widgets/>
</div> }

</div>


  </>)
}

export default App;
