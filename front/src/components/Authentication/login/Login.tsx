import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "./Login.style";
import {
  InputWrapper,
  ErrorMsg,
  Btn,
  GoNavBox
} from "styles/them.style"
import LoginImg from "../../../assets/image/Login/LoginImg.png";
import { useRecoilState } from "recoil";
import { loginState } from "store/user/loginState";
import { useNavigate } from "react-router-dom";
import { API } from "util/axios";

interface Inputs {
  user_id: string,
  password: string,
}

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isLogin, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async({ user_id, password}) => {
    await API.post('login', {
      id: user_id,
      pw: password
    }).then((res) => {
      setLogin(true);      
      if (res.status === 202 && res.data) {
        localStorage.setItem('access_token', res.data.token);
        localStorage.setItem('user_id', res.data.id);
      }else {
        console.log(res);
      }
      navigate('/home');
    }).catch((err) => {
      console.log("signIn Error: ", err);
      if (err.response.status === 400) setErrMsg("아이디와 비밀번호가 일치하지 않습니다.")
    })
  };

  return (
    <Container>
      <img src={LoginImg} alt="로그인"/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>아이디</label>
          <input 
            type="text" 
            {...register('user_id', {
              required: true
            })} />
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <input 
            type="password" 
            {...register('password', {
              required: true
            })} />
        </InputWrapper>
        <ErrorMsg>{errMsg}</ErrorMsg>
        <Btn type="submit">로그인</Btn>
      </form>
      <GoNavBox>
        회원이 아니신가요?
        <a href="/register">회원가입</a>
      </GoNavBox>
    </Container>
  );
};

export default Login;
