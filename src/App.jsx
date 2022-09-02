import { useState } from 'react'
import Login from './components/Login.jsx'
import TheFooter from "./components/common/Footer.jsx";
import './css/normalize.css'
import './css/general.css'
import SignUp from "./components/SignUp.jsx";

function App() {

  return (
    <div className="app">
        <SignUp/>
        <TheFooter/>
    </div>
  )
}

export default App
