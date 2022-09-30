import React, { useState, useEffect } from "react";
import * as S from "./MyHotelReservation.style";

import testHotel from "../../assets/image/Reservation/testHotel.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { hotelState } from "store/hotel/hotelState";
import { instance } from "util/axios";

const MyHotelReservation = () => {
  const navigate = useNavigate();
  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [hotelname, setHotelname] = useRecoilState(hotelState);

  const [reservationInfo, setReservationInfo] = useState([
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelname: "신라호텔",
      room: "2002호",
    }
  ]);

  const getMyReservation = async() => {
    await instance.get(`/getmyreservation?id=${localStorage.getItem('user_id')}`)
      .then((res) => {
        console.log(res.data.data)
        setReservationInfo(res.data.data)
      }).catch((err) => console.log(err))
  };

  useEffect(() => {
    setHeaderItem('내 예약');
    getMyReservation();
  }, [])

  return (
    <S.Container>
      {reservationInfo.map(({ img, hotelname, room }, idx) => {
        return (
          <S.HotelContainer
            key={idx}
            onClick={() => {
              setHotelname(hotelname);
              setHeaderItem(room)
              navigate(`/myreservation/:id`);
            }}
          >
            <S.HotelInfo>
              <img src={testHotel} id="hotel" />
              <h2>{hotelname}</h2>
              <h3>{room}</h3>
            </S.HotelInfo>
          </S.HotelContainer>
        );
      })}
    </S.Container>
  );
};

export default MyHotelReservation;
