import React, { Component } from "react";
import UniTrh from "./components/UniTrh/UniTrh";

import HomeFooter from "./components/HomeFooter/HomeFooter";
import HomeNav from './components/HomeNav/HomeNav'
import Info from "./components/InfoUNIT/Info";
import Category from "./components/Kategorie/category";
import Partners from "./components/Partneri/partners";
import Application from "./components/Prihlaska/application";
import Intro from "./components/Uvod/intro";
import Organisers from "./components/Organisers/organisers";


class Home extends Component {
    render() {
        return(
            <>
            <HomeNav/>
            <Intro/>
            <Info/>
            <UniTrh />
            <Category/>
            <Application/>
            <Partners/>
            <Organisers />
            
            <HomeFooter/>
            </>
        );
    }
}

export default Home;