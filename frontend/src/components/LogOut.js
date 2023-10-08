import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({handleAuthentication,handleGamesData}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here, e.g., setting authentication to false
        handleAuthentication(false);
        handleGamesData([]);
        // After logging out, navigate to the landing route "/"
        navigate("/");
    };

    const handleCancel = () => {
        // navigate to the landing route "/"
        navigate("/");
    };

    return (
        <div>
            <p>Are you sure you want to log out?</p>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}