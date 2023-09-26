import React from "react";
import FoldFill from "../img/svg/menu-fold-fill.svg";
import UnFoldFill from "../img/svg/menu-unfold-fill.svg";
import { styled } from "styled-components";
import UserPng from "../img/user.png";

const Main = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  padding: 13px 17px 17px 17px;
  border-bottom: 2px solid rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    position: fixed;
    display: flex;
    align-items: center;
    right: 0;
    top: 0;
    background-color: #fff;
    padding: 16.3px 20px;
    border-bottom: 2px solid rgb(240, 240, 240);
    .info_img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 8px;
    }
    .t1 {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.57;
      font-family: "Geologica-SemiBold", sans-serif;
    }
  }
`;
const Header = ({ setShow, show, user }) => {
  return (
    <Main
      style={
        !show
          ? { width: "calc(100% - 294px)" }
          : { width: "calc(100% - 109px)" }
      }
    >
      <button style={{ paddingTop: "4px", borderRadius: "8px" }}>
        {!show ? (
          <img src={FoldFill} onClick={() => setShow(true)} alt="" />
        ) : (
          <img src={UnFoldFill} onClick={() => setShow(false)} alt="" />
        )}
      </button>
      <div className="">
        <div className="info">
          {user?.avatar ? (
            <img
              src={`https://prep.uz/storage/${user?.avatar}`}
              // src={
              //   user?.avatar ? `https://prep.uz/storage/${user?.avatar}` : UserPng
              // }
              className="info_img"
              alt=""
            />
          ) : (
            ""
          )}

          <p className="t1">
            {user?.firstname ? user?.firstname : ""}{" "}
            {user?.lastname ? user?.lastname : ""}
          </p>
        </div>
      </div>
    </Main>
  );
};

export default Header;
