import React from "react"
import GithubImg from '../img/github.jpeg'
import WelcomePageCSS from './WelcomePage.module.scss'

interface props {
    userName: string
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const WelcomePage = ({userName, setUserName} : props) => {
    return (
        <div className={WelcomePageCSS.welcome}>
            <h1 className={WelcomePageCSS.heading}>Welcome!</h1>
            <form className={WelcomePageCSS.inputForm} onSubmit={(e) => {
            e.preventDefault()
            setUserName("")
        }}>
                <input className={WelcomePageCSS.inputTxt}
                    type="input"
                    placeholder="Enter GitHub user name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                <button className={WelcomePageCSS.nameBtn} type="submit">
                    Search
                </button>
            </form>
            <div className={WelcomePageCSS.imageDiv}>
                <img src={GithubImg} alt="GitHub img" className={WelcomePageCSS.githubImg}/>
            </div>
            
        </div>
    )
}

export default WelcomePage