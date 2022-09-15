import React, { useState } from 'react'
// import './app.scss';
import  WelcomePage from './components/WelcomePage'
import AppCSS from './App.module.scss'

export const App = () => {

  const [userName, setUserName] = useState<string>("")
  
  return (
    <div className={AppCSS.app}>
      <WelcomePage userName={userName} setUserName={setUserName}/>
    </div>
  )
}