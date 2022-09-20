import axios from "axios"

const githubAPI = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        Authorization: `Bearer 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`
    }
})

export const getUser = async (userName: string) => {
    try {
        const response = await githubAPI.get(`users/${userName}`)
        return response.data
    } catch(err) {
        throw err
    }
}

export const getRepos = async (userName: string) => {
    try {
        const response = await githubAPI.get(`users/${userName}/repos`)
        return response.data
    } catch(err) {
        throw err
    }    
}

export const getBranches = async (userName: string, repoName: string) => {
    try {
        const response = await githubAPI.get(`/repos/${userName}/${repoName}/branches`)
        return response.data
    } catch(err) {
        throw err
    }    
}

export const getPullRequests = async (userName: string, repoName: string) => {
    try {
        const response = await githubAPI.get(`/repos/${repoName}/${repoName}/pulls`)
        return response.data
    } catch(err) {
        throw err
    }    
}

export const addComment = async (userName: string, repoName: string, issueNumber: string, comment: string) => {
    try {
        const response = await githubAPI.post(`repos/${userName}/${repoName}/issues/${issueNumber}/comments`, {
            owner: userName,
            repo: repoName,
            issue_number: issueNumber,
            body: comment
        })
        return response
    } catch(err) {
        throw err
    }
}