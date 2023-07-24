import React from 'react'
import {Routes,BrowserRouter, Route} from 'react-router-dom';
import TopNavi from './topNavi';
import MainCopy from '../components/firstpage';
import Intro from '../components/introduce';
import Activity from '../components/activity';
import Partner from '../components/partner';
import ApplyButton from '../components/applyButton';
import Footer from '../components/footer';

const Main  = () => {
    document.body.style.overflowX = "hidden";

    return (
        <BrowserRouter>
            <TopNavi />
            <Routes>
                <Route exact path={"/"} element={<MainCopy />}/>
                <Route exact path={"/About"} element={<Intro />}/>
                <Route exact path={"/Activity"} element={<Activity />}/>
                <Route exact path={"/Recruit"} element={<ApplyButton />}/>
            </Routes>
            <div style={{width:"100vw"}}>
                <Partner/>
                <ApplyButton/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
} 

export default Main;