import styled from "styled-components";
import SearchIcon from "../../assets/image/Reservation/search.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  input {
    margin-top: 40px;

    width: 303px;
    height: 60px;

    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    border: none;
    box-sizing: border-box;

    padding-left: 24px;
    font-size: 18px;
    line-height: 26px;

    color: #000000;

    :focus {
      outline: 1px solid #2b42bb;
    }
  }

  input::placeholder {
    padding-left: 38px;
    font-size: 18px;
    line-height: 26px;
    color: #b4b4b4;

    align-items: center;

    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0px center;
  }
`;
