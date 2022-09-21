export interface Repo {
    name: string
    language: string
    branches: string[]
    pullRequests: string[]
}

export interface User {
    name: string
    avatarURL: string
    githubHyperLink: string
    repos: Repo[]
}

export interface Comment {
    userName: string, 
    repoName: string, 
    issueNumber: string, 
    comment: string
}

