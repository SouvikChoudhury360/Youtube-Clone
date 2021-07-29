import { Home, ExpandMore, OndemandVideo, Restore, Subscriptions, ThumbUp, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons';
import React from 'react';
import './style.css'


const Sidebar = () => {
    return (
        <div className ="sidebar">
            <div className="sidebar__buttons">
            <div className="sidebar__btn sidebar__btn--active">
                <Home className="sidebar_icon" />
                <p>Home</p>
            </div>
            <div className="sidebar__btn ">
                <Whatshot className="sidebar_icon" />
                <p>Trending</p>
            </div>
            <div className="sidebar__btn ">
                <Subscriptions className="sidebar_icon" />
                <p>Subscriptions</p>
            </div>
            </div>
            <div className="sidebar__buttons botttom">
            <div className="sidebar__btn ">
                <VideoLibrary className="sidebar_icon" />
                <p>Libraries</p>
            </div>
            <div className="sidebar__btn ">
                <Restore className="sidebar_icon" />
                <p>History</p>
            </div>
            <div className="sidebar__btn ">
                <OndemandVideo className="sidebar_icon" />
                <p>Your videos</p>
            </div>
            <div className="sidebar__btn ">
                <WatchLater className="sidebar_icon" />
                <p>Watch Later</p>
            </div>
            <div className="sidebar__btn ">
                <ThumbUp className="sidebar_icon" />
                <p>Liked videos</p>
            </div>
            <div className="sidebar__btn ">
                <ExpandMore className="sidebar_icon" />
                <p>Show More</p>
            </div>
            </div>
        </div>
    )
}

export default Sidebar;
