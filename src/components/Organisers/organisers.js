import React, { Component } from "react";


// fotky organizátorů
import mo_photo from '../../images/CoreTeam/Kosta-01.png'
import pax__photo from '../../images/CoreTeam/Jirka-01.png'

import pr_photo from '../../images/CoreTeam/Fabi-01.png'
import cr_photo from '../../images/CoreTeam/Vopi-01.png'
import graphic_photo from '../../images/CoreTeam/Vasek-01.png'

import unitrh__photo from '../../images/CoreTeam/Bety-01.png'
import unitrh__photoB from '../../images/CoreTeam/MartinH-01.png'

import topic__photo from '../../images/CoreTeam/MartinU-01.png'
import logistik__photo from '../../images/CoreTeam/Danka-01.png'
import food__photo from '../../images/CoreTeam/Vasek-01.png'




function OrganiserText(props){
        return(
                <>
                <br />
                <h4 class="no-transform">{props.name}, {props.position}</h4>
                <h5>{props.school}</h5>
                <p>
                        {props.short_text}
                </p>
                <p>
                        {props.long_text}
                </p>
                </>

        )
}

function OrganiserL(props){
        return(
                <>
                <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                                <br />
                                <img class="rounded float-left"  src={props.photo} alt={props.name} width="80%"/>
                        </div>

                        <div class="col-md-9 col-sm-12 col-xs-12 text-left">
                                <div class="col-md-9">
                                        <OrganiserText name={props.name} position={props.position} short_text={props.short_text} long_text={props.long_text} school={props.school}/>
                                        
                                </div>
                        </div>
                </div>  
                </>
        )
}
function OrganiserR(props){
        return(
                <>

                <div class="row">
                        <div class="col-md-9 col-sm-12 col-xs-12 text-right" >
                                <div class="col-md-3 text-right" />
                                <div class="col-md-9 text-right">
                                        <OrganiserText name={props.name} position={props.position} short_text={props.short_text} long_text={props.long_text}  school={props.school}/>
                                </div>  
                        </div>
                        <div class="col-md-3 col-sm-12 col-xs-12">
                                <br />
                                <img class="rounded float-right"  src={props.photo} alt={props.name} width="80%"/>
                        </div>
                </div>  
                </>
        )
}


