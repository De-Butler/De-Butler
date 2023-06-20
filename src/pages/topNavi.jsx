import React from 'react'
import { HashLink } from 'react-router-hash-link';

const topNavi = () => {
    return (
        <div className="Navibox">
            <HashLink smooth to="/#Home" className="Title">De-Butler</HashLink>
            <div className="Menu">
                <HashLink smooth to="/#About" className='Link' >학회 소개</HashLink>
                <HashLink smooth to="/#Activity" className='Link'>학회 활동</HashLink>
                <HashLink smooth to="/#Recruit" className='Link'>1.5기 모집</HashLink>
            </div>
        </div>
    )
}

export default topNavi;