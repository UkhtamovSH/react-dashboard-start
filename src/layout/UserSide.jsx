import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import { styled } from "styled-components";

const Main = styled.div`
  display: flex;
`;
const MenuMain = styled.div`
  position: relative;
  .active {
    width: 260px;
    border-right: 1px solid rgb(240, 240, 240);
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    overflow-x: hidden;
    box-shadow: none;
    position: relative;
  }
  .noactive {
    transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    overflow-x: hidden;
    width: 75px;
    border-right: none;
    position: relative;
  }
`;
const UserSide = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Main>
        <MenuMain>
          <div className={show === false ? "active" : "noactive"}>
            <Menu show={show} />
          </div>
        </MenuMain>
        <div>
          <Header setShow={setShow} show={show} />
          {props.children}
        </div>
      </Main>
    </>
  );
};

export default UserSide;
