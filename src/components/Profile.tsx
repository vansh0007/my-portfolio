import React from "react";
import "./Profile.css";
interface ProfileProps {
  name: string;
  jobTitle: string;
  bio: string;
  sayHelloUrl?: string; // Optional URL for the contact button
  myWorksUrl?: string; // Optional URL for the portfolio button
}

const Profile: React.FC<ProfileProps> = ({
  name,
  jobTitle,
  bio,
  sayHelloUrl,
  myWorksUrl,
}) => {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <h3>{jobTitle}</h3>
      <p>{bio}</p>
      <div className="profile-actions">
        <a href={sayHelloUrl || "#"}>Say Hello</a>
        <a href={myWorksUrl || "#"}>My Works</a>
      </div>
      <div className="social-links">
        <p>Follow me:</p>
        {/* Add social media icons here */}
      </div>
    </div>
  );
};

export default Profile;
