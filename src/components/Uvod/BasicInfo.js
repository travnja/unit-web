import { Component } from "react/cjs/react.production.min";

import {spusteny_prihlasky, uzavreny_prihlasky, soutez_od, soutez_kde, prihlasky_do, prihlasky_od} from "../../config";

class BasicInfo extends Component{
        render(){
                return (
                        <>
                        <div class="green-bar">Kdy? <strong>{soutez_od}</strong></div>
                        <div class="green-bar">Kde? <strong>{soutez_kde}</strong></div>
                        <br />
                        <div class="green-bar">Kdo? <strong>Všichni studenti technických vysokých škol z ČR i SR</strong></div>
                        <br />
                        {/* <div class="green-bar"><strong>Přihlášky ještě nebyly otevřeny</strong></div> */}
                        <div class="green-bar"><strong>Přihlas se do {prihlasky_do}</strong></div>
                        
                        </>
                )
        }
}

export default BasicInfo;