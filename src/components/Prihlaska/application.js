import React, { Component } from "react";

import {spusteny_prihlasky} from "../../config";

class Application extends Component {
    render() {
        if (spusteny_prihlasky){
            return(
            <>
            <section class="section" id="application">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_header text-center">
                            <h1 class="feature_title no-transform">Přesvědčili jsme tě?</h1>
                                <p>
                                    v UnITu se soutěží v týmech po 3-4 členech. Pokud tolik lidí kolem sebe nemáš, nevadí. Můžeš přihlásit i menší počet, 
                                    my potom doplníme o jednotlivce nebo spojíme např. dva dvoučlenné týmy dohromady. 
                                    
                                    Na hledání týmu můžeš taky využít Facebookovou skupinu
                                        <strong><a href="https://www.facebook.com/groups/3141426076114075"> Zájemci o soutěže na ČVUT</a></strong>.
                                </p>
                                <br />
                                
                                <p>
                                    Všechny nezbytnosti a pravidla najdeš na stránce s přihláškou
                                </p>

                                
                                <br />
                                <h4>
                                    ABRA Software - Chytrá inventura
                                </h4>
                                <div>
                                    <a href="/application-1-single" class="btn btn-main featured btn-lg" style={{width:"600px"}}>Přihlásit jednotlivce</a>
                                </div>
                                <div>
                                    <a href="/application-1-team" class="btn btn-main featured btn-lg" style={{width:"600px"}}>Přihlásit tým</a>
                                </div>


                                <br />
                                <br />
                                <br />
                                <h4>
                                    Bosch - Skladová logistika
                                </h4>
                                <div>
                                    <a href="/application-2-single" class="btn btn-main featured btn-lg" style={{width:"600px"}}>Přihlásit jednotlivce</a>
                                </div>
                                
                                <div>
                                    <a href="/application-2-team" class="btn btn-main featured btn-lg" style={{width:"600px"}}>Přihlásit tým</a>
                                </div>

                                <br />
                                <br />
                                <br />
                                <h4>
                                    ComAp - Kontrola stability a predikce chyb
                                </h4>
                                <div>
                                    <a href="/application-3-single" class="btn btn-main featured btn-lg" style={{width:"600px"}}>Přihlásit jednotlivce</a>
                                </div>
                                
                                <div>
                                    <a href="/application-3-team" class="btn btn-main featured btn-lg" style={{width:"600px"}}>Přihlásit tým</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
            )
        }
        return(
            <>
            <section class="section" id="application">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_header text-center">


                                <p class="feature_sub">Přihlášky nejsou spuštěny</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </> 
        
        );
    }
}

export default Application;