class Organisers extends Component{
        render(){
                return(
                        <>
                        <section id="organisers">
                        <div class="divider"></div>
                        <div class="container"  >
                                <div class="row">
                                        <div class="feature_header text-center">
                                                <h1 class="feature_title no-transform"><b>Organizátoři</b></h1>
                                                <br />
                                                 
                                                <OrganiserL photo={mo_photo} name="Konstantin" position="Hlavní organizátor" school="ČVUT FEL"
                                                short_text="Být hlavním pořadatelem natolik velké soutěže je pro mě obrovská výzva."

                                                long_text="Pozice hlavního organizátora umožňuje získat cenné zkušenosti a rozvinout komunikační a 
                                                manažerské schopnosti. Rozhodně jsem mimo svoji komfortní zónu, a proto mě to neskutečně baví! "/>
                                                
                                                <OrganiserR photo={pax__photo} name="Jirka" position="Komunikace s účastníky" school="ČVUT FEL"
                                                short_text=""
                                                long_text="K účasti na organizaci soutěže UnIT mě vedl docela jednoduchý myšlenkový pochod. Kosťa, 
                                                hlavní organizátor, je fajn boreček, proto jsem v jeho týmu nemohl chybět. A proč zrovna komunikace 
                                                s účastníky? Je to pro mě příležitost získat i nové kontakty - rád si s lidmi povídám."/>

                                                <OrganiserL photo={cr_photo} name="Tomáš" position="Spolupráce s firmami" school="Absolvent ČVUT FS"
                                                short_text=""
                                                long_text="Navazování kontaktu s firmami beru jako skvělou příležitost pro získání sebevědomí ke komunikaci 
                                                s lidmi a třeba i k pohovorům. Přestože jsem srdcem strojař, moderní svět IT mě fascinuje. Proto jsem chtěl zažít UnIT 
                                                z pohledu organizátora a nahlédnout tak do více kreativních projektů."/>


                                                <OrganiserR photo={pr_photo} name="Honza" position="Marketing akce" school="ČVUT FEL"
                                                short_text=""
                                                long_text="Jako ajťáka mě přitahuje každá zajímavá IT soutěž. UnIT jsem si ale chtěl zkusit z hlediska organizátora. 
                                                Na škole totiž studuji obor UI/UX, který souvisí s marketingem. Tak jsem si řekl “proč tyhle dvě věci nespojit?”"/>


                                                <OrganiserL photo={graphic_photo} name="Vašek" position="Grafika" school="ČVUT FEL"
                                                short_text="S grafikou si hraju už dlouho, ale většinou zůstala zaprášená někde hluboko na disku."

                                                long_text="A proto jsem se přihlásil do core teamu na UnIT. Nejenom nabrat zkušenosti, 
                                                jak taková marketingová akce probíhá, ale také otestovat svoje schopnosti v praxi."/>


                                                <OrganiserR photo={unitrh__photo} name="Bětka" position="Doprovodný program (UniTrh)" school="ČVUT FBMI"
                                                short_text=""
                                                long_text="UnIT je pro mě první akce v BESTu, kde se budu podílet na organizaci. Beru to jako výzvu, 
                                                při které se naučím spoustu nových věcí. Právě na doprovodném programu jsem se chtěla podílet z jednoho 
                                                prostého důvodu – možnosti, čím zpestřit UnIT jsou téměř neomezené."/>
                                                

                                                <OrganiserL photo={unitrh__photoB} name="Martin" position="Doprovodný program (UniTrh)" school="ČVUT FEL"
                                                short_text=""
                                                long_text="UnIT není pouze prestižní technická soutěž, nicméně je to i event, na kterém se sejde 
                                                spousty aktivních a nadaných studentů z různých oblastí IT. Mojí motivací je proto vytvořit bohatý 
                                                doprovodný program, který zábavnou formou přiblíží nejen svět techniky a IT všem studentům, kteří 
                                                se na UnIT podívají!"/>


                                                <OrganiserR photo={topic__photo} name="Martin" position="Zadání soutěže" school="ČVUT FEL"
                                                short_text=""
                                                long_text="O UnITu jsem nikdy předtím neslyšel. Koncept mě ale zaujal a když mi hlavní organizátor 
                                                Kosťa napsal, tak jsem se v týmu ocitl. Ačkoli jsem absolutně bez jakékoli podobné zkušenosti, beru 
                                                to jako výzvu a možnost naučit se něco nového."/>

                                                <OrganiserL photo={logistik__photo} name="Danka" position="Logistika" school="ČVUT FBMI"
                                                short_text=""
                                                long_text="Samotná súťaž, jej sprievodný program, raut a neskôr afterka sa ako aj po minulé roky budú 
                                                odohrávať v kampuse ČVUT v Dejviciach. Ja, ako logistik sa pri procese hľadania tých najvhodnejších 
                                                priestorov dostanem na miesta, kde by som sa za iných okolností neocitla. Očakávam, že dobrodružným 
                                                bude aj samotný deň UnITu, kedy budem musieť v sebe objaviť majstra improvizácie, pretože ako to už 
                                                chodí, vždy sa udeje niečo, s čím sa nerátalo."/>

                                                {/* <OrganiserR photo={food__photo} name="Alena" position="Catering" school="ČVUT FIT"
                                                short_text=""
                                                long_text="Dodej text, jinak tu zůstane tohle ale kámo"/> */}

                                        </div> 

                                        <br />
                                        <br />
                                        <br />
                                </div>
                                </div>
                        </section>
                        </>
                )
        }
}

export default Organisers;