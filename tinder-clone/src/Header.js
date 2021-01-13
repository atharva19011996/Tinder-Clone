import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img className="header__logo" src ="data:image/png;base64,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" alt=""/>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
