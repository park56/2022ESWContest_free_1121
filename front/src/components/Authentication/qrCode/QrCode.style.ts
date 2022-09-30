import styled from "styled-components";

export const Container = styled.div`
  width: 340px;

  margin-top: 40px;

  display: flex;
  flex-direction: column;

  align-items: center;
  
  div {
    width: 100%
  }

  .qr_flex_end {
    display: flex;
    justify-content: flex-end;

    p {
      color: #B4B4B4;
      font-size: 18px;

      margin-top: 24px;

      span {
        color: #2B42BB;
      }
    } 
  }

  .qr_flex_start {
    display: flex;
    justify-content: flex-start;
  }

  .qr_text {
    color: #B4B4B4;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -2px;

    margin-bottom: 18px;
  }

  .qr_date {
    color: #000000;
    font-size: 24px;

    margin-bottom: 10px;
  }
`;
