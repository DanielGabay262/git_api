import React from 'react'
import { Repo } from './Interfaces'
import SingleRepoCSS from './SingleRepo.module.scss'

interface props {
    repo: Repo
}

const SingleRepo = ({repo}: props) => {
    return (
        <button className={SingleRepoCSS.repoBtn}>{`${repo.name}`}</button>
    )
}


export default SingleRepo