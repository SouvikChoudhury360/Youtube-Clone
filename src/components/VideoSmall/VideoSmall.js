import React from 'react';
import "./style.css"

const VideoSmall = () => {
    return (
       
            <div className="videoSmall">
                <div className="videoSmall__left">
                    <img src="https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                    alt="thumbnail"
                    className="videoSmall__thumbnail" />
                      </div>
                    <div className="videoSmall__right">
                        <p className="videoSmall__title">Nature Video </p>
                        <div className="videoSmall__texts videothumb__texts">
                            <p className="videothumb__text">Natares Beauty</p>
                            <p className="videothumb__text">110k views * 20 days ago</p>
                        </div>
                    </div>

              
            </div>
        
    )
}

export default VideoSmall
