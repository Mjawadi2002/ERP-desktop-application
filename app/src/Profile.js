import logo from './images/logoprofile.jpeg'
import { Link } from 'react-router-dom';


export default function Profile({setLogin}){
    const logout=()=>{
        setLogin(false)
      }
    return(
        <div className="container-fluid">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="cardprofile" style={{ width: '15rem' ,height:'22rem'}} >
            <img className="card-img-top" src={logo} />
            <div className="card-body">
                <h5 className="card-title">Personel info</h5>
                <p className="card-text">Username :</p>
                <button type="submit" className="btn btn-warning " style={{ marginRight: '10px' }}>
               <Link to='/logout' style={{textDecoration:"none",color:"black"}}>Edit</Link>
              </button>
                <button type="submit" className="btn btn-warning " style={{ marginRight: '10px' }} onClick={logout}>
               <Link to='/login' style={{textDecoration:"none",color:"black"}}>Logout</Link>
              </button>
            </div>
        </div>
        </div>
    );
}