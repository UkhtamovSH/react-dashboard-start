import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { GetAuthInstance } from "../../helpers/httpClient";
import { useDispatch } from "react-redux";
import { setToken } from "../../helpers/tokenStorage";
import { useNavigate } from "react-router-dom";
import ModalInfo from "../../components/ModalInfo";
import { get } from "lodash";
import { styled } from "styled-components";
import Brand from "../../img/svg/brand.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UiCard = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  padding: 32px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border: 3px solid rgba(73, 183, 55, 0.3);
`;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & .body {
    width: 448px;
    margin: 0 32px;
    .brand_main {
      display: flex;
      width: 100%;
      justify-content: center;
      .brand {
        margin-bottom: 15px;
        text-align: center;
      }
    }
    & .title {
      font-family: "Geologica-SemiBold", sans-serif;
      font-size: 20px;
      line-height: 24px;
      color: #223346;
      text-align: center;
      margin-bottom: 12px;
    }
    & .subtitle {
      font-family: "Geologica-Regular", sans-serif;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      color: #223346;
    }
    & .loginForm {
      display: flex;
      flex-direction: column;
      & .eye {
        display: flex;
        justify-content: right;
        & span {
          position: absolute;
          margin-top: 20px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      & label {
        font-family: "Geologica-Regular", sans-serif;
        font-size: 12px;
        line-height: 14px;
        width: 100%;
        margin-top: 24px;
        margin-bottom: 8px;
        color: #71787e;
      }
      & input {
        height: 30px;
        background: #ffffff;
        border: 1px solid #ced5dc;
        border-radius: 8px;
        padding: 11px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        font-family: "Geologica-Regular", sans-serif;
        border: 3px solid rgba(73, 183, 55, 0.3);
      }
      & .btn {
        margin-top: 32px;
        background: #49b737;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        color: #ffffff;
        font-family: "Geologica-Regular", sans-serif;
        width: 100%;
        padding: 15px 18px;
      }
      & .errs {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
        color: red;
        font-family: "Geologica-Regular", sans-serif;
        & > div {
          margin: 8px 0 0 0;
        }
      }
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [obj, setObj] = useState({});
  const [objE, setObjE] = useState({});
  const notify = () => toast("Wow so easy !");

  const submitLogin = (e) => {
    e.preventDefault();
    // setMainLoading(true);
    let t = true,
      err = {};
    if (!obj?.login) {
      t = false;
      err = { ...err, login: true };
    }
    if (!obj?.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (t) {
      GetAuthInstance()
        .post("api/v1/login", obj)
        .then((res) => {
          console.log(res);
          if (res?.data?.success == 1) {
            const token = res?.data?.data?.token ?? "";
            localStorage.setItem("user_id", res?.data?.data?.user?.id);
            localStorage.setItem("token", token);
            // getPermission(res?.data?.user?.id);

            // setToken(token)
            navigate("/");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
          if (res?.data?.success === 1) {
            toast.success(res?.data?.msg, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (res?.data?.success === 0) {
            setObjE({ ...objE, common: true });
            toast.error(res?.data?.msg, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((error) => {
          console.log(error?.response?.status);
        })
        .finally(() => {
          // setMainLoading(false);
        });
    } else {
      setObjE(err);
      // setMainLoading(false);
    }
  };

  const getPermission = (id) => {
    // setMainLoading(true);
    GetAuthInstance()
      .get(`api/v1/dashboard/get-user-permissions?user_id=${id}`)
      .then((res) => {
        if (res?.status === 200) {
          setPermissons(get(res, "data", {}));
        }
      })
      .finally(() => {
        // setMainLoading();
      });
  };

  // const setMainLoading = (l = false) => {
  //   dispatch({ type: "SET_LOADING", payload: l });
  // };

  const setPermissons = (l = false) => {
    dispatch({ type: "USER_PERMISSIONS", payload: l });
  };

  const changeInput = (event) => {
    setObj({ ...obj, [event.target.name]: event.target.value });
    setObjE({ ...objE, [event.target.name]: false, common: false });
  };
  return (
    <>
      <Container>
        <div className="body">
          <UiCard>
            <div className="brand_main">
              <img className="brand" src={Brand} alt="" />
            </div>
            <div className="title">Добро пожаловать</div>
            <div className="subtitle">
              Введите свои данные, чтобы войти в систему
            </div>
            <form className="loginForm" onSubmit={submitLogin}>
              <label>Логин</label>
              <input
                type={"text"}
                name="login"
                className="phone"
                placeholder="Ваш логин"
                value={obj?.login || ""}
                onChange={changeInput}
              />

              <div className="errs">
                {objE.login ? <div>Требуется</div> : ""}
              </div>
              <label>Пароль </label>
              <div className="eye">
                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="password"
                placeholder="Ваш пароль"
                value={obj?.password || ""}
                onChange={changeInput}
              />
              <div className="errs">
                {objE.password ? <div>Требуется</div> : ""}
                {objE.common ? <div>Пользователь не найден</div> : ""}
              </div>
              <div>
                <button type="submit" className="btn">
                  Логин
                </button>
              </div>
            </form>
          </UiCard>
        </div>
      </Container>
      {statusModal === true ? (
        <ModalInfo
          title={"Ошибка логина или пароля"}
          close={setStatusModal}
          statusYesN={false}
        />
      ) : null}
    </>
  );
};
export default Login;
