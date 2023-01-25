import React, { Component } from "react";

import logo_bosch from '../../images/Partneri/UnIT22/Bosch-01.png';
import logo_abra from '../../images/Partneri/UnIT22/Abra-01.png';
import logo_comap from '../../images/Partneri/UnIT22/ComAp-01.png';

import Counter from "./Counter";
import Prizes from "./prizes";
import Faq from "./faq";


function CategoryPanel(props){
    return (
        <>
        <div class="single_table">
            <div class="plan_wraper"></div>
                <ul>
                    <li class="plan"><h3>{props.title}</h3><span style={{opacity: "0;"}}>{props.subtitle}</span>
                    </li>
                    <li class="partner">
                        <div class="row">
                            <div class="col-xs-8 col-xs-push-2">
                                <figure>
                                    <a href="#" target="_blank" data-toggle="modal" data-target="#oFirmeOne">
                                        <img class="img-responsive"  src={props.logo} alt={props.logoAltText} />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" data-toggle="modal" data-target={props.aboutCategory}>Více o kategorii</a></li>    
                    <li><a href="#" data-toggle="modal" data-target={props.aboutCompany}>{props.aboutCompanyHeadline}</a></li>
                    {/*<li><strong>Přihlášky budou již brzy otevřeny</strong></li>*/}
                    <li class="price_button">
                        <a href={props.applicationSingle} class="btn btn-main featured">Přihlásit se jako jednotlivec</a>
                    </li>
                    <li class="price_button">
                        <a href={props.applicationTeam} class="btn btn-main featured">Přihlásit tým</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

class Category extends Component {
    render() {
        return(
            <>
            <section class="section" id="zadani">
                <div class="container">
                <div class="divider"></div>

                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_header text-center">
                                <h1 class="feature_title no-transform"><b>Soutěžní kategorie a zadání</b></h1>
                                <h4>Tradičně je na UnITu na výběr ze tří kategorií. A stejně je tomu i letos.</h4>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
 
                        <div class="text-center pricing">
                        {/* <div class="col-md-0 col-xs-12 col-sm-12"> </div> */}
                            <div class="col-md-4 col-xs-15 col-sm-18" id="kategorie-abra">

                                    <CategoryPanel title="Chytrá inventura" subtitle="Webová aplikace pro chytrá zařízení" logo={logo_abra} logoAltText="Logo ABRA Software"
                                    aboutCategory="#modalCatOne" aboutCompany="#oFirmeOne" aboutCompanyHeadline="Více o firmě ABRA Software"
                                    applicationSingle="/application-1-single" applicationTeam="/application-1-team" />

                            </div>


                            <div class="col-md-4 col-xs-15 col-sm-12" id="kategorie-abra">

                                    <CategoryPanel title="Kontrola stability a predikce chyb" subtitle="Analýza dat z výroby za cílem optimalizace" logo={logo_comap} logoAltText="Logo ComAp"
                                    aboutCategory="#modalCatThree" aboutCompany="#oFirmeThree" aboutCompanyHeadline="Více o firmě ComAp"
                                    applicationSingle="/application-3-single" applicationTeam="/application-3-team" />

                            </div>

                            <div class="col-md-4 col-xs-15 col-sm-12" id="kategorie-bosch">
                                <CategoryPanel title="Skladová logistika" subtitle="Aplikace pro správu a přehled zásobování" logo={logo_bosch} logoAltText="Logo Bosch"
                                aboutCategory="#modalCatTwo" aboutCompany="#oFirmeTwo" aboutCompanyHeadline="Více o firmě Bosch"
                                applicationSingle="/application-2-single" applicationTeam="/application-2-team" />
                            </div>
 
                        </div>
                    </div>
                    <div class="feature_header text-center">
                        <h4>
                            Hledáš kolegu do týmu? Zkus napsat na naší Facebookovou
                            <strong><a href="https://www.facebook.com/groups/3141426076114075"> skupinu</a></strong>
                            .
                        </h4>
                        <br />
                        <br />
                    </div>
                    <div class="divider"></div>
                </div>
                    
                <div class="container">
                    <br />
                    <Prizes /> 
                    <br />
                    <br />
                    <br />
                    <Faq />
                </div>
            </section>
                                        
            <Counter />
            

{/* PŘEDZADÁNÍ */}
            <div id="modalCatOne" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">ABRA Software - Chytrá inventura</h4>
                        </div>
                        <div class="modal-body">
                            <i>
                                <br/>
                                <p><b>O co půjde </b><br />
                                    V Abře potřebujeme vyrobit webovou aplikaci, která zjednoduší lidem skladové inventury. K dispozici bude na telefonu nebo tabletu, 
                                    někdo s ní bude pracovat také na čtečce čárových kódu, ostatní využijí třeba jen foťák na telefonu. Veškerý hardware Ti zapůjčíme, 
                                    ať můžeš všechno otestovat v praxi. Připravíme pro Tebe i virtuální sklad se zbožím, kde si v praxi vyzkoušíš, jak jednotlivé kódy 
                                    naskenovat a udělat si takovou malou inventuru na vlastní kůži. K dispozici Ti bude i hotové API a přehled metod, které budeš pro 
                                    komunikaci potřebovat. Stejně tak jsme Ti k dispozici i my. Kdykoli s námi můžeš cokoli konzultovat. 
                                </p>
                                <p>
                                    Technologie: JavaScript, HTML5, (je na tobě, jestli to bude SPA, nebo něco, co má výstup ze serveru)

                                </p>
                                <p>
                                    <b>Pojď prodat svojí práci</b> <br />
                                    Nyní máš jedinečnou příležitost dostat svoji aplikaci mezi naše zákazníky. Nehledě na to, jestli je to tvůj první ročník nebo si 
                                    zasloužíš odznak UnIT veterán.

                                </p>
                                <p>
                                    <b>Jak?</b> <br />
                                    Pomůžeme Ti s propagací, aby se o Tvé appce zákazníci dozvěděli. Přidáme ji do našeho app storu a dáme Ti možnost ji i prodávat, 
                                    takže kromě zkušeností na tom můžeš také něco vydělat. Potkáš se s reálným feedbackem od lidí a aplikaci můžeš dál rozvíjet ve 
                                    spolupráci s naším týmem. To posouvá soutěž na trochu jiný level, co říkáš?
                                </p>
                            </i>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modalCatTwo" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Bosch - Aplikace pro řešení zásobování výrobních linek</h4>
                        </div>
                        <div class="modal-body">
                            <i>
                                <br/>
                                <p>
                                    Základem efektivní štíhlé výroby je včasná a spolehlivá logistika výrobního materiálu mezi výrobními linkami a sklady.
                                </p>
                                <p>
                                    Úkolem bude naprogramovat webovou aplikaci, která umožní správu logistických vláčků, jejich zastávek a materiálu, 
                                    který mezi zastávkami převážejí. Pro jednotlivé entity bude vytvořen CRUD s přihlédnutím na základní uživatelská 
                                    oprávnění aplikace.
                                </p>
                                <p>
                                    Technologie zvolte dle vlastního výběru podle následujících kritérií:
                                    <br />
                                    &nbsp; - přístup k aplikaci pomocí webového rozhraní
                                    <br />
                                    &nbsp; - správné zobrazení aplikace na různých zařízeních (responzivita)
                                </p>
                            </i>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="modalCatThree" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">ComAp  - Prediktivní údržba testovacích přípravků a testů ve výrobě.</h4>
                        </div>
                        <div class="modal-body">
                            <i>
                                <p>
                                    Čas jsou peníze, a proto je důležité jednat proaktivně a nečekat až k nám problémy přijdou. Potřebujeme vytvořit aplikaci, která bude analyzovat testovací data z výroby našich produktů.
                                    Úkolem je vytáhnout důležitá data z xml souborů ohledně testování, uložit je v databazi a ve webové aplikaci je přehledně zobrazit.
                                </p>
                                <p>
                                    Aplikace by měla zobrazovat:
                                    <br />
                                    &nbsp; - Propustnost/Chybovost výroby (Passed, Failed, Retested)
                                    <br />
                                    &nbsp; - Porovnání doby běhu testování
                                    <br />
                                    &nbsp; - Porovnání naměřených hodnot v čase a prediktivně notifikovat v případě blížícího se překročení limitu
                                    <br />
                                    &nbsp; - Vliv uživatele
                                </p>
                            </i>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
                        </div>
                    </div>
                </div>
            </div>

{/* O FIRMÁCH */}
            <div id="oFirmeOne" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">ABRA Software</h4>
                        </div>
                        <div class="modal-body">
                            <i>
                                <br/>
                                <p>
                                    Společnost ABRA Software začala jako start up dvou kamarádů. Ti jsou stále její součástí a je to znát. I když zaměstnáváme přes 200 lidí 
                                    a kromě České republiky působíme také na Slovensku a ve Švýcarsku, pořád u nás vládne přátelský duch. Už 30 let vyvíjíme komplexní ERP systém, 
                                    to znamená obrovské množství příležitostí učit se něco nového. 
                                    </p>
                                <p>
                                    Máme také cloudovou appku pro menší firmy, v Brně provozujeme e-commerce centrum a děláme weby i mobilní aplikace na míru. 
                                    </p>
                                <p>
                                    Na našem softwaru si zakládají známé značky jako je třeba Bonami, Liftago, PrusaResearch, Lekarna.cz nebo Profimed. Baví nás 
                                    jejich nápady a inovace, jak lidem usnadnit & zpříjemnit život. Jsme jejich spojencem na cestě k užitečnosti. 
                                    </p>
                                <p>
                                    Naše filosofie staví na hodnotách a baťovských principech. Podívej se, jak firemní strategii vnímají 
                                    <a href="https://www.facebook.com/ABRASoftware/videos/682124556480067"> naši ajťáci</a>. 
                                    </p>
                                <p>
                                    Hodnoty, vztahy, strategie, produktivita a pracovní prostředí jsou pro nás důležité – i proto jsme letos získali ocenění 
                                    <a href="https://www.abra.eu/abra-software-patri-k-nejlepe-rizenym-firmam-ceska-za-rok-2021/"> Czech Best Managed Companies </a>
                                    od společnosti Deloitte.
                                    </p>
                                <p>
                                    Držíme palce a těšíme se na další příležitost, kdy se potkat! 
                                    </p>
                                <p>
                                    Tým ABRA Software

                                </p>
                            </i>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
                        </div>
                    </div>
                </div>
            </div>
                
            <div id="oFirmeTwo" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Bosch</h4>
                        </div>
                        <div class="modal-body">
                            <i>
                                <br/>
                                <p>
                                    Společnost Robert Bosch v Českých Budějovicích byla založena 1. května 1992 jako společný podnik stuttgartské společnosti 
                                    Robert Bosch GmbH a Motoru Jikov, a. s. V roce 1995 se společnost Bosch stala jediným vlastníkem společnosti v Českých Budějovicích.
                                </p>
                                <p>
                                    Pro novou společnost byl kompletně vystavěn nový závod s nejmodernějším vybavením a infrastrukturou na globální úrovni, 
                                    s vlastním oddělením vývoje a výzkumu včetně zkušebny pro dlouhodobé zkoušky.
                                </p>
                                <p>
                                    Zatím poslední a a velmi důležitou investicí se stalo vývojové a technologické centrum otevřené v září 2019. 
                                    Do samotné stavby budovy a vybavení laboratoří firma investovala na 850 milionů korun. 600 vývojářů se tu 
                                    zaměřuje na aplikovaný vývoj automobilových komponentů pro zákazníky z celého světa.
                                </p>
                                <p>
                                    Kariéra v Boschi? <a href="https://www.bosch.cz/kariera/">Více zde</a>
                                </p>
                                
                            </i>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="oFirmeThree" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">ComAp</h4>
                        </div>
                        <div class="modal-body">
                            <i>
                                <br/>
                                <p>
                                    Jsme česká společnost, která nabízí své produkty po celém světě. Vyvíjíme řídicí systémy pro primární i záložní 
                                    zdroje energie a příslušný software. Naše produkty dodáváme do velkých zaoceánských lodí, nemocnic nebo datových center. 
                                    Zajišťujeme přísun energie do O2 Arény v Praze, elektrifikujeme celé ostrovy v Tichomoří nebo zajišťujeme dodávky energie 
                                    na plošině v Severním moři. 
                                </p>
                                <p>
                                    V součastnosti máme 13 poboček a bezmála 500 zaměstnanců po celém světě. Ačkoli už dnes působíme globálně, vznikli jsme v 
                                    ČR na základě nápadu tří absolventů ČVUT, a to v roce 1991. Takže máme už 30 let zkušeností. Za posledních několik let ComAp 
                                    hodně vyrostl. Z malé firmy rodinného charakteru se stala dynamicky rostoucí společnost. Přesto u nás najdete přátelskou, až 
                                    rodinnou atmosféru. Kolegové spolu často tráví i volný čas, účastní se různých sportovních aktivit, nebo si domluví společné 
                                    grilování na terase naší budovy v Praze 7 – Holešovicích. 
                                </p>
                                <p>
                                    Rádi Vám o společnosti řekneme víc, až se potkáme na UnIT2022.

                                </p>
                            </i>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
                        </div>
                    </div>
                </div>
            </div>
            

            

            
            </>
        );
    }
}

export default Category;