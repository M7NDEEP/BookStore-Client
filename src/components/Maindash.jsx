import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthProvider';

const Maindash = () => {
    const { user, logout: authLogout } = useContext(AuthContext);
    return (
        <>
            <div className='container'>
                <div className="jumbotron" style={{ height: "100vh" }}>
                    <h1 className="display-4">Hello, {user.displayName}</h1>
                    <p className="lead">
                        We sincerely apologize for any inconvenience caused as our dashboard undergoes construction. Please be assured that our dedicated team is working diligently to complete the enhancements swiftly. Your patience during this period is invaluable, and we genuinely appreciate your understanding. We understand the importance of a seamless user experience, and we are committed to delivering an upgraded dashboard that exceeds your expectations. Thank you for your continued support, and rest assured, the improvements will enhance your interaction with our platform. We will keep you updated on the progress, and we look forward to presenting you with an improved dashboard shortly.
                    </p>
                    <hr className="my-4"></hr>
                    <p>In the meantime, consider utilizing alternative options such as "upload" and "manage" for seamless book management. Thank you for your understanding and continued support.</p>
                    <p className="lead">
                        <Link to="/admin/dashboard/upload/" className="btn btn-primary btn-lg" href="#" role="button" style={{
                            backgroundColor: "#212529",
                            color: "white",
                            border: "1px solid #212529",
                            fontSize: "15px",
                            marginLeft: "",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            transition: "0.2s ease-in",
                        }}
                            onMouseOver={(e) => {
                                e.target.style.transform = "scale(1.04)";
                                e.target.style.backgroundColor = "white"; // Change to light background
                                e.target.style.color = "#212529"; // Change to dark text color
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.backgroundColor = "#212529";
                                e.target.style.color = "white";
                            }}>Upload Books</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Maindash;
