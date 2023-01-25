import React, { Component } from "react";
import logo from '../../images/unitLogo/UnIT_logo_2022.png';

class LogoBig extends Component{
        render(){
                return (
                        <>
                        <div class="col-sm-4 col-xs-4 text-center" style={{maxWidth: '620px'}}>
                                <br />
                                <br />
                                <br />
                                <img src={logo} style={{width: '60%'}} class="img-responsive" alt="BEST UnIT logo"/>
                                </div>
                        </>
                )
        }
}

export default LogoBig;