import React, { Component } from "react";

import logo from '../../images/unitLogo/UnIT_logo_2022_small.png';

class HomeNav extends Component {
    render() {
        return(
            <>
            <header id="section_header" class="navbar-fixed-top main-nav" role="banner">
                <div class="container">
                    <div class="navbar-header ">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">
                            <img src={logo} alt="UnIT logo" class="img-responsive" style={{height:'300%'}}/>
                        </a>
                        
                    </div>
                    <nav class="collapse navbar-collapse navigation" id="bs-example-navbar-collapse-1" role="navigation">
                        <ul class="nav navbar-nav navbar-right ">
                            <li><a href="/#home" class="page-scroll">Úvod</a></li>
                            <li><a href="/#UnIT" class="page-scroll">Unit</a></li>
                            <li><a href="/#zadani" class="page-scroll">Kategorie</a></li>
                            <li><a href="/#funtrack" class="page-scroll">Doprovodný UnITrh</a></li>
                            <li><a href="/#application" class="page-scroll">Přihláška</a></li>

                            {/* <li class="dropdown">
                                <a href="/#application" class="page-scroll dropdown-toggle">Přihláška</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                  <a class="dropdown-item disabled" href="/application-1-single">IoT aplikace jednotlivec</a>
                                  <a class="dropdown-item disabled" href="/application-2-single">Webová aplikace jednotlivec</a>
                                  <a class="dropdown-item disabled" href="/application-1-team">IoT aplikace tým</a>
                                  <a class="dropdown-item disabled" href="/application-2-team">Webová aplikace tým</a>
                                </div>
                            </li> */}
                            <li><a href="/#partneri" class="page-scroll">Partneři</a></li>
                            <li><a href="/#organisers" class="page-scroll">Organizátoři</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            </>
        );
    }
}

export default HomeNav;