import React, { useState, useEffect } from "react";
import Header from "./Header";
import Menu from "./Menu";
import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GetAuthInstance } from "../helpers/httpClient";

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;
const MenuMain = styled.div`
  position: relative;
  .active {
    width: 260px;
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
const MainSub = styled.div`
  position: relative;
`;
const UserSide = (props) => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = () => {
    if (localStorage.getItem("token")) {
      GetAuthInstance()
        .get("api/v1/profil")
        .then((res) => {
          if (res?.data?.success == 1) {
            let data = res?.data?.data;
            setUser(data);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        })
        .catch((error) => {})
        .finally(() => {
          // setMainLoading(false);
        });
    } else {
      // setMainLoading(false);
    }
  };
  return (
    <>
      <Main>
        <MenuMain>
          <div className={show === false ? "active" : "noactive"}>
            <Menu show={show} />
          </div>
        </MenuMain>
        <MainSub>
          <Header setShow={setShow} show={show} user={user} />
          {props.children}
        </MainSub>
      </Main>
      <ToastContainer />
    </>
  );
};

export default UserSide;
