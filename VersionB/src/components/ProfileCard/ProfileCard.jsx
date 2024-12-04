import React from "react";
import Cover from "../../img/profile123.avif";
import Profile from "../../img/GraiceAbrams.jpeg";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Gracie Abrams</span>
        <span>YG Entertainment</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>732,890</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>18</span>
            <span>Followning</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>23</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      <Link to='/profile'><div className="MyProfile">My Profile</div></Link>
    </div>
  ); 
};

export default ProfileCard;