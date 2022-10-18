import * as apiFunctions from "./APIFunction"
import { useQuery, useMutation } from "react-query"
import { Comment } from "./Interfaces"
import { useQueryClient } from "react-query"
import { PullRequest } from "./Interfaces"


export const useGetUser = (userName: string) => useQuery(['user'], () => apiFunctions.getUser(userName), { enabled: false, retry: false })

export const useGetRepos = (userName: string) => useQuery(['repos'], () => apiFunctions.getRepos(userName))

export const useGetBranches = (userName: string, repoName: string) => useQuery(['branches', repoName], () => apiFunctions.getBranches(userName, repoName))

export const useGetPullRequests = (userName: string, repoName: string) => useQuery(['pullRequests', repoName], () => apiFunctions.getPullRequests(userName, repoName))

export const useGetNumOfComments = (issueURL: string, repoName: string, issueNumber: string) => useQuery(['comments', repoName, issueNumber], () => apiFunctions.getNumOfComments(issueURL), {
    cacheTime: 30000, //Will refetch data every focus on the screen only if 20 sec passed from the last fetch.
    staleTime: 30000  
})


export const useAddComment = () => {
    const queryClient = useQueryClient()
    return useMutation((newComment: Comment) => apiFunctions.addComment(newComment), {
        onMutate: async newComment => {  //Optimistic update
            await queryClient.cancelQueries(['comments', newComment.repoName, newComment.issueNumber])
            const previousNumOfComments = queryClient.getQueryData(['comments', newComment.repoName, newComment.issueNumber]) as PullRequest
            const copy = structuredClone(previousNumOfComments)
            ++copy.comments
            queryClient.setQueryData(['comments', newComment.repoName, newComment.issueNumber], copy)
            return { previousNumOfComments, copy }
        }
    })
}


// export const useAddComment = () => {
//     const queryClient = useQueryClient()
//     return useMutation((newComment: Comment) => apiFunctions.addComment(newComment), {
//         onMutate: async newComment => {  //Optimistic update
//             await queryClient.cancelQueries(['pullRequests', newComment.repoName])
//             const previousPullRequests = queryClient.getQueryData(['pullRequests', newComment.repoName]) as PullRequest[]
//             const copy = structuredClone(previousPullRequests)
//             copy.forEach((pullRequest) => {
//                 if (pullRequest.number === Number(newComment.issueNumber)) {
//                     ++pullRequest.comments
//                     return pullRequest
//                 }
//                 return pullRequest
//             })
//             queryClient.setQueryData(['pullRequests', newComment.repoName], copy)
//             return { previousPullRequests, copy }
//         }
//     })
// }




