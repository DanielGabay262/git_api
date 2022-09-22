import React from 'react'
import { Repo } from './Interfaces'
import singleRepoCSS from './SingleRepo.module.scss'

interface props {
    repo: Repo
}

const SingleRepo = ({repo}: props) => {
    return (
        <button className={singleRepoCSS.repoBtn}>{`${repo.name}`}</button>
    )
}


export default SingleRepo