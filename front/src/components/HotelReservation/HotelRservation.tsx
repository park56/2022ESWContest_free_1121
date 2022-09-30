import React, { useState, useEffect } from "react";
import * as S from "./HotelRservation.style";

import testHotel from "../../assets/image/Reservation/testHotel.png";
import GPS from "../../assets/image/Reservation/GPS.png";
import Time from "../../assets/image/Reservation/time.png";
import Call from "../../assets/image/Reservation/call.png";
import Men from "../../assets/image/Reservation/men.png";
import hotelRoom from "../../assets/image/Reservation/hotelRoom1.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { API } from "util/axios";

const HotelRservation = () => {
  const navigate = useNavigate();
  const [headerItem, setHeaderItem] = useRecoilState(headState);

  const [HotelInfo, SetHotelInfo] = useState({
    img: "../../assets/image/Reservation/testHotel.png",
    hotelname: "신라호텔",
    location: "서울",
    checkin: "12:00",
    checkout: "24:00",
    phoneNumber: "02-2222-2222",
  });

  const [roomInfo, setRoomInfo] = useState([
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      room: "2002호",
      personnel: "2",
    }
  ]);


  const gethotel = async() => {
    await API.get(`/gethotel?hotel=${headerItem}`)
      .then((res) => {
        console.log(res.data.data)
        SetHotelInfo(res.data.data)
        setRoomInfo([res.data.data])
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    gethotel();
  }, []);

  return (
    <S.Container>
      <S.HotelInfo>
        <img src={testHotel} id="hotel" />
        <h4>{HotelInfo.hotelname}</h4>
        <S.TextContainer>
          <img src={GPS} alt="위치" />
          <p>{HotelInfo.location}</p>
        </S.TextContainer>
        <S.TextContainer>
          <img src={Time} alt="위치" />
          <p>체크인 {HotelInfo.checkin} ~ 체크아웃 {HotelInfo.checkout}</p>
        </S.TextContainer>
        <S.TextContainer>
          <img src={Call} alt="위치" />
          <p>{HotelInfo.phoneNumber}</p>
        </S.TextContainer>
      </S.HotelInfo>

      <div style={{ marginBottom: "40px" }}>
        <S.RoomContainer>
          {roomInfo.map(({ img, room, personnel }, idx) => {
            return (
              <S.HotelContainer key={idx} onClick={() => {
                                                          setHeaderItem(room)
                                                          navigate(`/reservation/:id/:room`)
                                                          }}>
                <S.HotelRoomInfo>
                  <img src={hotelRoom} id="hotel" alt={room} />
                  <h2>{room}</h2>
                  <div>
                    <img src={Men} id="GPS" alt="위치" />
                    <h3>{personnel}인</h3>
                  </div>
                </S.HotelRoomInfo>
              </S.HotelContainer>
            );
          })}
        </S.RoomContainer>
      </div>
    </S.Container>
  );
};

export default HotelRservation;
