import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const VideoSmall = ({ channelView = false,}) => {
  const history = useHistory();
  const handleClickRedirect = () => history.push("/watch");
  return (
    <div
      onClick={handleClickRedirect}
      className={`videoSmall ${channelView && "videoSmall__channelView"}`}
    >
      <div className="videoSmall__left">
        <img
          src={"https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}
          alt="thumbnail"
          className={`videoSmall__thumbmail ${
            channelView && "videoSmall__channelView__img"
          }`}
        />
      </div>

      <div className="videoSmall__right">
        <p className="videoSmall__title">Nature Video</p>

        <div className="videoSmall__texts videothumb__texts">
          {!channelView && (
            <p className="videothumb__text">Nature Channel </p>
          )}

          <p className="videothumb__text">110k views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSmall;