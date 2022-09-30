import React, { useState, useEffect, useCallback } from "react";
import * as S from "./HotelInfo.style";

import GPS from "../../../assets/image/Reservation/GPS.png";
import testHotel from "../../../assets/image/Reservation/testHotel.png";
import { useNavigate } from "react-router-dom";
import { API } from "util/axios";
import { ISearchItem } from "../Reservation";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { hotelState } from "store/hotel/hotelState";

const HotelContainer = ({searchItem} : {searchItem : ISearchItem[]}) => {
  const navigate = useNavigate();
  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [hotelname, setHotelname] = useRecoilState(hotelState);
  
  const [hotelInfo, setHotelInfo] = useState<ISearchItem[]>([]);

  const getHotels = async() => {
    await API.get('/gethotels')
    .then((res) => setHotelInfo(res.data.data))
    .catch((err) => console.log(err))
  };
  
  const changeSearchITem = useCallback(() => {
    console.log(searchItem)
    if (searchItem) {
      setHotelInfo(searchItem);
    }
  }, [searchItem])
  
  useEffect(() => {
    changeSearchITem();
  }, [changeSearchITem, searchItem])

  useEffect(() => {
    getHotels()
  }, [])
  
  useEffect(() => {
    setHeaderItem('예약')
  }, [setHeaderItem])

  return (
    <S.Container>
      {hotelInfo && hotelInfo.map(({ img, hotelname, location }, idx) => {
        return (
          <S.HotelContainer key={idx} onClick={() => {
                                                      setHotelname(hotelname);
                                                      setHeaderItem(hotelname)
                                                      navigate(`/reservation/:id`)
                                                      }}>
            <S.HotelInfo>
              <img src={testHotel} id="hotel" alt={hotelname} />
              <h2>{hotelname}</h2>
              <div>
                <img src={GPS} id="GPS" alt="위치" />
                <h3>{location}</h3>
              </div>
            </S.HotelInfo>
          </S.HotelContainer>
        );
      })}
    </S.Container>
  );
};

export default HotelContainer;
