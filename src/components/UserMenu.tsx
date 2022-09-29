import React from 'react'
import { useState } from 'react'
import userMenuCSS from './UserMenu.module.scss'
import { useQueryClient } from 'react-query'
import { useGetRepos } from './ReactQueryWrapper'
import { User, Repo } from './Interfaces'
import UserDetails from './UserDetails'
import ReposList from './ReposList'
import SingleRepo from './SingleRepo'

const UserMenu = ({setIsUserFound} : {setIsUserFound: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const queryClient = useQueryClient()
    const userData = queryClient.getQueryData("user") as User
    const [isRepoClicked, setIsRepoClicked] = useState(false)
    const [chosenRepo, setChosenRepo] = useState<string>("")

    const handleClickRepo = (repo: string) => {
        setChosenRepo(repo)
        setIsRepoClicked(true)
    }

    const handleClickQuit = () => {
        setChosenRepo("")
        setIsRepoClicked(false)
    }

    const handleNewSearch = () => {
        queryClient.removeQueries('repos')
        queryClient.removeQueries('user')
        setIsUserFound(false)
      }

    const {data: reposData, isSuccess, isLoading} = useGetRepos(userData.login)
    
    if(isLoading) return <h1 className={userMenuCSS.message}>Loading....</h1>
    if (!isSuccess) return (
        <div>
            <h1 className={userMenuCSS.message}>Error in loading repos</h1>
            <button className={userMenuCSS.backBtn} onClick={handleClickQuit}> x </button>
        </div>
    ) 

    const reposNames = reposData.map((rep: Repo)=> rep.name)

    return (
        <div className={userMenuCSS.userMenu}>
            <UserDetails userDetails={userData}/>
            <button className={userMenuCSS.newSearch} onClick={handleNewSearch}>New Search</button>
            {isRepoClicked ? 
            <div className={userMenuCSS.clickedContainer}>
                <ReposList reposNames={reposNames} handleClickRepo={handleClickRepo}/>
                <SingleRepo userName={userData.login} repoName={chosenRepo}/>
                <button className={userMenuCSS.backBtn} onClick={handleClickQuit}> x </button>
            </div> : 
            <div className={userMenuCSS.noClickedContainer}>
                <ReposList reposNames={reposNames} handleClickRepo={handleClickRepo}/>
            </div>}
        </div>
    )
}

export default UserMenu