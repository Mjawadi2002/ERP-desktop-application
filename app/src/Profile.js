import logo from './images/logoprofile.jpeg';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile({ isAdmin, setLogin, setAdmin }) {
  const navigate = useNavigate();

  const logout = () => {
    setLogin(false);
    setAdmin(false);
    navigate('/login'); 
  };

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="cardprofile" style={{ width: '19rem', height: '25rem' }}>
        <img className="card-img-top" src={logo} alt="Profile Logo" />
        <div className="card-body">
          <h5 className="card-title">Personal Info</h5>
          <p className="card-text">User Type:{isAdmin? ("Admin"):("Employer")}</p>
          {isAdmin && (
            <button type="submit" className="btn btn-warning" style={{ marginRight: '4px' }}>
              <Link to='/createemployer' style={{ textDecoration: "none", color: "black" }}>Create</Link>
            </button>
          )}
          <button type="submit" className="btn btn-warning" style={{ marginRight: '4x' }} onClick={logout}>
            <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Logout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
