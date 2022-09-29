import React from "react"
import GithubImg from '../img/github.jpeg'
import welcomePageCSS from './WelcomePage.module.scss'
import { useState } from 'react'
import { useGetUser } from "./ReactQueryWrapper"


const WelcomePage = ({setIsUserFound} : {setIsUserFound: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [userName, setUserName] = useState<string>("")
    const {refetch} = useGetUser(userName)

    const handleSearchUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUserName("")
        const {data: userData, isSuccess} = await refetch()

        if (isSuccess) {
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
        <div className={welcomePageCSS.welcome}>
            <h1 className={welcomePageCSS.heading}>Welcome!</h1>
            <form className={welcomePageCSS.inputForm} onSubmit={handleSearchUser}>
                <input className={welcomePageCSS.inputTxt}
                    type="input"
                    placeholder="Enter GitHub user name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                <button className={welcomePageCSS.nameBtn} type="submit">
                    Search
                </button>
            </form>
            <div className={welcomePageCSS.imageDiv}>
                <img src={GithubImg} alt="GitHub img" className={welcomePageCSS.githubImg}/>
            </div>
            
        </div>
    )
}

export default WelcomePage