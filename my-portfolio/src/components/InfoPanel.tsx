import React from "react";
import "../styles/infoPanel.css";

const InfoPanel: React.FC = () => (
	<aside className="info-panel">
    <h2>InfoPanel</h2>
    <div className="info-panel-content">
      {/* Här kan du lägga till vad du vill, t.ex. */}
      <p>Här kan du visa kontaktinfo, projekt, länkar, eller vad du vill!</p>
      {/* Exempel på framtida innehåll */}
      {/* <ul>
        <li>Projekt 1</li>
        <li>Projekt 2</li>
      </ul> */}
    </div>
  </aside>
);

export default InfoPanel;