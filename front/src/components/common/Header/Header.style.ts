import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  nav {
    width: 400px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  button {
    cursor: pointer;

    background: #ffffff;
    border: none;
    outline: none;
  }
`;

export const Content = styled.h2`
  margin: 0 0 0 18px;

  color: #000000;
  font-size: 24px;
`;
