import React from "react";
//import Images from "../images";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Card.css"


const CardHorizointal = ({ Menudata }) => {
    const outer = {
        width: "37rem",
        minWidth: "25rem",
        backgroundColor: "#fffffc",
        margin: "5pt",
        boxShadow: "5px 5px 10px 0px #888888",
        transition: "transform .3s",
        display: "flex",
        flexWrap: "nowrap"

    }

    return (
        <>
            {
                Menudata.map((curentElement, Index) => {
                    const { id, image, name, category, price, description } = curentElement;
                    return (
                        <>
                            <div className="CardOuter">
                                <div>
                                    <img src={image} className="img" alt="..." />
                                </div>
                                <div className="Content">
                                    <h3>{name}</h3>
                                    <h6 >{category}</h6>
                                    <textarea className="txtArea">{description}</textarea>
                                    <div className="ButtonGroup">
                                        <p className="price">Price: {price}</p>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>


                        </>
                    );
                }
                )
            }

        </>
    );
}



export { CardHorizointal };


