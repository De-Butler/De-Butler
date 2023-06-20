import React from 'react'
import { HashLink } from 'react-router-hash-link';
import DeButlerLogo from '../assets/img/De-Butler-white.png';

const topNavi = () => {
    return (
        <div className="Navibox">
            <HashLink smooth to="/#Home" className="Title"><img src={DeButlerLogo} style={{height:"60px"}} /></HashLink>

            <div className="Menu">
                <HashLink smooth to="/#About" className='Link' >학회 소개</HashLink>
                <HashLink smooth to="/#Activity" className='Link'>학회 활동</HashLink>
                <HashLink smooth to="/#Recruit" className='Link'>1.5기 모집</HashLink>
            </div>
        </div>
    )
}

export default topNavi;