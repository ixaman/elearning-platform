import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name, price, image} = props.course;
    return (
            
                <div className="cart">
                    <div className='cart-content'>
                        <div className="img-div">
                            <img  src={image} alt="" />
                        </div>
                        <div className='details-div'>
                            <p>{name}</p>
                            <h4>Price: &#2547;{price}</h4>
                        </div>
                    </div>
                </div>
    );
};

export default Service;