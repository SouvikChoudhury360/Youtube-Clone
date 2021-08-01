import React from 'react';
import"./style.css";
import videoURL from '../../assets/videos/video.mp4'
import { MoreHoriz, PlaylistAdd, Reply, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons';
import { Avatar, Button } from "@material-ui/core";
import VideoSmall from '../VideoSmall/VideoSmall';
import { useHistory } from 'react-router-dom';

const Watch = () => {
    const history = useHistory();
    const handleAvatarRedirect = () =>history.push("/PreviewChannel")
    return (
        <div className="watch">
      <div className="watch__wrap">
        <div className="watch__left">
          <video className="watch__video" autoplay controls>
            <source src={videoURL} type="video/mp4" />
          </video>
          <div className="watch__leftBtm">
              <h1 className="watch__title">Nature at its best</h1>
              
              <div className="watch__videoInfo">
                  <div className="watch__videoInfoLeft">
                  <p className="videothumb__text">55 views * Aug 01, 2021</p>
                  </div>
                  <div className="watch__videoInfoRight">
                      <div className="watch__likeContainer">
                          <div className="watch__LikeWrap">
                              <div className="watch__likeBtnContainer color--gray">
                                  <ThumbUpAlt className="watch__icon" />
                                  <p>100k</p>

                              </div>
                              <div className="watch__likeBtnContainer color--gray">
                                  <ThumbDownAlt className="watch__icon" />
                                  <p>2</p>

                              </div>
                          </div>
                         
                          
                          <div className="watch__likeDislikes" />
                          </div>
                          <div className="watch__likeBtnContainer color--gray">
                                  <Reply className="watch__icon share-icon" />
                                  <p>SHARE</p>

                              </div>
                              <div className="watch__likeBtnContainer color--gray">
                  <PlaylistAdd className="watch__icon play-addIcon" />
                  <p>SAVE</p>
                </div>
                              <div className="watch__likeBtnContainer color--gray">
                                  <MoreHoriz className="watch__icon play-addIcon" />
                                  <p>SAVE</p>

                              </div>
                            
                  </div>
              </div>
          </div>
          <div className="watch__details">
              <div className="watch__detailsContainer">
              <div className="videothumb__details watch__avatarWrap">
        <Avatar 
        style={{cursor: 'pointer'}} 
        onClick={handleAvatarRedirect}/>

        <div className="videothumb__channel">
          <h1 className="videothumb__title">
            Nature Video
          </h1>
         
            <p className="videothumb__text watch__subCount">50M Subscribers</p>
            
          </div>
        
      </div>
      <Button className="watch__subBtn"color='primary' variant="contained">
          SUBSCRIBE
      </Button>
              </div>
              <div className="watch__description">
                  <p>
                  The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since. During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[5][6] With the Industrial revolution, nature increasingly became seen as the part of reality deprived from intentional intervention: it was hence considered as sacred by some traditions (Rousseau, American transcendentalism) or a mere decorum for divine providence or human history (Hegel, Marx). However, a vitalist vision of nature, closer to the presocratic one, got reborn at the same time, especially after Charles Darwin.
                  </p>
                  <p className="watch__showMore">
                      SHOW MORE
                  </p>
              </div>
          </div>

        </div>
        <div className="watch__right">
            <VideoSmall />
            <VideoSmall /> 
            <VideoSmall />
             <VideoSmall />
             <VideoSmall />

        </div>
      </div>
    </div>
    )
}

export default Watch

