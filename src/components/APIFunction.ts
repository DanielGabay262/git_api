import axios from "axios";

const githubAPI = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        Authorization: `Bearer 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`
    }
})

export const getUser = async (user: string) => {
    try {
        const response = await githubAPI.get(`users/${user}`)
        return response.data
    } catch(err) {
        throw err
    }
}

export const getRepos = async (user: string) => {
    try {
        const response = await githubAPI.get(`users/${user}/repos`)
        return response.data
    } catch(err) {
        throw err
    }    
}

export const getBranches = async (user: string, repo: string) => {
    try {
        const response = await githubAPI.get(`/repos/${user}/${repo}/branches`)
        return response.data
    } catch(err) {
        throw err
    }    
}

export const getPullRequests = async (user: string, repo: string) => {
    try {
        const response = await githubAPI.get(`/repos/${user}/${repo}/pulls`)
        return response.data
    } catch(err) {
        throw err
    }    
}

export const addComment = async (user:string, repo: string, issue: string, comment: string) => {
    try {
        const response = await githubAPI.post(`repos/${user}/${repo}/issues/${issue}/comments`, {
            owner: user,
            repo: repo,
            issue_number: issue,
            body: comment
        })
        return response
    } catch(err) {
        throw err
    }
}