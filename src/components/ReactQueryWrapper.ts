import * as apiFunctions from "./APIFunction"
import { useQuery, useMutation } from "react-query"
import { Comment } from "./Interfaces"

export const GetUser = (userName : string) => useQuery(['user'], () => apiFunctions.getUser(userName), {enabled: false, retry: false})

export const GetRepos = (userName: string) => useQuery(['repos'], () => apiFunctions.getRepos(userName))

export const GetBranches = (userName: string, repoName: string) => useQuery(['branches'], () => apiFunctions.getBranches(userName, repoName))

export const GetPullRequests = (userName: string, repoName: string) => useQuery(['pullRequests'], () => apiFunctions.getPullRequests(userName, repoName))

export const AddComment = () => useMutation((newComment: Comment) => apiFunctions.addComment(newComment))

