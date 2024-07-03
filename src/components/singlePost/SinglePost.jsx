import React from 'react';
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
                className="singlePostImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt=""  
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet. 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Jubrah</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima amet voluptatibus sed quaerat veritatis quas placeat cupiditate, voluptate repudiandae accusamus dolore itaque dolorum assumenda? Soluta reprehenderit sed fuga a totam quaerat modi quisquam voluptatum molestias sequi nesciunt officiis doloremque exercitationem beatae necessitatibus, sapiente, tempore reiciendis quod corrupti rerum! Illum quasi aliquid dolorum itaque tempore repellat ratione? Ipsa saepe dolor quibusdam inventore iste harum sapiente dolorem fugit dolorum temporibus, eius nihil quas quisquam. Facere animi optio quia corporis aperiam id incidunt nostrum quasi et unde doloribus ipsa, rerum, architecto in quo debitis cupiditate? Saepe sapiente debitis nihil culpa enim nisi.</p>
        </div>
    </div>
  )
}
