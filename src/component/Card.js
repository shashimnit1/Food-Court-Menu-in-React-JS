import React from "react";
//import Images from "../images";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Card.css"

const Card = ({ Menudata }) => {

    return (
        <>
            {
                Menudata.map((curentElement, Index) => {
                    const { id, image, name, category, price, description } = curentElement;
                    return (
                        <>
                            <div >
                                <div className="CardOuter">
                                    {/* <h5>{id}</h5> */}

                                    <h2 className="title">{name} <span className="SubText">({category})</span></h2>
                                    <img src={image} alt="..." height={200} width={220} />

                                    <p>{description}</p>
                                    <div className="ButtonGroup">
                                        <button className="btn btn-primary" style={{ alignSelf: "center", backgroundImage: "linear-gradient(red, red)" }}>{price}</button>

                                        <button className="btn btn-primary" style={{ width: "fit-content", alignSelf: "center" }}>Add to Cart</button>
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

const CardHorizointal = ({ Menudata }) => {
    return (
        <>
            {
                Menudata.map((curentElement, Index) => {
                    const { id, image, name, category, price, description } = curentElement;
                    return (
                        <>
                            <div className="card mb-3" style={{ "max-width": "400px", minWidth: "400px", backgroundColor: "#fffffc", margin:"5pt", boxShadow: "5px 5px 10px 0px #888888", transition: "transform .3s" }}>
                                <div className="row g-0">
                                    <div className="col-md-4" >
                                        <img src={image} className="img" alt="..." />
                                       
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title title">{name}</h3>
                                            <h6 className="card-title">{category}</h6>
                                            {/* <p className="card-text">{description}</p> */}
                                            <textarea className="txtArea">{description}</textarea>
                                            
                                            <div className="ButtonGroup">
                                                <p className="card-text price">Price: {price}</p>

                                                <button className="btn btn-primary" style={{ width: "fit-content", alignSelf: "center" }}>Add to Cart</button>
                                            </div>
                                        </div>
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


                            export default Card;
            export {CardHorizointal};


