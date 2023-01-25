import React, { Component } from "react";

// hlavni partneri
import logo_abra from '../../images/Partneri/UnIT22/Abra-01.png';
import logo_bosch from '../../images/Partneri/UnIT22/Bosch-01.png';
import logo_comap from '../../images/Partneri/UnIT22/ComAp-01.png';

import logo_baader from '../../images/Partneri/UnIT22/Baader-01.png';
import logo_artin from '../../images/Partneri/UnIT22/ArtinWeb-01.png';
import logo_qminers  from '../../images/Partneri/UnIT22/QMiners-01.png';
import logo_gemsystem from '../../images/Partneri/UnIT22/GemSystem-01.png';
import logo_oksystem from '../../images/Partneri/UnIT22/OkSystem-01.png';
import logo_startupjobs from '../../images/Partneri/UnIT22/StartupJobs-01.png';
import logo_unicorn from '../../images/Partneri/UnIT22/UnicornWeb-01.png';
import logo_2n from '../../images/Partneri/UnIT22/twoN-01.png';
import logo_lamanti from '../../images/Partneri/UnIT22/Lamanti-01.png';

import logo_wormup from '../../images/Partneri/UnIT22/WormUp-01.png';
import logo_hotbee from '../../images/Partneri/UnIT22/HotBee-01.png';
import logo_divr from '../../images/Partneri/UnIT22/Divr-01.png';
import logo_mindok from '../../images/Partneri/UnIT22/Mindok-01.png';
import logo_crickeaters from '../../images/Partneri/UnIT22/CrickEaters-01.png';
import logo_trapcatch from '../../images/Partneri/UnIT22/TrapCatch-01.png';
import logo_avc from '../../images/Kluby/AVC-01.png';
import logo_kiwi from '../../images/Partneri/UnIT22/Kiwi-01.png';



function SmallPartner(props){
    return (
        <>
            <li class="col-xs-3 single-portfolio identity">
                <figure>
                    <a href={props.website} target="_blank">
                        <img style={{height:"94%;", width:"94%;"}} src={props.logo}
                                alt={props.altText}
                                class="img-responsive pull-right"/>
                    </a>
                </figure>
            </li>
        </>
    )
}

class Partners extends Component {
    render() {
        return(
            <>
            <section class="section" id="partneri">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_header text-center">
                                <h3 class="feature_title"><strong>Partneři soutěže</strong></h3>
                                <h4 class="feature_sub"> </h4>
                                <p>
                                    Stránku firmy zobrazíš kliknutím na logo.
                                </p>
                                <div class="divider"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="clearfix"></div>
                
                <br />
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-xs-16 col-md-10 col-md-push-1">
                            {/* HLAVNÍ PARTNEŘI */}
                            <div class="text-center col-xs-12 col-md-10 col-md-push-1" style={{paddingBottom: "30px"}}>
                                Hlavní partneři UnITu
                                <ul class="portfolio-wrap" id="portfolio_items1" style={{paddingTop: "20px"}}>
                                    <li class="col-xs-4 single-portfolio identity">
                                        <figure>
                                            <a href="https://bosch.cz" target="_blank">
                                                <img style={{height:"94%;", width:"94%;"}} src={logo_bosch} alt="Bosch logo"
                                                     class="img-responsive pull-left"/>
                                            </a>
                                        </figure>
                                    </li>
                                    <li class="col-xs-4 single-portfolio identity">
                                        <figure>
                                            <a href="https://www.abra.eu/kariera/?utm_source=fb&utm_medium=HRinzerat&utm_campaign=Best_UnIT" target="_blank">
                                                <img style={{height:"94%;", width:"94%;"}} src={logo_abra} alt="ABRA logo"
                                                     class="img-responsive pull-right"/>
                                            </a>
                                        </figure>
                                    </li>
                                    <li class="col-xs-4 single-portfolio identity">
                                        <figure>
                                            <a href="https://www.comap-control.com/" target="_blank">
                                                <img style={{height:"94%;", width:"94%;"}} src={logo_comap} alt="ComAp logo"
                                                     class="img-responsive pull-right"/>
                                            </a>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        
                            {/* PARTNEŘI */}
                            <div class="clearfix"></div>
                            
                            <div class= "text-center col-xs-12 col-md-10 col-md-push-1">
                                Partneři UnITu
                            </div>

                            
                            <ul class="portfolio-wrap" id="portfolio_items2" style={{paddingTop: "1 0px"}}>

                                
                                    <SmallPartner website="https://qminers.com" logo={logo_qminers} altText="qMiners logo" />
                                    <SmallPartner website="https://www.gemsystem.cz/" logo={logo_gemsystem} altText="GemSystem logo" />
                                    <SmallPartner website="https://artin.cz" logo={logo_artin} altText="Artin logo" />
                                    <SmallPartner website="https://www.2n.com/cs_CZ/" logo={logo_2n} altText="2N logo" />
                                    
                                    <SmallPartner website="https://www.bcpraha.cz/" logo={logo_baader} altText="Baader logo" />
                                    <SmallPartner website="https://www.unicorn.com/cs" logo={logo_unicorn} altText="Unicorn logo" />
                                    <SmallPartner website="https://www.oksystem.com/cz" logo={logo_oksystem} altText="OkSystem logo" />
                                    <SmallPartner website="https://startupjobs.cz" logo={logo_startupjobs} altText="StartupJobs logo" />  

                                    <SmallPartner website="https://www.lamanti.com/" logo={logo_lamanti} altText="Lamanti logo" />  
                                    <SmallPartner website="https://www.kiwi.com/cz/" logo={logo_kiwi} altText="Kiwi.com logo" />  

                            </ul>
                        

                            <div class= "text-center col-xs-12 col-md-10 col-md-push-1">
                                Partneři pro UniTrh
                            </div>
                            <ul class="portfolio-wrap" id="portfolio_items2" style={{paddingTop: "1 0px"}}>
                                <SmallPartner website="https://www.wormup.com/" logo={logo_wormup} altText="WormUp logo" />  
                                <SmallPartner website="https://hotbee.cz/" logo={logo_hotbee} altText="HotBee logo" />  
                                <SmallPartner website="https://crickeaters.cz/" logo={logo_crickeaters} altText="Crickeaters logo" />  
                                <SmallPartner website="https://www.divrlabs.com/cs/" logo={logo_divr} altText="DIVR logo" />  

                                <SmallPartner website="https://mindok.cz/" logo={logo_mindok} altText="Mindok logo" />  
                                <SmallPartner website="https://www.trapcatch.com/" logo={logo_trapcatch} altText="Trapcatch logo" />  
                                <SmallPartner website="https://avc-cvut.cz/" logo={logo_avc} altText="AVC ČVUT logo" />  


                            </ul>
                        </div> 
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Partners;