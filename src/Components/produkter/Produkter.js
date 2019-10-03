import React, { useState } from 'react';
import Produkt from './Produkt.js';
import './produkteder.css';





function Produkter() { 

const [Produkterne] = useState([

    { produkterimg: '/imgP/reg.jpg', produkterH: 'REGULATOR MED RESIST', produkterP: 'KR 859,-', id: 1 },

    { produkterimg: '/imgP/fine.jpg', produkterH: 'REJERFINNE', produkterP: 'KR 999,-', id: 2 },

    { produkterimg: '/imgP/fine.jpg', produkterH: 'REJERFINNE', produkterP: 'KR 999,-', id: 3 },

    { produkterimg: '/imgP/hanske.jpg', produkterH: 'COLDWATER GLOVES', produkterP: 'KR 1490.-', id: 4 }


]);

    return (
        <div className="protdukter container">
            <h2 className="produktedernesH">MEST POPULÆRE DYKKEUDSTYR</h2>
            <Produkt allePordukterProps={Produkterne} />
            <a className="produktederneL" href="/">SE MERE LÆKKERT UDSTYR HER!</a>
        </div>
    )

}
export default Produkter;
