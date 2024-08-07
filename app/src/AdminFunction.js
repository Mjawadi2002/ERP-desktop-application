import React from 'react';
import { Link } from 'react-router-dom';
function AdminFunction({ title, description, image ,destination}) {
    return (
        <div className="card" style={{ width: '16rem' ,height:'19rem'}} >
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-warning "><Link to={destination} style={{textDecoration:"none"}} className='text-black'>Click here</Link></a>
            </div>
        </div>
    );
}

export default AdminFunction;