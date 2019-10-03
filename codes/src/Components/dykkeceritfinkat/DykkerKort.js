import React from 'react';
import PADI from '../../imgS/1200px-Logo_of_PADI.svg.png';
import './Dykkerkortet.css'

const DykkerKort = () => {
    return (
        <div className="container">
            <h2 className="dykkeH">PADI - DYKKECERITFIKAT</h2>
            <div className="infoboxen">
                <div className="infobox">
                    <h4 >TAG ET INTERNATIONALT ANERKENDT DYKKECERITFIKAT</h4>
                    <p>her finder du et sort udvalg af dykkerkurser lige fra begynder til professionel vi er et af danmarks førende dykkercentre, som uddanner fra PADI organisationen. når du vaælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kavliteten er i top.</p>
                    <p>vi har kompetente instruktører på vores dykkekurser. erfaring tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar et stort hold af kompetente instrktører.</p>
                </div>
                <figure className="logoPADI">
                    <img className="PADI" src={PADI} alt="" />
                </figure>
            </div>
            <a className="dykkerlink" href="">SE ALLE KURSER OG CERITFIKATER HER!</a>

        </div>
    )
}

export default DykkerKort;
