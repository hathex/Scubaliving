import React, { useState } from 'react';
import Rejse from './Rejse';
import './rejserne.css';





function Rejser() {

    const [Rejserne] = useState([

        { rejseimg: '/imgP/malta.jpg', rejseH: 'MALTA', rejseP: 'Oplev skønne Malta helt fantasike dyreliv og sammenhold. vi arrangerer dykkerejser til malta hele året rundt', id: 1 },

        { rejseimg: '/imgP/norge.JPG', rejseH: 'NORGE', rejseP: 'Nordeeurpas bedst dykkespots ligger i Norge. Vi har 25 års erfaring med dyk i norge. Oplev det klarest vend i verden!', id: 1 },

    ])
    return (
        <div className="Rejser container">
            <h2 className="rejserH">DYK UD I VERDEN</h2>
            <Rejse alleRejseProps={Rejserne} />
            <a className="rejserLink" href="/" >SE FLERE DESTINATIONER OG MULIGHEDERDER HER!</a>
        </div>
    )

}
export default Rejser
