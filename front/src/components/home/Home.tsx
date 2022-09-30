import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./Home.style";
import MyImage from "../../assets/image/Home/my.png";
import ReservationImage from "../../assets/image/Home/reservation.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="home_logo">
        <p>
          <strong>Check-Q</strong>를 통해
          <br />
          간편하게 체크인해봐요!
        </p>
        <div></div>
      </div>
      <button className="get_box" onClick={() => navigate("/reservation")}>
        <img src={MyImage} alt="예약하러 가기" />
        <h4>예약하러 가기</h4>
      </button>
      <button className="get_box" onClick={() => navigate("/")}>
        <img src={ReservationImage} alt="내가 예약한 호텔" />
        <h4>내가 예약한 호텔</h4>
      </button>
    </Container>
  );
};

export default Home;
