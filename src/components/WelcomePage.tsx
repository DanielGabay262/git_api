import React from "react"
import GithubImg from '../img/github.jpeg'
import welcomePageCSS from './WelcomePage.module.scss'

interface props {
    userName: string
    setUserName: React.Dispatch<React.SetStateAction<string>>
    handleSearchUser: (e: React.FormEvent<HTMLFormElement>) => void
}

const WelcomePage = ({userName, setUserName, handleSearchUser} : props) => {

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