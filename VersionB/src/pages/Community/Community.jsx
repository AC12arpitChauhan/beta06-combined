import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Community.css'
const Community = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/> 
        <RightSide/>
    </div>
  )
}

export default Community
