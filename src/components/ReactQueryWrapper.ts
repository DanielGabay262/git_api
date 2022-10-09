import * as apiFunctions from "./APIFunction"
import { useQuery, useMutation } from "react-query"
import { Comment } from "./Interfaces"

export const useGetUser = (userName : string) => useQuery(['user'], () => apiFunctions.getUser(userName), {enabled: false, retry: false})

export const useGetRepos = (userName: string) => useQuery(['repos'], () => apiFunctions.getRepos(userName))

export const useGetBranches = (userName: string, repoName: string) => useQuery(['branches', repoName], () => apiFunctions.getBranches(userName, repoName))

export const useGetPullRequests = (userName: string, repoName: string, isAddCommentClicked: boolean) => useQuery(['pullRequests', repoName, isAddCommentClicked], () => apiFunctions.getPullRequests(userName, repoName))

export const useAddComment = () => useMutation((newComment: Comment) => apiFunctions.addComment(newComment))

