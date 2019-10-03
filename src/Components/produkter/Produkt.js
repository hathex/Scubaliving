import React from 'react'

const Produkt = ({allePordukterProps}) => {

    const ProduktList = allePordukterProps.map(
        n => 
            <figure className="figrgb" key={n.id}>
                <div className=" produktederneimg "><img className="produktlogo" src={n.produkterimg} alt=""/>
                <h3> {n.produkterH} </h3>
                <p> {n.produkterP} </p></div>
            </figure>
    );



    return (
        <div className="alleprodutederne">
            {ProduktList}
        </div>
    )
}

export default Produkt;
