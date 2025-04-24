import React from "react";

function Greeting({ name }) {
    return (
        <div className="welcome-header-container">
            <h2 className="welcome-header">Hello, {name}! Welcome to your app!</h2>
        </div>
    )
}

export default Greeting