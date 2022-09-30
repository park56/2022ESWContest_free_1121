import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;


  width: 100%;

  margin: 40px 0 96px 0;
`;

export const SmallBox = styled.div`
  display: flex;
`;

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    height: 26px;
    font-size: 16px;

    margin-top: 26px;
    margin-bottom: 0px;
    color: #b4b4b4;
  }

  input {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    border: none;
    outline: none;

    font-size: 12px;
    padding-left: 24px;
    box-sizing: border-box;
    margin-top: 8px;

    width: 137px;
    height: 52px;

    &:hover,
    &:focus {
      border: 1px solid #2B42BB;
    }
  }

  &:first-child {
    margin-right: 29px;
  }
`;

export const ImgInputWrap = styled.div`
  width: 303px;
  height: 303px;
  
  margin-top: 26px;
  
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;  

  display: flex;
  justify-content: center;
  align-items: center;

  label {
    cursor: pointer;

    img {
      max-width: 303px;
      max-height: 303px;
    }
  }
  
  input[type="file"] {
    display: none;
  }
`;
