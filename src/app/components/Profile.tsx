import React from "react";

const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm Tiara Mirchandani
      </h1>
      <p className="text-xl md:text-2xl mb-6 animate-pulse">
        Electrical Engineering | AI & Robotics | Software & Hardware Enthusiast
      </p>
    </section>
  );
};
export default Profile;
