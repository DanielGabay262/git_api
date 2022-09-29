import React from 'react'
import { useGetBranches, useGetPullRequests } from './ReactQueryWrapper'
import { useQueryClient } from 'react-query'
import { Repo, Branch, PullRequest } from './Interfaces'
import singleRepoCSS from './SingleRepo.module.scss'

interface props {
    userName: string
    repoName: string
}

const SingleRepo = ({userName, repoName}: props) => {

    const queryClient = useQueryClient()
    const reposData = queryClient.getQueryData("repos") as Repo[]

    const repoData = reposData.find((repo) => repo.name === repoName)
    const {data: branchesData, isSuccess: branchesIsSuccess, isLoading: branchesIsLoading} = useGetBranches(userName, repoName)
    const {data: prData, isSuccess: prIsSuccess, isLoading: prIsLoading} = useGetPullRequests(userName, repoName)

    if (branchesIsLoading || prIsLoading) {
        return <p>Loading data...</p>
    }

    if (!branchesIsSuccess || !prIsSuccess) {
        return <p>Error in loading repositories data</p>
    }

    const branchesList = branchesData.map((branch: Branch) => <li key={branch.name}>{branch.name}</li>)
    const prList = prData.map((pullRequest: PullRequest) => <li key={pullRequest.number}><a href={`${pullRequest.html_url}`}>{pullRequest.title}</a></li>)

    return (
        <div className={singleRepoCSS.container}>
            <p>{`Name: ${repoName}`}</p>
            <p>{`Language: ${repoData?.language !== null ? repoData?.language : "No language specified"}`}</p>
            <p>Branches:</p>
            <ul>{branchesList}</ul>
            <p>Pull requests:</p>
            <ul>{prData.length > 0 ? prList : "No pull requests"}</ul>
        </div>
    )
}

export default SingleRepo