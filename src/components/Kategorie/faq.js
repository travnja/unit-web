import React, { Component } from "react";


class Faq extends Component{
        render(){
                return(
                        <>
                        <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="feature_header text-center">
                                        <h3 class="feature_title no-transform"><strong>FAQ</strong></h3>
                                </div>
                                </div>

                        </div>
                        <div class="row">

                                <div class="col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2">

                                <h4>Pro koho je soutěž určena?</h4>
                                <p>
                                        Účast na soutěži je <strong>zdarma</strong> a soutěžícím se může stát každý student vysoké školy
                                        nezávisle na ročníku.
                                </p>

                                <h4>Jak bude soutěž probíhat?</h4>
                                <p>
                                        Letos bude soutěž probíhat offline 13.4. v budově FITu v dejvickém kampusu ČVUT. Pro více informací sleduj 
                                        Facebookovou <a href="https://fb.me/e/225PQLLeY"> událost</a>. Pokud se přihlásíš pošleme veškeré info emailem.
                                </p>

                                <h4>Proč se na soutěž přihlásit?</h4>
                                <p>
                                        Díky UnITu máš možnost se seznámit s reálným problémem firmy z praxe, vyzkoušet své schopnost tvořit a 
                                        komunikovat. Krom toho můžeš porovnat síly se spolužáky a navíc vyhrát spoustu super cen.
                                </p>

                                <h4>Kdy bude zpřístupněno zadání?</h4>

                                <p>
                                        Hrubé zadání soutěžních kategorií naleznete už teď v sekci 
                                        <a href="#zadani" class="page-scroll"> zadání</a>. 
                                        Konkrétní ale ukážeme až v den soutěže, aby měli všichni stejné podmínky.
                                </p>

                                <h4>Můžu se přihlásit i když nemám kompletní tým?</h4>
                                <p>
                                        Ano. Můžeš využít buď přihlášku jednotlivce, pokud si sám nebo vyplnit pouze část přihlášky pro tým (zbytek dopnit třeba tečkami).
                                        Týmy pak složíme, aby byli alespoň 3 členové.
                                </p>
                                </div>
                                
                        </div>
                        </>
                )
        }
}

export default Faq;