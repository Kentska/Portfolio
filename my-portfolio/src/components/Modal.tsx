import React from "react";
import "../styles/modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">&times;</button>
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> <a href="mailto:kentska@hotmail.com">kentska@hotmail.com</a></p>
        <p><strong>Location:</strong> Norrtälje, Sweden</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kentskarnas/" target="_blank" rel="noopener noreferrer"><img src="linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/bowmorez" target="_blank" rel="noopener noreferrer"><img src="instagram.svg" alt="Instagram" /></a>
          <a href="https://www.github.com/Kentska" target="_blank" rel="noopener noreferrer"><img src="github.svg" alt="GitHub" /></a>
        </div>
      </div>
    </div>
  );
};

export default Modal;