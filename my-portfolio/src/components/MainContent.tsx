import React from "react";
import "../styles/mainContent.css";

const MainContent: React.FC = () => (
  <main
 className="main-content-wrapper">
    <div className="main-content">
      <div className="image-section">
        <h2>Welcome to My Portfolio</h2>
        <img src="Me_bw.jpg" alt="Profile Picture" />
      </div>
      <div className="text-section">
        <h2>About Me</h2>
        <p>Hi, I'm Kent! I'm a web developer with a passion for creating beautiful and functional websites. I love coding and learning new technologies.</p>
        <p>In my free time, I enjoy hiking, photography, and exploring new places.</p>
        <p>Feel free to check out my work below!</p>
      </div>
    </div>
  </main>
);

export default MainContent;