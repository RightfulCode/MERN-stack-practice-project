import React from "react";

const Profile = () => {
    const name = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="profile">
            <h1>{name.name}</h1>
        </div>
    );
}

export default Profile;