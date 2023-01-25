import { Component } from "react";

import logo_best from '../../images/Kluby/BEST-01.png';
import logo_avc from '../../images/Kluby/AVC-01.png';
import logo_cajovna from '../../images/Kluby/Cajovna-01.png';
import logo_eforce from '../../images/Kluby/eForce-01.png';
import logo_witches from '../../images/Kluby/wITches-01.png';
import logo_fitpp from '../../images/Kluby/Fitpp-01.png';
import logo_pmfel from '../../images/Kluby/Pmfel-01.png';
import logo_crs from '../../images/Kluby/CzechRocketSociety-01.png';
import logo_empty from '../../images/Kluby/Empty-01.png';



function Klub(props){
        return (
            <>
                <li class="col-xs-2 single-portfolio identity">
                    <figure>
                        <img style={{height:"99%;", width:"99%;"}} src={props.logo}
                                alt={props.altText}
                                class="img-responsive pull-right"/>
                    </figure>
                </li>
            </>
        )
    }

class FunTrack extends Component{
        render(){
                return (
                        <>
                        <section class="" id="funtrack">
                                <div class="container">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                                <div class="feature_header text-center">
                                                        <h1 class="feature_title no-transform">Doprovodný program <br /> UniTrh</h1>
                                                        <h4 class="feature_sub">
                                                                <p>
                                                                        Součástí UnITu je i veletrh IT firem UniTrh. Firmy mohou kolemjdoucí navštívit a pobavit se s nimi o tom, jak IT svět funguje.
                                                                        Jak to funguje u nich, jaké se používají technologie, nebo rovnou klást otázky na tělo - kolik za práci u nich dostaneš.
                                                                </p>
                                                                <p>
                                                                        Vedle firem najdeš však spoustu stánků čistě pro zábavu, kde business už nejede tolik. Zastavit se můžeš za studentskými kluby,
                                                                        virtuální realitou nebo třeba s čokoládovou fontánou.
                                                                </p>
                                                                <p>
                                                                        I UniTrh je samozřejmě jedna <b>velká soutěž</b>. Tvým úkolem je oběhnout stánky a dostávat razítka. Lísteček s razítky jde do slosování o ceny a za každé 
                                                                        razítko se zvyšuje pravděpodobnost výhry. A o co se hraje? 
                                                                </p>
                                                        </h4>
                                                        <div class="row">
                                                                <div class="text-left col-md-5"></div>
                                                                <div class="text-left col-md-7">
                                                                        <ul>
                                                                                <li> - 3 vouchery na letenky v hodnotě 50€ od <a href="https://www.kiwi.com/" target="_blank">Kiwi.com</a></li>
                                                                                <li> - 20 voucherů na virtuální realitu od <a href="https://www.divrlabs.com/cs/" target="_blank">DIVR Labs</a></li>
                                                                                <li> - 3 deskové hry dle výběru od <a href="https://mindok.cz/" target="_blank">Mindok</a></li>
                                                                                <li> - 2 hry virtuální reality od <a href="https://www.trapcatch.com/" target="_blank">TrapCatch</a> </li>
                                                                                <li> - 5 voucherů od společnosti <a href="https://crickeaters.cz/" target="_blank">Crickeaters</a> </li>
                                                                        </ul>
                                                                </div>
                                                                <div></div>

                                                        </div>
                                        
                                                        <div class="row">
                                                                <ul class="portfolio-wrap" id="portfolio_items2" style={{paddingTop: "1 0px"}}>
                                                                        <Klub logo={logo_pmfel}/>
                                                                        <Klub logo={logo_eforce}/>
                                                                        <Klub logo={logo_cajovna}/>
                                                                        <Klub logo={logo_crs}/>
                                                                        <Klub logo={logo_witches}/>
                                                                        <Klub logo={logo_fitpp}/>
                                                                </ul>
                                                        </div>
                                                        <p>
                                                                Ano, na UniTrhu se kromě BESTu setkáš i s těmito studentskými kluby
                                                        </p>

                                                                
                                                                

                                                </div>
                                        </div>
                                </div>
                        </section>
                        </>
                )
        }
}
export default FunTrack;