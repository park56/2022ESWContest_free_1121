import React, { useEffect, useState } from "react";
import * as S from "./RoomReservation.style";
import Calender from "./Calender/Calender";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { hotelState } from "store/hotel/hotelState";
import { API } from "util/axios";

import hotelRoom from "../../assets/image/Reservation/hotelRoom1.png";
import men from "../../assets/image/Reservation/men.png";

const RoomReservation = () => {
  const [roomInfo, setRoomInfo] = useState({
    HotelImage: "../../assets/image/Reservation/hotelRoom1.png",
    hotelname: "신라호텔",
    personnel: "2",
    price: "91,200",
  });

  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [hotelname, setHotelname] = useRecoilState(hotelState);

  let stPeople: number[] = [];
  const makeStPeople = () => {
    for (let i = 0; i < Number(roomInfo.personnel); i++) {
      stPeople[i] = i + 1;
    }

    console.log(stPeople);
  };

  const getRoom = async() => {
    await API.get(`/gethotelinfo?hotel=${hotelname}&room=${headerItem}`)
      .then((res) => setRoomInfo(res.data.data))
      .catch((err) => console.log(err))
  };

  
  useEffect(() => {
    makeStPeople();
  }, [roomInfo]);
  
  useEffect(() => {
    getRoom();
  }, [])

  return (
    <S.Container>
      <S.RoomInfo>
        <img id="room" src={hotelRoom} />
        <h2>{roomInfo.hotelname}</h2>
        <div>
          <img id="people" src={men} />
          <h3>{roomInfo.personnel}인</h3>
          <h2>{roomInfo.price}원</h2>
        </div>
        <h3 id="day">1박 기준</h3>
      </S.RoomInfo>
      <S.CalculatorContainer>
        <Calender peopleCnt={stPeople} roomInfo={roomInfo.price}/>
      </S.CalculatorContainer>
    </S.Container>
  );
};

export default RoomReservation;
