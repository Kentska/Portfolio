import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <ul className="footer-links">
      <li>
        <a href="https://www.html.com" target="_blank" rel="noopener noreferrer" title="HTML5">
          <img src="/icons/html-5.svg" alt="HTML5" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.css3.com" target="_blank" rel="noopener noreferrer" title="CSS3">
          <img src="/icons/css-3.svg" alt="CSS3" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer" title="JavaScript">
          <img src="/icons/javascript.svg" alt="JavaScript" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" title="TypeScript">
          <img src="/icons/typescript.svg" alt="TypeScript" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" title="Vite/React">
          <img src="/icons/vite.svg" alt="Vite" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer" title="SASS">
          <img src="/icons/sass.svg" alt="SASS" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer" title="Redux">
          <img src="/icons/redux.svg" alt="Redux" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" title="MongoDB">
          <img src="/icons/mongodb.svg" alt="MongoDB" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" title="PostgreSQL">
          <img src="/icons/postgresql.svg" alt="PostgreSQL" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://dbdiagram.io" target="_blank" rel="noopener noreferrer" title="DB Diagram">
          <img src="/icons/dbdiagram.svg" alt="DB Diagram" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://figma.com" target="_blank" rel="noopener noreferrer" title="Figma">
          <img src="/icons/figma.svg" alt="Figma" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://trello.com" target="_blank" rel="noopener noreferrer" title="Trello">
          <img src="/icons/trello.svg" alt="Trello" width={32} height={32} />
        </a>
      </li>
      <li>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="/icons/github.svg" alt="GitHub" width={32} height={32} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;