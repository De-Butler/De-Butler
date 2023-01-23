import React from 'react'
import {Routes,BrowserRouter, Route} from 'react-router-dom';
import TopNavi from './topNavi';
import MainCopy from '../components/firstpage';
import Intro from '../components/secondpage';
import Activity from '../components/thirdpage';

const Main  = () => {
    return (
        <BrowserRouter>
            <TopNavi />
            <Routes>
                <Route exact path={"/"} element={<MainCopy />}></Route>
                <Route exact path={"/About"} element={<Intro />}></Route>
                <Route exact path={"/Activity"} element={<Activity />}></Route>
            </Routes>
            
        </BrowserRouter>
    )
} 

export default Main;