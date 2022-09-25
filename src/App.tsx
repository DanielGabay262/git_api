import React, { useState } from 'react'
import  WelcomePage from './components/WelcomePage'
import appCSS from './App.module.scss'
import UserDetails from './components/UserDetails'
import * as rqFunctions from './components/ReactQueryWrapper'

export const App = () => {

  const [userName, setUserName] = useState<string>("")
  const [isUserFound, setIsUserFound] = useState<boolean>(false)

  const {refetch} = rqFunctions.GetUser(userName)

  const handleUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserName("")
    const returnData = await refetch()
    if (returnData.isSuccess === true) {
      const numOfRepos = Number(returnData.data.public_repos)
      if (numOfRepos > 0) {
        setIsUserFound(true)
      }
    }
  }
  
  return (
    <div className={appCSS.app}>
      {isUserFound ? <UserDetails/> : <WelcomePage userName={userName} setUserName={setUserName} handleUser={handleUser}/>}
    </div>
  )
}