import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import classes from "./ModalWindow.module.scss";

const ModalWindow = ({ isOpen = false, setIsOpen, children }) => {
  const modalRef = useRef();

  const getFirstLast = () => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      "a[href], button, textarea, input, select"
    );
    const focusableElements = Object.values(focusableModalElements).filter(
      (elem) => elem.disabled !== true
    );
    return {
      firstElement: focusableElements[0],
      lastElement: focusableElements[focusableElements.length - 1],
    };
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escFunction);
    } else {
      document.removeEventListener("keydown", escFunction);
    }
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
    // eslint-disable-next-line
  }, [isOpen]);

  const escFunction = (e) => {
    if (e.code === "Escape") setIsOpen(false);
    if (e.shiftKey && e.keyCode === 9) {
      const elements = getFirstLast();
      if (document.activeElement === elements.firstElement) {
        elements.lastElement.focus();
        e.preventDefault();
      }
    }
    if (!e.shiftKey && e.keyCode === 9) {
      const elements = getFirstLast();
      if (document.activeElement === elements.lastElement) {
        elements.firstElement.focus();
        e.preventDefault();
      }
    }
  };

  const handleBg = (e) => {
    if (e.target.id === "modal") {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    return (
      <div
        className={classes.modalBg}
        id="modal"
        onClick={handleBg}
        role="dialog"
        aria-modal="true"
      >
        <div ref={modalRef} className={classes.modalBody}>
          <div className={classes.bodyModal}>{children}</div>
        </div>
      </div>
    );
  }

  return null;
};

export default ModalWindow;

ModalWindow.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.object,
};
