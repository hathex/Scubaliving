import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <div className="conatiner">
            <div className="list1">
                <ul>
                    <li><h5>PRAKTISKE OPLYSNINGER</h5></li>
                    <li><p>om scuba living</p></li>
                    <li><p>kontakt</p></li>
                    <li><p>handelsbetingelser</p></li>
                    <li><p></p>persondatapolitik</li>
                    <li><p></p>åbningstider</li>
                </ul>
            </div>
            <div className="list2">
                <ul>
                    <li><h5>PRAKTISKE OPLYSNINGER</h5></li>
                    <li><p>hovedkategorier</p></li>
                    <li><p>dykkerudsyr</p></li>
                    <li><p>dykkerrejser</p></li>
                    <li><p>dykkerkurser</p></li>
                    <li><p>service</p></li>
                </ul>
            </div>
            <div className="list3">
                <ul>
                    <li><h5>SOCIALE MEDIER - FØLG OS HER:</h5></li>
                    <li><a href="">LinkedIn<i className="fab fa-linkedin"></i></a></li>
                    <li><a href="">Facebook<i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="">Instagram<i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer;