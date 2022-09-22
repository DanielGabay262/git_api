import React from 'react'
import { User, Repo } from './Interfaces'
import SingleRepo from './SingleRepo'
import reposListCSS from './ReposList.module.scss'

interface props {
    user: User
}


const ReposList = ({user}: props) => {
    return (
        <div className={reposListCSS.displayRepos}>
            <h1 className={reposListCSS.heading}>{`${user.name} GitHub User`}</h1>
            <div className={reposListCSS.avatarDiv}>
                <img className={reposListCSS.avatar} src={`${user.avatarURL}`} alt="GitHub avatar"/>
            </div>
            <a className={reposListCSS.link} href={`${user.githubHyperLink}`}>{`${user.name}`}</a>
            <button className={reposListCSS.newSearch}>New Search</button>
            <h3 className={reposListCSS.repHead}>Choose Repository:</h3>
            <div className={reposListCSS.reposDiv}>
                {user?.repos.map((repo:Repo) => (
                    <SingleRepo repo={repo} key={repo.name}/>
                ))}
            </div>
        </div>
    )
}

export default ReposList