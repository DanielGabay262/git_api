export interface Repo {
    name: string
    language: string
    branches: string[]
    pullRequests: string[]
}

export interface Comment {
    userName: string, 
    repoName: string, 
    issueNumber: string, 
    comment: string
}

export interface User {
    login: string,
    avatar_url: string,
    html_url: string,
    public_repos: string
}