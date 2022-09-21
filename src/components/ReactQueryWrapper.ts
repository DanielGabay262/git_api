import * as APIFunctions from "./APIFunction"
import { useQuery, useMutation } from "react-query"

interface Comment {
    userName: string, 
    repoName: string, 
    issueNumber: string, 
    comment: string
}

export const GetUser = (userName : string) => {
    return (useQuery(['user'], () => APIFunctions.getUser(userName)))
}

export const GetRepos = (userName: string) => {
    return (useQuery(['repos'], () => APIFunctions.getRepos(userName)))
}

export const GetBranches = (userName: string, repoName: string) => {
    return (useQuery(['branches'], () => APIFunctions.getBranches(userName, repoName)))
}

export const GetPullRequests = (userName: string, repoName: string) => {
    return (useQuery(['pullRequests'], () => APIFunctions.getPullRequests(userName, repoName)))
}

export const AddComment = () => {
    return useMutation((newComment: Comment) => {
    return APIFunctions.addComment(newComment.userName, newComment.repoName, newComment.issueNumber, newComment.comment)
})}

