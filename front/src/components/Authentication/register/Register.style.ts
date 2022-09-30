import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

export const ChekPersonBox = styled.div`
  button {
    width: 137px;
    height: 52px;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: none;
    outline: none;

    font-size: 18px;
    
    &:first-child {
      margin-right: 29px;
    }

    &:hover {
      background: #2B42BB;
      color: #FFFFFF
    }
  }

  .active {
    background: #2B42BB;
    color: #FFFFFF
  }
`;