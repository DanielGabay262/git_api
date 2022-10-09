import React from 'react'
import reposListCSS from './ReposList.module.scss'

interface props {
  reposNames: string[],
  handleClickRepo: (repo: string) => void
}

const ReposList = ({ reposNames, handleClickRepo }: props) => {
  return (
    <div className={reposListCSS.container}>
      <h3 className={reposListCSS.repHead}>Choose Repository</h3>
      <div className={reposListCSS.reposDiv}>
        {reposNames?.map((repo) => (
          <div key={repo}>
            <button className={reposListCSS.repoBtn} onClick={() => handleClickRepo(repo)}>{`${repo}`}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReposList