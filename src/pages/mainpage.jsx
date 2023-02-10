import React from 'react'
import {Routes,BrowserRouter, Route} from 'react-router-dom';
import TopNavi from './topNavi';
import MainCopy from '../components/firstpage';
import Intro from '../components/secondpage';
import Activity from '../components/thirdpage';
import Partner from '../components/partner';
import ApplyButton from '../components/applyButton';

const Main  = () => {
    return (
        <BrowserRouter>
            <TopNavi />
            <Routes>
                <Route exact path={"/"} element={<MainCopy />}></Route>
                <Route exact path={"/About"} element={<Intro />}></Route>
                <Route exact path={"/Activity"} element={<Activity />}></Route>
                <Route exact path={"/Recruit"} element={<ApplyButton />}></Route>
            </Routes>
            <Partner/>
            <ApplyButton/>
        </BrowserRouter>
    )
} 

export default Main;