import { Avatar , Button } from '@material-ui/core'
import { Apps , Menu , Notifications , Search , VideoCall} from '@material-ui/icons'
import React from 'react';
import logo from '../../assets/logo1.png'
import './styles.css'

const header = () => {
    return (
        <div className="header">
        <div className="header__left">
          <Menu className="header__menuicon" />
          <img className="header__logo" src={logo} alt="Youtube" />
        </div>

        <form className="header__center">
        <input className="header__input" placeholder="Search" />
        <Button className="header__btn">
          <Search className="header__searchIcon" />
        </Button>
        </form>

        <div className="header__right">
        <VideoCall />
        <Apps />
        <Notifications />
        <Avatar />
        </div>
        </div>
    )
}

export default header
