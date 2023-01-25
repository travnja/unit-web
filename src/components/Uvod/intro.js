import React, { Component } from "react";

import background_1 from '../../images/banner/unit22/programator_premysli_dark.jpg';
import background_2 from '../../images/banner/unit22/petrus_programator_dark.jpg';
import background_3 from '../../images/banner/unit22/unit22_ceny_dark.jpg';
import background_4 from '../../images/banner/n1.jpg';

import dark from '../../images/bg/5.jpg';
import logo from '../../images/unitLogo/UnIT_logo_2022.png';

import BasicInfo from "./BasicInfo";
import LogoBig from "./LogoBig";

class Intro extends Component {
    render() {
        return(
            <>
            <section id="home">
                <div class="carousel slide" id="carousel-example-generic" data-ride="carousel">
                    <ol class="carousel-indicators text-center">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">

                        <div class="item active">
                            <div class="overlay-slide" style={{backgroundImage: `url(${background_1})`}}>
                            </div>
                            <div class="carousel-caption">
                                <div class="col-sm-7 col-xs-12 text-left">
                                    <h3 class="small"><b>Přihlas se</b><br /> na&nbsp;UNIT&nbsp; 2022</h3>
                                    <div class="line"></div>
                                    <p>Soutěž v týmu o 3-4 členech</p>
                                    <p></p>
                                    <BasicInfo />
                                </div>
                                <LogoBig />
                                
                                
                            </div>
                        </div>

                        <div class="item">
                            <div class="overlay-slide" style={{backgroundImage: `url(${background_2})`}}>
                            </div>
                            <div class="carousel-caption">
                                <div class="col-sm-7 col-xs-12 text-left">
                                    <h3 class="small">Zúčastni se doprovodného <br />programu</h3>
                                    <div class="line"></div>
                                    <p>A zjisti, jaký je svět IT v praxi</p>
                                    <p></p>
                                    <BasicInfo />
                                </div>
                                <LogoBig />
                            </div>
                        </div>

                        <div class="item">
                            <div class="overlay-slide" style={{backgroundImage: `url(${background_3})`}}>
                            </div>
                            <div class="carousel-caption">
                                
                                <div class="col-sm-7 col-xs-12 text-left">
                                    <h3 class="small"> Vyzkoušej si progamování<br /><b>v praxi</b></h3>
                                    <div class="line"></div>
                                    <p>Soutěžte o ceny v&nbsp;hodnotě&nbsp;70&nbsp;000 Kč!</p>
                                    <p></p>
                                    <BasicInfo />
                                </div>
                                <LogoBig />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Intro;