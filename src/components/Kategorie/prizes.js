import React, { Component } from "react";

import prvniMisto from '../../images/ceny/UnIT22_Ceny-02.png';
import druheMisto from '../../images/ceny/UnIT22_Ceny-03.png';
import tretiMisto from '../../images/ceny/UnIT22_Ceny-04.png';

class Prizes extends Component {
    render() {
        return(
            <>
            
            <div class="row">
                    <div class="feature_header text-center">
                        <h3 class="feature_title no-transform"><b>Ceny</b></h3>
                        <h4>Pro každého člena nejlépe umístěných týmu máme připavené výhry v celkové hodnotě přes 70 000 Kč.</h4>
                        <h4>K prvnímu místu jsme nově přidali i vouchery na letenky v hodnotě 50€ od Kiwi.com</h4>
                    </div>
                    <br />
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <img src={prvniMisto} class="img-responsive" alt=""/>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <img src={druheMisto} class="img-responsive" alt=""/>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <img src={tretiMisto} class="img-responsive" alt=""/>
                    </div>
            </div>
            </>
        );
    }
}

export default Prizes;