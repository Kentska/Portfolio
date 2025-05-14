import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <ul className="footer-links">
      <li>
        <a href="https://www.html.com" target="_blank" rel="noopener noreferrer" title="HTML5">
          <img src="html-5.svg" alt="HTML5" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.css3.com" target="_blank" rel="noopener noreferrer" title="CSS3">
          <img src="css3.svg" alt="CSS3" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer" title="JavaScript">
          <img src="js.svg" alt="JavaScript" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" title="TypeScript">
          <img src="typescript.svg" alt="TypeScript" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" title="Vite/React">
          <img src="vite.svg" alt="Vite" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer" title="Redux">
          <img src="redux.svg" alt="Redux" width={32} height={32} />
        </a>
      </li>
	  <li>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" title="React">
          <img src="react.svg" alt="React" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" title="MongoDB">
          <img src="mongodb.svg" alt="MongoDB" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" title="PostgreSQL">
          <img src="postgresql.svg" alt="PostgreSQL" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://figma.com" target="_blank" rel="noopener noreferrer" title="Figma">
          <img src="figma.svg" alt="Figma" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://trello.com" target="_blank" rel="noopener noreferrer" title="Trello">
          <img src="trello.svg" alt="Trello" width={32} height={32} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;