import React from 'react'
import { useGetBranches, useGetPullRequests } from './ReactQueryWrapper'
import { useQueryClient } from 'react-query'
import { Repo, Branch, PullRequest } from './Interfaces'
import singleRepoCSS from './SingleRepo.module.scss'
import { useState } from 'react'
import Popup from './Popup'

interface props {
    userName: string
    repoName: string
}

const SingleRepo = ({userName, repoName}: props) => {

    const queryClient = useQueryClient()
    const reposData = queryClient.getQueryData("repos") as Repo[]

    const [isAddCommentClicked, setIsAddCommentClicked] = useState(false)
    const [issueNumber, setIssueNumber] = useState("")

    const repoData = reposData.find((repo) => repo.name === repoName)
    const {data: branchesData, isSuccess: branchesIsSuccess, isLoading: branchesIsLoading} = useGetBranches(userName, repoName)
    const {data: prData, isSuccess: prIsSuccess, isLoading: prIsLoading} = useGetPullRequests(userName, repoName, isAddCommentClicked)

    const handleAddComment = (issue: string) => {
        setIsAddCommentClicked(true)
        setIssueNumber(issue)
    }

    if (branchesIsLoading || prIsLoading) {
        return <p>Loading data...</p>
    }

    if (!branchesIsSuccess || !prIsSuccess) {
        return <p>Error in loading repositories data</p>
    }

    return (
        <div className={singleRepoCSS.container}>
            <p>{`Name: ${repoName}`}</p>
            <p>{`Language: ${repoData?.language !== null ? repoData?.language : "No language specified"}`}</p>
            <p>Branches:</p>
            <BranchesList branches={branchesData}/>
            <p>Pull requests:</p>
            <PrList pullRequests={prData} handleAddComment={handleAddComment}/>
            {isAddCommentClicked && <Popup userName={userName} repoName={repoName} issueNumber={issueNumber} setIsAddCommentClicked={setIsAddCommentClicked}></Popup>}
        </div>
    )
}

const PrList = ({pullRequests, handleAddComment}: {pullRequests: PullRequest[], handleAddComment: (issue: string) => void}) => {
    if (pullRequests.length === 0) {
        return <ul>No pull requests</ul>
    }
    const pullRequestList = pullRequests.map((pullRequest: PullRequest) => 
    <li key={pullRequest.number}>
        <a href={`${pullRequest.html_url}`}>{pullRequest.title}</a> 
        {` (${pullRequest.comments} comments)`} 
        <button onClick={() => handleAddComment(pullRequest.number.toString())}>Add comment</button>
    </li>)
    return <ul>{pullRequestList}</ul>
}

const BranchesList = ({branches} : {branches: Branch[]}) => {
    const branchesList = branches.map((branch) => 
    <li key={branch.name}>{branch.name}</li>)
    return <ul>{branchesList}</ul>
}

export default SingleRepo