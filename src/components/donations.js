import React from "react";
import { NavLink } from "react-router-dom";

function DONATIONS () {

    return(
    <div class="p-5 h-100" style={{backgroundImage:'url(https://images5.alphacoders.com/531/531970.jpg)'}}>
        <div class="card px-4 mb-3" style={{opacity:.8}}>
            <p class="h8 py-3 gameText display-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Ash Ketchum"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Amount</p>
                        <input class="form-control mb-3 pt-2 " type="price" placeholder="$1,000"/>
                    </div>
                </div>
              
                <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        DONATE
                    </div>
                </div>
            </div>
        </div>
        <NavLink to="/"><button className="btn btn-danger">RETURN</button></NavLink>
    </div>)
}

export default DONATIONS