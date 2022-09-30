import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: calc(100vh - 264px);
`;

export const HotelInfo = styled.div`
  width: 303px;

  #hotel {
    width: 303px;
    height: 303px;
    margin-top: 40px;
  }

  h4 {
    margin: 28px 0px 0px 0px;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 14px;
  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    color: #b4b4b4;

    margin: 0px 0px 0px 8px;
  }
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 41px;
  margin-bottom: 40px;
`;

//

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

export const HotelRoomInfo = styled.div`
  position: relative;

  width: 303px;
  height: 388px;

  margin-bottom: 120px;

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
