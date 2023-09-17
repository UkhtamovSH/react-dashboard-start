import React from "react";
import { styled } from "styled-components";
import Brand from "../img/svg/brand.svg";
import Settings from "../img/svg/settings-4-line.svg";
import AminLine from "../img/svg/admin-line.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  border-right: 2px solid rgb(240, 240, 240);
  background-color: #fff;
  min-height: 100vh;
  position: fixed;
  top: 0;

  .info {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh - 80px);
    .link_svg_main {
      display: flex;
      flex-direction: column;
      width: 100%;
      li {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      a {
        padding: 7px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.57;
        font-family: "Geologica-Regular", sans-serif;
        color: rgb(38, 38, 38);
        width: 100%;
        transition: 0.3s ease-out;
        &:hover {
          background-color: rgba(73, 183, 55, 0.3);
        }
        span {
          margin-left: 10px;
        }
      }
      .active {
        background-color: rgba(73, 183, 55, 0.3) !important;
      }
    }
  }
  .active {
    width: 260px;
    border-right: 1px solid rgb(240, 240, 240);
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    overflow-x: hidden;
    position: relative;
  }
  .noactive {
    transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    overflow-x: hidden;
    width: 75px;
    border-right: none;
    position: relative;

    .info {
      .link_svg_main {
        a {
          padding-left: 28px;
          span {
            opacity: 0;
          }
        }
      }
    }
  }
  .brand {
    position: sticky;
    top: 0;
    right: 0;
    width: 100%;
    padding: 7px;
    background-color: #fff;
    .active_img {
      transition: 225ms;
    }
    .noactive_img {
      clip-path: inset(0 123px 0 0);
      transition: 195ms;
      margin-left: 8px;
    }
  }
`;
const Menu = ({ show }) => {
  return (
    <Main>
      <div className={show === false ? "active" : "noactive"}>
        <Link to="/admin">
          <div className="brand">
            <img
              src={Brand}
              className={show === false ? "active_img" : "noactive_img"}
              alt=""
              title="PrepUz"
            />
          </div>
        </Link>
        <div className="info">
          <ul className="link_svg_main">
            <li>
              <NavLink
                to="/admin"
                activeclassname="active"
                title={show === false ? "" : "Админ"}
              >
                <img src={AminLine} className="link_svg" alt="" />{" "}
                <span>Админ</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                activeclassname="active"
                title={show === false ? "" : "Настройки"}
              >
                <img src={Settings} className="link_svg" alt="" />{" "}
                <span>Настройки</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default Menu;
