import React, { Component } from "react";

import logo from '../../images/bestprague.png';
import logo_small from '../../images/bestprague_small.jpg';

class HomeFooter extends Component {
    render() {
        return(
            <>
            <section id="footer">
                <div class="footer_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <h3 class="menu_head">Menu</h3>

                                <div class="footer_menu">
                                    <ul>
                                        <li><a href="/#home" class="page-scroll">Úvod </a></li>
                                        <li><a href="/#UnIT" class="page-scroll">UnIT</a></li>
                                        <li><a href="/#zadani" class="page-scroll">Kategorie</a></li>
                                        <li><a href="/#application" class="page-scroll">Přihláška</a></li>
                                        <li><a href="/#partneri" class="page-scroll">Partneři</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <h3 class="menu_head">Kontaktujte nás</h3>

                                <div class="footer_menu_contact">
                                    <ul>
                                        <li><img src={logo} alt="BEST Prague logo" class="best-prague-logo"/></li>
                                        <li><i class="fa fa-envelope"></i>
                                            <a href="mailto:prague@best.eu.org">prague@best.eu.org</a></li>
                                        <li><i class="fa fa-globe"></i>
                                            <a href="https://www.bestprague.cz">www.bestprague.cz</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <h3 class="menu_head">BEST Prague</h3>

                                <div class="footer_menu_contact">
                                    Akci pořádá organizace BEST Prague.
                                    <p><img src={logo_small} alt="BEST Prague" class="best-prague-foto"/></p>
                                    Přidej se k nám, napiš na <a href="mailto:hr@bestprague.cz">hr@bestprague.cz</a>!
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="footer_b">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="footer_bottom">
                                    <p class="text-block"> &copy; Copyright reserved to <span>BESTPrague </span></p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="footer_mid pull-right">
                                    <ul class="social-contact list-inline">
                                        <li><a target="_blank" href="https://www.facebook.com/BESTPragueCTU/?fref=ts"><i
                                                class="fa fa-facebook"></i></a></li>
                                        <li><a target="_blank" href="https://bestprague.cz"><i class="fa fa-globe"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default HomeFooter;