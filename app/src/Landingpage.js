import { Link } from "react-router-dom";

export default function Landingpage() {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <h1 className="text-center text-white py-5">
                Welcome to <span style={{ color: "yellow" }}>Coffee ERP</span>
            </h1>
            <button className="btn btn-warning px-4">
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>Enter</Link>
            </button>
        </div>
    );
}
