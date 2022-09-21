import * as APIFunctions from "./APIFunction"
import { useQuery, useMutation } from "react-query"
import { Comment } from "./Interfaces"

export const GetUser = (userName : string) => useQuery(['user'], () => APIFunctions.getUser(userName))


export const GetRepos = (userName: string) => useQuery(['repos'], () => APIFunctions.getRepos(userName))

export const GetBranches = (userName: string, repoName: string) => useQuery(['branches'], () => APIFunctions.getBranches(userName, repoName))


export const GetPullRequests = (userName: string, repoName: string) => useQuery(['pullRequests'], () => APIFunctions.getPullRequests(userName, repoName))


export const AddComment = () => useMutation((newComment: Comment) => APIFunctions.addComment(newComment))

