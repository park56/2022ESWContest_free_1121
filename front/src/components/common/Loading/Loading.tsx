import React from "react";
import styled from "styled-components";
import LoadingImg from "../../../assets/image/Loading/loading.gif";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  img {
    width: 100px;
    height: 100px;
  }
`;

const Loading = () => {
  return (
    <Container>
      <img src={LoadingImg} alt="Loading..."/>
    </Container>
  );
};

export default Loading;
