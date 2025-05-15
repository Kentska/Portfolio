import React from "react";
import "../styles/linksSection.css"; // Import your CSS file

const LinksSection: React.FC = () => (
  <section className="links-section">
    <a href="https://din-lank.se" target="_blank" rel="noopener noreferrer" className="link-box">
  <span className="link-text"></span>
  <img className="link-photo" src="DSC_4456.jpg" alt="Foto" />
</a>
<a href="https://din-lank.se" target="_blank" rel="noopener noreferrer" className="link-box">
  <span className="link-text"></span>
  <img className="link-photo" src="DSC_2497.jpg" alt="Foto" />
</a>
<a href="https://din-lank.se" target="_blank" rel="noopener noreferrer" className="link-box">
  <span className="link-text"></span>
  <img className="link-photo" src="DSC_3765.jpg" alt="Foto" />
</a>
<a href="https://din-lank.se" target="_blank" rel="noopener noreferrer" className="link-box">
  <span className="link-text"></span>
  <img className="link-photo" src="DSC_3907.jpg" alt="Foto" />
</a>
<a href="https://din-lank.se" target="_blank" rel="noopener noreferrer" className="link-box">
  <span className="link-text"></span>
  <img className="link-photo" src="DSC_4458.jpg" alt="Foto" />
</a>
<a href="https://din-lank.se" target="_blank" rel="noopener noreferrer" className="link-box">
  <span className="link-text"></span>
  <img className="link-photo" src="DSC_4583.jpg" alt="Foto" />
</a>
    {/* Lägg till fler link-boxar här om du vill */}
  </section>
);

export default LinksSection;