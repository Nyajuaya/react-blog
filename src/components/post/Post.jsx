import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImg'
            src="https://www.pexels.com/photo/snow-covered-mountain-and-trees-and-a-frozen-lake-21660248/" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nisi asperiores magnam placeat, facere eum ut optio blanditiis deserunt totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nisi asperiores magnam placeat, facere eum ut optio blanditiis deserunt totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nisi asperiores magnam placeat, facere eum ut optio blanditiis deserunt totam.
        </p>
    </div>
  )
}
