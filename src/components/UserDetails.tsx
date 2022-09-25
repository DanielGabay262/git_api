import React from 'react'
import userDetailsCSS from './UserDetails.module.scss'
import { useQueryClient } from 'react-query'
import { GetRepos} from './ReactQueryWrapper'
import { FetchUser, Repo } from './Interfaces'

const UserDetails = () => {

    const queryClient = useQueryClient()
    const userData = queryClient.getQueryData("user") as FetchUser

    const {data: reposData, isSuccess} = GetRepos(userData.login)
    
    if (!isSuccess) return <p>Error in loading repos</p>

    const reposNames = reposData.map((rep: Repo)=> rep.name)

    return (
        <div className={userDetailsCSS.displayRepos}>
            <h1 className={userDetailsCSS.heading}>{`${userData.login} GitHub User`}</h1>
            <div className={userDetailsCSS.avatarDiv}>
                <img className={userDetailsCSS.avatar} src={`${userData.avatar_url}`} alt="GitHub avatar"/>
            </div>
            <a className={userDetailsCSS.link} href={`${userData.html_url}`}>{`${userData.login}`}</a>
            <button className={userDetailsCSS.newSearch}>New Search</button>
            <h3 className={userDetailsCSS.repHead}>Choose Repository:</h3>
            <div className={userDetailsCSS.reposDiv}>
                {reposNames?.map((repo:string) => (
                    <div key={repo}>
                        <button className={userDetailsCSS.repoBtn}>{`${repo}`}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserDetails