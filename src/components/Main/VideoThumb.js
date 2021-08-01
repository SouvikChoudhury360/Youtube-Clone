import { Avatar } from "@material-ui/core";
import React from 'react';
import { useHistory } from "react-router-dom";

const VideoThumb = () => {
  const history = useHistory();
  const handleThumbClick = () => history.push('/watch');
  const handleAvatarClick = () => history.push('/PreviewChannel');
  return (
    <div className="videothumb">
      <img 
      onClick={handleThumbClick}
      className="videothumb__thumbnail" 
      src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      alt="video Thumbnail" />
      <div className="videothumb__details">
        <Avatar onClick={handleAvatarClick}/>

        <div className="videothumb__channel">
          <h1 className="videothumb__title">
            Create a yt clone
          </h1>
          <div className="videothumb__texts">
            <p className="videothumb__text">G-Apps clone</p>
            <p className="videothumb__text">55 views * 20 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoThumb;
