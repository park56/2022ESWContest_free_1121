import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
  Container,
  ChekPersonBox
} from "./Register.style";
import {
  InputWrapper,
  ErrorMsg,
  Btn,
  GoNavBox
} from "styles/them.style";
import { useNavigate } from "react-router-dom";
import { API } from "util/axios";


interface Inputs {
  name: string,
  user_id: string,
  password: string,
  confirmPassword: string,
}

const Register = () => {
  const [isPerson, setPerson] = useState(true);
  
  const navigate = useNavigate();
  const { register, watch, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async({user_id, name, password}) => {
    const role = isPerson ? "" : "기업";

    await API.post('signup', {
        id: user_id,
        name: name,
        pw: password,
        role: role
      }).then((res) => {
        if (res.status === 202) navigate('/login');
      }).catch((err) => {
        console.log("signUp Error: ", err);
      })

  };
  
  return (
    <Container>
      <ChekPersonBox>
        <button onClick={() => setPerson(true)} className={isPerson ? "active" : ""}>
          개인
        </button>
        <button onClick={() => setPerson(false)} className={!isPerson ? "active" : ""}>
          기업
        </button>
      </ChekPersonBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>이름</label>
          <input 
            type="text" 
            {...register("name", {
              required: true
            })}/>
        </InputWrapper>
        <InputWrapper>
          <label>아이디</label>
          <input 
            type="text" 
            {...register("user_id", {
              required: true
            })}/>
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <input 
            type="password" 
            {...register("password", {
              required: true
            })}/>
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호 확인</label>
          <input 
            type="password" 
            {...register("confirmPassword", {
              validate: value => value === watch('password') || "비밀번호가 일치하지 않습니다."
          })}/>
        </InputWrapper>
        <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>
        <Btn type="submit">회원가입</Btn>
      </form>

      <GoNavBox>
        회원이신가요?
        <a href="/login">로그인</a>
      </GoNavBox>
    </Container>
  );
};

export default Register;