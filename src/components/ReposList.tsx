import React from 'react'
import { User, Repo } from './Interfaces'
import SingleRepo from './SingleRepo'
import ReposListCSS from './ReposList.module.scss'

interface props {
    user: User
}


const ReposList = ({user}: props) => {
    return (
        <div className={ReposListCSS.displayRepos}>
            <h1 className={ReposListCSS.heading}>{`${user.name} GitHub User`}</h1>
            <div className={ReposListCSS.avatarDiv}>
                <img className={ReposListCSS.avatar} src={`${user.avatarURL}`} alt="GitHub avatar"/>
            </div>
            <a className={ReposListCSS.link} href={`${user.githubHyperLink}`}>{`${user.name}`}</a>
            <button className={ReposListCSS.newSearch}>New Search</button>
            <h3 className={ReposListCSS.repHead}>Choose Repository:</h3>
            <div className={ReposListCSS.reposDiv}>
                {user.repos.map((repo:Repo) => (
                    <SingleRepo repo={repo} key={repo.name}/>
                ))}
            </div>
        </div>
    )
}

export default ReposList