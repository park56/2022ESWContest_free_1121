import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as N from "./NavBar.style";

import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "store/user/loginState";
import { userData } from "store/user/userData";

import home from "assets/image/Icon/home.png";
import my from "assets/image/Icon/my.png";
import reservation from "assets/image/Icon/reservation.png";
import logout from "assets/image/Icon/logout.png";
import hotel from "assets/image/Icon/hotel.png";

import focushome from "assets/image/Icon/focushome.png";
import focusmy from "assets/image/Icon/focusmy.png";
import focusreservation from "assets/image/Icon/focusreservation.png";
import focuslogout from "assets/image/Icon/focuslogout.png";
import focushotel from "assets/image/Icon/focushotel.png";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setLogin] = useRecoilState(loginState);
  const userInfo = useRecoilValue(userData); 
  const [currentPage, setCurrentPage] = useState("");

  const logoutHandler = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    setLogin(false);
    window.location.href = '/';
  };

  useEffect(() => {
    setCurrentPage(location.pathname.split("/")[1])
  }, [location])
  
  return (
    <N.Contaienr>
      <N.NavWrapper>
        <N.NavItem current={currentPage} text={"home"} onClick={() => navigate('/home')}>
          <div>
            <img src={currentPage === "home" ? focushome : home} alt="홈" />
          </div>
          <span>홈</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"reservation"} onClick={() => navigate('/reservation')}>
          <div>
            <img src={currentPage === "reservation" ? focusreservation : reservation} alt="예약" />
          </div>
          <span>예약</span>
        </N.NavItem>
        {userInfo && userInfo.data.role === "" ? (
        <N.NavItem current={currentPage} text={"myreservation"} onClick={() => navigate('/myreservation')}>
          <div>
            <img src={currentPage === "myreservation" ? focusmy : my} alt="내 예약" />
          </div>
          <span>내 예약</span>
        </N.NavItem>
        )
        :
        (
        <N.NavItem current={currentPage} text={"myhotel"} onClick={() => navigate('/myhotel')}>
          <div>
            <img src={currentPage === "myhotel" ? focushotel : hotel} alt="내 호텔" />
          </div>
          <span>내 호텔</span>
        </N.NavItem>
        )}
        <N.NavItem current={currentPage} text={"logout"} onClick={logoutHandler}>
          <div>
            <img src={currentPage === "logout" ? focuslogout : logout} alt="로그아웃" />
          </div>
          <span>로그아웃</span>
        </N.NavItem>
      </N.NavWrapper>
    </N.Contaienr>
  );
};

export default NavBar;
