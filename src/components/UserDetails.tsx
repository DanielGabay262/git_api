import React from 'react'
import { User } from './Interfaces'
import userDetailsCSS from './UserDetails.module.scss'

const UserDetails = ({ userDetails }: { userDetails: User }) => {

  return (
    <div className={userDetailsCSS.userDetails}>
      <h1 className={userDetailsCSS.heading}>{`${userDetails.login} GitHub User`}</h1>
      <div className={userDetailsCSS.avatarDiv}>
        <a href={`${userDetails.html_url}`}><img className={userDetailsCSS.avatar} src={`${userDetails.avatar_url}`} alt="GitHub avatar" /></a>
      </div>
    </div>
  )
}

export default UserDetails