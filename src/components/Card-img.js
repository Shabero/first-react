import React from 'react';
import ImgIphone from "./assets/boofer.png"
import ImgCart from "./assets/cart.png"

const CardImg = () => {
    return (
        <div className="card-img">
            <img src={ImgIphone} alt="" className="img-iphone"/>
            <button className="btn-cart">
                <img src={ImgCart} alt="" className="img-cart"/>
            </button>
        </div>
    )
}

export default CardImg