import React, { Component } from "react";

class Counter extends Component{
        render(){
                return(
                        <>
                        <section id="counter_area">
                                <div class="facts">
                                <div class="container">
                                        <div class="col-md-3 col-xs-12 col-sm-6 columns">
                                        <div class="facts-wrap">
                                                <div class="graph">
                                                <div class="graph-left-side">
                                                        <div class="graph-left-container">
                                                        <div class="graph-left-half"></div>
                                                        </div>
                                                </div>
                                                <div class="graph-right-side">
                                                        <div class="graph-right-container">
                                                        <div class="graph-right-half"></div>
                                                        </div>
                                                </div>
                                                <i class="fa fa-group fa-3x fw"></i>

                                                <div class="facts-wrap-num">
                                                        <span class="counter">100</span>
                                                </div>
                                                </div>
                                                <h6>Soutěžících</h6>
                                        </div>
                                        </div>
                                        <div class="col-md-3 col-xs-12 col-sm-6 columns">
                                        <div class="facts-wrap">
                                                <div class="graph">
                                                <div class="graph-left-side">
                                                        <div class="graph-left-container">
                                                        <div class="graph-left-half"></div>
                                                        </div>
                                                </div>
                                                <div class="graph-right-side">
                                                        <div class="graph-right-container">
                                                        <div class="graph-right-half"></div>
                                                        </div>
                                                </div>
                                                <i class="fa fa-sitemap fa-3x fw"></i>

                                                <div class="facts-wrap-num"><span class="counter">3</span></div>
                                                </div>
                                                <h6>Kategorie</h6>
                                        </div>
                                        </div>
                                        <div class="col-md-3 col-xs-12 col-sm-6 columns">
                                        <div class="facts-wrap">
                                                <div class="graph">
                                                <div class="graph-left-side">
                                                        <div class="graph-left-container">
                                                        <div class="graph-left-half"></div>
                                                        </div>
                                                </div>
                                                <div class="graph-right-side">
                                                        <div class="graph-right-container">
                                                        <div class="graph-right-half"></div>
                                                        </div>
                                                </div>
                                                <i class="fa fa-hourglass-half fa-3x fw"></i>

                                                <div class="facts-wrap-num"><span class="counter">7</span></div>
                                                </div>
                                                <h6>Hodin</h6>
                                        </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6 col-sm-6 columns">
                                        <div class="facts-wrap">
                                                <div class="graph">
                                                <div class="graph-left-side">
                                                        <div class="graph-left-container">
                                                        <div class="graph-left-half"></div>
                                                        </div>
                                                </div>
                                                <div class="graph-right-side">
                                                        <div class="graph-right-container">
                                                        <div class="graph-right-half"></div>
                                                        </div>
                                                </div>
                                                <i class="fa fa-building fa-3x fw"></i>

                                                <div class="facts-wrap-num"><span class="counter">6</span></div>
                                                </div>
                                                <h6>Firem</h6>
                                        </div>
                                        </div>
                                </div>
                                </div>
                        </section>
                        </>
                )
        }
}
export default Counter;