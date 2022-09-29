export interface Repo {
    name: string
    language: string
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
}

export interface Branch {
    name: string
}

export interface PullRequest {
    title: string,
    html_url: string,
    number: number,
    Comments: number
}