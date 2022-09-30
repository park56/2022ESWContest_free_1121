import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import NavBar from "../components/common/NavBar";
import Header from "../components/common/Header";

import routes from "./routes";

const Content = styled.div`
  margin-top: ${(props) => (props.nav ? "50px" : "0px")};
  width: 100%;
  min-height: ${(props) => (props.header ? "93.1vh" : "100vh")};

  display: flex;
  justify-content: center;
`;

const Router = () => {
  const location = useLocation();

  const [renderInfo, setRenderInfo] = useState({
    nav: false,
    header: false,
  });

  useLayoutEffect(() => {
    let temp = routes.find((element) => element.path === location.pathname.split("/")[1]);
    if (temp === undefined) {
      temp = routes.find((element) => element.path === "*");
    }
    setRenderInfo(temp);
  }, [location.pathname]);

  return (
    <>
      {renderInfo.header && <Header />}
      <Content header={renderInfo}>
        <Routes>
          {routes.map((element) => {
            return <Route path={element.path} element={element.component} key={element.path} />;
          })}
        </Routes>
      </Content>
      {renderInfo.nav && <NavBar />}
    </>
  );
};

export default Router;
