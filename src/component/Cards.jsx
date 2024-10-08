import React from 'react'

const Cards = (props) => {
        const { id, title , description , thumbnail, price , brand } = props;
    return (
        <div className='d-flex m-1 bg-primary-subtle'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top overflow-hidden" src={thumbnail} alt="Card image cap" />
                    <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                             <p className="card-text">
                                        {description}
                             </p>
                             <h5>{price}</h5>
                             <h6>{brand}</h6>
                         <div className='d-flex flex-row justify-content-between'></div>
                             <a href="#" className="btn btn-primary">Go to somewhere</a>
                    </div>
            </div>
     </div>
     )
};

export default Cards