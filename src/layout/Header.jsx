import React from "react";
import FoldFill from "../img/svg/menu-fold-fill.svg";
import UnFoldFill from "../img/svg/menu-unfold-fill.svg";

const Header = ({ setShow, show }) => {
  return (
    <div>
      <button>
        {!show ? (
          <img src={FoldFill} onClick={() => setShow(true)} alt="" />
        ) : (
          <img src={UnFoldFill} onClick={() => setShow(false)} alt="" />
        )}
      </button>
      Header
    </div>
  );
};

export default Header;
