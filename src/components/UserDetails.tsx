import React from 'react'
import { User } from './Interfaces'
import userDetailsCSS from './UserDetails.module.scss'

interface props {
    userDetails: User,
    setIsUserFound: React.Dispatch<React.SetStateAction<boolean>>
}

function UserDetails({userDetails, setIsUserFound}: props) {
  return (
    <div className={userDetailsCSS.userDetails}>
            <h1 className={userDetailsCSS.heading}>{`${userDetails.login} GitHub User`}</h1>
            <div className={userDetailsCSS.avatarDiv}>
                <img className={userDetailsCSS.avatar} src={`${userDetails.avatar_url}`} alt="GitHub avatar"/>
            </div>
            <a className={userDetailsCSS.link} href={`${userDetails.html_url}`}>{`${userDetails.login}`}</a>
            <button className={userDetailsCSS.newSearch} onClick={() => setIsUserFound(false)}>New Search</button>
    </div>
  )
}

export default UserDetails