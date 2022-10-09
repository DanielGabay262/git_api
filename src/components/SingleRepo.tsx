import React, { useState} from 'react'
import { useGetBranches, useGetPullRequests } from './ReactQueryWrapper'
import { useQueryClient } from 'react-query'
import { Repo, Branch, PullRequest } from './Interfaces'
import singleRepoCSS from './SingleRepo.module.scss'
import Popup from './Popup'

interface props {
    userName: string
    repoName: string
}

const SingleRepo = ({ userName, repoName }: props) => {

    const queryClient = useQueryClient()
    const reposData = queryClient.getQueryData("repos") as Repo[]

    const [isAddCommentClicked, setIsAddCommentClicked] = useState(false)
    const [issueNumber, setIssueNumber] = useState("")

    const repoData = reposData.find((repo) => repo.name === repoName)
    const { data: branchesData, isSuccess: branchesIsSuccess, isLoading: branchesIsLoading } = useGetBranches(userName, repoName)
    const { data: prData, isSuccess: prIsSuccess, isLoading: prIsLoading } = useGetPullRequests(userName, repoName)

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
            <p>Name: <span className={singleRepoCSS.dynamicData}>{repoName}</span></p>
            <p>Language: <span className={singleRepoCSS.dynamicData}>{repoData?.language !== null ? repoData?.language : "No language specified"}</span></p>
            <p>Branches:</p>
            <BranchesList branches={branchesData} />
            <p>Pull requests: <PrList pullRequests={prData} handleAddComment={handleAddComment} /></p>
            {isAddCommentClicked && <Popup userName={userName} repoName={repoName} issueNumber={issueNumber} setIsAddCommentClicked={setIsAddCommentClicked}></Popup>}
        </div>
    )
}

const PrList = ({ pullRequests, handleAddComment }: { pullRequests: PullRequest[], handleAddComment: (issue: string) => void }) => {
    if (pullRequests.length === 0) {
        return <span className={singleRepoCSS.dynamicData}>No pull requests</span>
    }
    const pullRequestList = pullRequests.map((pullRequest: PullRequest) =>
        <li key={pullRequest.number}>
            <a href={`${pullRequest.html_url}`}>{pullRequest.title}</a> 
            <button className={singleRepoCSS.addCommentBtn} onClick={() => handleAddComment(pullRequest.number.toString())}>Add comment</button>
            <span className={singleRepoCSS.numOfComments}>{` (${pullRequest.comments} comments)`}</span>
        </li>)
    return <ul className={singleRepoCSS.dynamicData}>{pullRequestList}</ul>
}

const BranchesList = ({ branches }: { branches: Branch[] }) => {
    const branchesList = branches.map((branch) =>
        <li key={branch.name}>{branch.name}</li>)
    return <ul className={singleRepoCSS.dynamicData}>{branchesList}</ul>
}

export default SingleRepo