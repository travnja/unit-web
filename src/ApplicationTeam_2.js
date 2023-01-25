import React, { Component } from "react";
import HomeFooter from "./components/HomeFooter/HomeFooter";
import HomeNav from "./components/HomeNav/HomeNav";

import {spusteny_prihlasky, uzavreny_prihlasky, soutez_od, soutez_kde, prihlasky_do, prihlasky_od, uzavreni_prihlasek} from "./config";

class ApplicationTeam_2 extends Component {
    render() {
        return(
            <>
            <HomeNav/>
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <div class="col-md-12 col-sm-12 col-xs-12">

                                <div class="menu-prihlaska">
                                    <iframe src="https://app.bestprague.cz/teams/add/UnIT%202022/63" id="s_cs"
                                    class="prihlaska" frameborder="0"></iframe>
                                    {/*
                                    <h1>Přihlásit tým na EMEC 2021</h1>
                                    <p>Přihlášky ještě nejsou spuštěny</p>
                                    <p>Přihlášky se spustí {prihlasky_od}</p>
                                    <h1>Přihlášky jsou již uzavřeny</h1>
                                    <p>Soutěž již skončila. Budeš si muset počkat na další ročník.</p>
                                    */}

                                </div>
                                {/*
                                <div class="menu-wrapper">
                                    <div class="menu-items row">
                                        <div class="items">
                                            <a href="?m=cat1" class=" col-xs-12 col-md-6 <?= $m == 'cat1' ? 'open' : ''; ?>" data-target="#s_cat1">
                                                <strong>Big Data</strong>
                                                <img src="../images/logo/logo_pg.png" alt="P&amp;G logo"/>
                                            </a>
                                            <a href="?m=cat2" class=" col-xs-12 col-md-6 <?= $m == 'cat2' ? 'open' : ''; ?>" data-target="#s_cat2">
                                                <strong>Machine Vision</strong>
                                                <img src="../images/logo/logo_valeo.png" alt="Valeo logo"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <iframe src="https://app.bestprague.cz/teams/add/HACK2020/47" id="s_cat1"
                                            class="<?= $m == 'cat1' ? '' : 'none'; ?>  prihlaska" frameborder="0"></iframe>
                                    <iframe src="https://app.bestprague.cz/teams/add/HACK2020/48" id="s_cat2"
                                            class="<?= $m == 'cat2' ? '' : 'none'; ?>  prihlaska" frameborder="0"></iframe>
                                </div>
                                */}
                                <p>&nbsp;</p>
                                <p>Nevíš jakou z kategorií vybrat? Koukni na <a href="../#zadani">jejich popis</a>.</p>
            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HomeFooter/>
            </>
        );
    }
}

export default ApplicationTeam_2;