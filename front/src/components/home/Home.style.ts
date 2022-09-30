import styled from "styled-components";
import HomeLogo from "../../assets/image/Home/HomeLogo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 100px;

  align-items: center;

  .home_logo {
    position: relative;

    display: flex;
    align-items: center;

    width: 303px;
    height: 155px;

    margin-top: 40px;

    background: #2b42bb;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;

    p {
      margin-left: 22px;

      color: #ffffff;
      font-size: 18px;
      white-space: nowrap;
    }

    div {
      position: absolute;
      top: 12%;
      right: 0%;

      width: 100px;
      height: 130px;

      background-image: url(${HomeLogo});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .get_box {
    cursor: pointer;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 303px;
    height: 221px;
    margin-top: 40px;

    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: none;
    outline: none;

    h4 {
      color: #000000;
      font-size: 24px;

      margin-top: 14px;
    }
  }
`;
