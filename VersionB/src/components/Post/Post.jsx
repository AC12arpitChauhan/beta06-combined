import React from 'react'
import './Post.css'
import Comment from '../../img/chat-bubble (1).png'
import Share from '../../img/shareIt.png'
import Heart from '../../img/heart.png'
import NotLike from '../../img/heart.png'


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />


        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color: '#f3f3f3', fontSize: '14px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post