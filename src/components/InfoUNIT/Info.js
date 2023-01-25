import React, { Component } from "react";
import { prihlasky_do } from "../../config";

import logo_fsp from '../../images/Partneri/UnIT22/FSP-01.png';
import logo_best from '../../images/BEST_normalised500x500-01.png'; 
import logo_sunie from '../../images/Partneri/UnIT22/Sunie-01.png';


function Logo(props){
    return (
        <>
            <li class="col-xs-4 single-portfolio identity">
                        <img src={props.logo} alt={props.alt}
                                class="img-responsive pull-right"/>
            </li>
        </>
    )
}


class Info extends Component {
    render() {
        return(
            <>
            <section class="section" id="UnIT">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_header text-center">
                                <h1 class="feature_title no-transform">o UnITu</h1>
                                <h4 class="feature_sub">
                                    <p>UnIT je <b>Un</b>iverzitní <b>IT</b> soutěž, kterou pořádáme my, studenti z klubu BEST Prague, ve spolupráci s firmami. 
                                    Principem ho můžeme přirovnat k hackathonu - soutěží se totiž ve 3-4 členných týmech v jedné ze tří kategorií a na zpracování 
                                    zadání je necelých 8 hodin. Snažíme se, aby byl UnIT ale mnohem víc.</p>

                                    <br />
                                    <br />
                                    <p>
                                        Přihlas se do <strong>{prihlasky_do}</strong>
                                    </p>
                                </h4>
                                </div>
                        </div>
                    </div>
                </div>
                                    
                <div class="row">
                    <div class="main_feature text-center">

                        <br />
                        <div class="col-md-3 col-xs-12 col-sm-2"> </div>
                        
                        
                        
                        <div class="col-md-3 col-xs-12 col-sm-4">

                            <div class="feature_content">
                                <i class="fa fa-wrench"></i>
                                <h3>Soutěž UnIT</h3>

                                <p>UnIT je soutěž pro všechny vysokoškoláky. Soutěží se ve 3-4 členných týmech v jedné ze tří kategorií.
                                    Zadání každopádně nejsou nicneříkající algoritmické úlohy, ale vždy reálný problém, se kterým se potýká opravdová firma.
                                </p>
                                <a href="#zadani" class="btn btn-main">Více o kategoriích soutěže</a>
                            </div>
                        </div>

                        <div class="col-md-3 col-xs-12 col-sm-4">
                            <div class="feature_content">
                                <i class="fa fa-pencil"></i>

                                <h3>Doprovodný UniTrh</h3>

                                <p>Součástí UnITu je i doprovodný program, který jsme pojmenovali UniTrh. Těšit se můžeš na spoustu stánků jak od firem,
                                    tak od ostatních studentských klubů. Vše zatím stále plánujeme, aktuality ale můžeš sledovat na <a href="https://fb.me/e/225PQLLeY"> Facebooku </a></p>

                                <a href="#funtrack" class="btn btn-main"> Více o doprovodném UniTrhu</a>
                            </div>
                        </div>
                    </div>
                </div>                                    

                <br />
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_header text-center">
                            <h4 class="feature_sub">
                                    <br />
                                    <p>Podívejte se na video z posledního offline ročníku - UnIT 2019</p>
                                
                                
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/G99JRwT0gDI" title="YouTube video" frameborder="0" allow="accelerometer; 
                                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>    
                                    <br/>
                                    <br/>
                                <br />
                                <p>
                                    Soutěž UnIT se koná ve středu <strong>13. dubna 2022</strong> v pražských Dejvicích. Naším cílem je umožnit studentům nahlédnout 
                                    do firemní praxe, seznámit je s možnými zaměstnavateli ale i zlepšit se v komunikaci a prezentačních dovednostech.
                                </p>
                                </h4>
                                <br />
                                <br />
                                <p class="fb-event">Sleduj aktuality zde:<br />
                                    <a target="_blank" href="https://fb.me/e/225PQLLeY/"
                                       class="btn btn-fb"><i class="fa fa-facebook"></i>&nbsp; Událost na facebooku</a>
                                </p>                

                                <p>
                                    Soutěž organizuje klub BEST, který je součástí Studentské unie ČVUT, ve spolupráci s Fondem studentských projektů.
                                </p>
                                <ul>
                                    <Logo website="https://portal.cvut.cz/informace-pro-studenty/stipendia-nadace-granty/fond-studentskych-projektu-fsp/" logo={logo_fsp} alt="Fond studentských projektů" />
                                    <Logo website="https://bestprague.cz" logo={logo_best} alt="BEST Prague" />
                                    <Logo website="https://su.cvut.cz" logo={logo_sunie} alt="Studentská unie ČVUT" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Info;