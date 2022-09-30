import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./First.style";
import QR from "../../assets/image/Login/QrCode.png";

const First = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={QR}></img>
      <p>
        <strong>QR</strong> 코드로
        <br />
        간편히 체크인해 보세요
      </p>
      <button
        id="login"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </button>
      <button
        id="register"
        onClick={() => {
          navigate("/register");
        }}
      >
        회원가입
      </button>
    </Container>
  );
};

export default First;
