import React from 'react'

const Rejse = ({ alleRejseProps }) => {

    const RejseList = alleRejseProps.map(
        n =>
            <div className="rejsebox" key={n.id}>
                <figure className="rejsefigure">
                <img className="rejseimg" src={n.rejseimg} alt="" />
                </figure>
              <div className="textrejser">
                    <h3> {n.rejseH} </h3>
                    <p> {n.rejseP} </p>
                    </div>
               
            </div>
    )





    return (
        <div className="allrejser">
            {RejseList}
        </div>
    )
}

export default Rejse
