import { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "router/router";
import { GlobalStyle } from "styles/globar.style";
import { useRecoilState } from "recoil";
import { loginState } from "store/user/loginState";

const Background = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 75px); */
  /* margin-top: 75px; */
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;

  box-sizing: border-box;
`;

const App = () => {
  const [isLogin, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    if(localStorage.getItem('access_token') && localStorage.getItem('user_id')){
      setLogin(true);
    }
  }, [setLogin])

  return (
    <Background>
      {/* <AppRouter /> */}
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Background>
  );
};
export default App;
