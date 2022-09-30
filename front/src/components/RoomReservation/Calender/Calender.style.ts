import styled from "styled-components";
import more from "../../../assets/image/Reservation/more.png";

export const Container = styled.div`
  margin-bottom: 100px;
`;

export const DateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button:nth-child(1) {
    transform: rotate(90deg);
  }

  p + button {
    transform: rotate(-90deg);
  }

  button {
    width: 24px;
    height: 24px;

    background-color: white;
    background-image: url(${more});
    background-position: 50%, 50%;

    border: none;
    cursor: pointer;
  }
`;

export const CheckContaienr = styled.div`
  width: 100%;

  p {
    margin: 10px 0px 0px 0px;
  }

  button {
    margin-top: 10px;

    width: 100%;
    height: 35px;

    background-color: #3b52cb;
    color: white;
    border-radius: 15px;

    border: none;
    cursor: pointer;
  }
`;

export const Check = styled.button``;

export const CalenderUI = styled.div`
  width: 303px;
  height: 303px;

  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;

  #start {
    background-color: #2b42bb;
    color: white;
    border-radius: 15px;
  }

  #end {
    background-color: red;
    color: white;
    border-radius: 15px;
  }

  #middle {
    background-color: yellow;
    color: white;
    border-radius: 15px;
  }
`;

export const CalendarStair = styled.div`
  width: 43.2857142857px;
  height: 43.2857142857px;

  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Date = styled.div`
  display: flex;

  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 303px;
  height: 60px;
  border-radius: 15px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  button {
    position: relative;
    left: 40px;
    width: 24px;
    height: 24px;

    background-color: white;
    background-image: url(${more});

    border: none;
    outline: none;

    cursor: pointer;
  }
`;

export const People = styled.div`
  display: flex;

  margin-top: 28px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 303px;
  height: 60px;
  border-radius: 15px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  button {
    position: relative;
    left: 115px;

    width: 24px;
    height: 24px;

    background-color: white;
    background-image: url(${more});

    border: none;
    outline: none;

    cursor: pointer;
  }
`;

export const PeopleContainer = styled.div`
  width: 303px;
  height: auto;

  margin-top: 28px;

  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
`;

export const PeopleCnt = styled.button`
  width: 303px;
  height: 60px;

  background-color: white;

  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  text-align: center;

  border: none;
  border-radius: 15px;

  cursor: pointer;

  :hover {
    transition: 0.5s;
    color: white;
    background-color: #2b42bb;
  }
`;

export const totalWrap = styled.div`
  text-align: center;

  h3 {
    margin: 40px 0 14px 0;

    color: #000000;
    font-size: 24px;
  }

  h4 {
    margin: 0;
    color: #2b42bb;
    font-size: 30px;
  }
`;

export const ReservationBtn = styled.button`
  width: 303px;
  height: 52px;

  margin: 40px 0 120px 0;

  background: #2b42bb;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  border: none;
  outline: none;

  color: #ffffff;
  font-size: 18px;
`;
