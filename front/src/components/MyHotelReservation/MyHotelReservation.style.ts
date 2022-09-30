import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
  overflow-y: auto;

  height: calc(100vh);
  width: 100%;

  align-items: center;
  padding-top: 15px;
  box-sizing: border-box;
`;

export const HotelContainer = styled.button`
  cursor: pointer;

  width: 303px;
  height: 388px;

  padding: 0;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  outline: none;

  margin-bottom: 40px;
`;

export const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: 24px 24px 0px 24px;
  text-align: left;

  #hotel {
    width: 255px;
    height: 255px;

    margin: 0px;

    border-radius: 15px;
  }

  h2 {
    color: #000000;
    font-size: 24px;
    line-height: 35px;

    margin: 14px 0px 0px 0px;
  }

  h3 {
    color: #b4b4b4;
    font-size: 18px;
    line-height: 26px;
  }
`;
