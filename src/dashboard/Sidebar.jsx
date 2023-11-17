import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Sidebar = () => {
    const { user, logout: authLogout } = useContext(AuthContext);
    const defaultImageUrl = 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg';
    const navigate = useNavigate();

    const handleLogout = () => {
        authLogout()
            .then(() => {
                alert("Logout Successfully");
                navigate('/', { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px', height: "100vh" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="fa-solid fa-store fa-lg" style={{ margin: "0px 10px" }}></i>
                    <span className="fs-4">BookStore</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin/dashboard" className="nav-link text-white" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.04)";
                            e.target.style.backgroundColor = "#6f6f6f54";
                            e.target.style.color = "#212529";
                        }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "white";
                            }}
                            exact>
                            <i className="fa fa-tachometer" aria-hidden="true" style={{ margin: "0px 10px" }}></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/dashboard/upload" className="nav-link text-white" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.04)";
                            e.target.style.backgroundColor = "#6f6f6f54";
                            e.target.style.color = "#212529";
                        }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "white";
                            }}>
                            <i className="fa-solid fa-upload" style={{ margin: "0px 10px" }} ></i>
                            Upload Books
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/dashboard/manage" className="nav-link text-white" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.04)";
                            e.target.style.backgroundColor = "#6f6f6f54";
                            e.target.style.color = "#212529";
                        }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "white";
                            }}>
                            <i className="fas fa-tasks" style={{ margin: "0px 10px" }}></i>
                            Manage Books
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-white" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.04)";
                            e.target.style.backgroundColor = "#6f6f6f54";
                            e.target.style.color = "#212529";
                        }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "white";
                            }}>
                            <i className="fab fa-product-hunt" style={{ margin: "0px 10px" }}></i>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-white" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.04)";
                            e.target.style.backgroundColor = "#6f6f6f54";
                            e.target.style.color = "#212529";
                        }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "white";
                            }}>
                            <i className="fa-solid fa-users" style={{ margin: "0px 10px" }}></i>
                            Customers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link text-white" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.04)";
                            e.target.style.backgroundColor = "#6f6f6f54";
                            e.target.style.color = "#212529";
                        }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "white";
                            }}>
                            <i className="fa fa-question-circle" aria-hidden="true" style={{ margin: "0px 10px" }}></i>
                            Help
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={user?.photoURL || defaultImageUrl} alt={user?.displayName} width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user?.displayName || user?.email.slice(0, 10)}</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
