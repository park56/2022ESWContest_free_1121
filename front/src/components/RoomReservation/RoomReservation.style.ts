import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 43px;

  #room {
    width: 303px;
    height: 303px;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    margin-top: 28px 0px 0px 0px;

    color: #000000;
  }

  div {
    display: flex;
    align-items: center;

    #people {
      width: 24px;
      height: 24px;
    }

    h3 {
      width: 20%;
      margin: 0px 0px 0px 6px;

      font-weight: 500;
      font-size: 18px;
      line-height: 26px;

      color: #b4b4b4;
    }

    h2 {
      width: calc(80% - 24px);
      height: 35px;

      font-weight: 700;
      font-size: 24px;
      line-height: 35px;

      margin: 0;
      text-align: right;

      color: #2b42bb;
    }
  }

  #day {
    text-align: right;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #b4b4b4;
  }
`;

export const CalculatorContainer = styled.div``;
