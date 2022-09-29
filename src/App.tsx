import React, { useState } from 'react'
import  WelcomePage from './components/WelcomePage'
import appCSS from './App.module.scss'
import UserMenu from './components/UserMenu'

export const App = () => {

  const [isUserFound, setIsUserFound] = useState<boolean>(false)
  
  return (
    <div className={appCSS.app}>
      {isUserFound ? <UserMenu setIsUserFound={setIsUserFound}/> : <WelcomePage setIsUserFound={setIsUserFound}/>}
    </div>
  )
}