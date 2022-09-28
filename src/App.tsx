import React, { useState } from 'react'
import  WelcomePage from './components/WelcomePage'
import appCSS from './App.module.scss'
import UserMenu from './components/UserMenu'
import * as rqFunctions from './components/ReactQueryWrapper'

export const App = () => {

  const [userName, setUserName] = useState<string>("")
  const [isUserFound, setIsUserFound] = useState<boolean>(false)

  const {refetch} = rqFunctions.GetUser(userName)

  const handleSearchUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserName("")
    const {data: userData, isSuccess} = await refetch()
    if (isSuccess === true) {
      const numOfRepos = Number(userData.public_repos)
      if (numOfRepos > 0) {
        setIsUserFound(true)
      }
      else {
        alert(`There are no repositories for ${userName}!`)
      }
    }
    else {
      alert(`The user: ${userName} doesn't exist!`)
    }
  }
  
  return (
    <div className={appCSS.app}>
      {isUserFound ? <UserMenu/> : <WelcomePage userName={userName} setUserName={setUserName} handleSearchUser={handleSearchUser}/>}
    </div>
  )
}