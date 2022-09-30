import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
  overflow-y: auto;

  height: calc(100vh - 264px);
  width: 100%;

  align-items: center;
  padding-top: 15px;
  box-sizing: border-box;

  /* ::-webkit-scrollbar {
    display: none;
  } */
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
  position: relative;

  width: 303px;
  height: 388px;

  display: flex;
  flex-direction: column;

  #hotel {
    position: absolute;
    top: 24px;
    left: 24px;

    width: 255px;
    height: 255px;

    margin: 0px;

    border-radius: 15px;
  }

  h2 {
    position: absolute;
    top: 294px;
    left: 24px;

    color: #000000;
    font-size: 24px;
    line-height: 35px;

    margin: 0;
  }

  div {
    position: absolute;
    top: 338px;
    left: 24px;

    display: flex;

    #GPS {
      width: 24px;
      height: 24px;

      margin: 0px;
    }

    h3 {
      color: #b4b4b4;
      font-size: 18px;
      line-height: 26px;

      margin: 0 0 0 6px;
    }
  }
`;
