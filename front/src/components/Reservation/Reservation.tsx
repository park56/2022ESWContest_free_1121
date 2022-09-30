import React, { useState } from "react";
import * as S from "./Reservation.style";
import HotelContainer from "./Hotel/HotelInfo";
import { API } from "util/axios";


export interface ISearchItem {
  img: string,
  hotelname: string,
  location: string
}

const Reservation = () => {
  const [item, setItem] = useState('');
  const [searchItem, setSearchItem] = useState<ISearchItem[]>([]);
  
  const search = async(value:string) => {
    await API.get(`/hotelsearch?hotel=${value}`)
    .then((res) => setSearchItem(res.data.data))
    .catch((err) => console.log(err))
  };

  const onKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      search(e.target.value)
    }
  }
  

  return (
    <S.Container>
      <input type="text" placeholder="검색" value={item} onChange={(e) => setItem(e.currentTarget.value)} onKeyPress={onKeyPress}/>
      <HotelContainer searchItem={searchItem}/>
    </S.Container>
  );
};

export default Reservation;
