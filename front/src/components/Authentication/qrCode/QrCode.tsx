import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Container } from "./QrCode.style";
import { instance } from "util/axios";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { hotelState } from "store/hotel/hotelState";

const QrCode = () => {
  const [qrValue, setQrValue] = useState("");
  const [startDate, setstartDate] = useState("10월 01일 12시 00분");
  const [endDate, setendDate] = useState("10월 02일 24시 00분");
  const [time, setTime] = useState(15);
  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [hotelname, setHotelname] = useRecoilState(hotelState);
  const seed= process.env.REACT_APP_SEED;
  // const seed = 1234;

  const getQrCode = async() => {
    await instance.get(`/getalpha?hotel=${hotelname}&room=${headerItem}`)
    .then((res) => {
      setQrValue(String(rand(Number(seed), Number(res.data.qr))));
    }).catch((err) => {
      console.log(err)
    })
  }
  const rand = (seed: number, alpha: number) => {
    seed ^= seed << 13;
    let t = seed ^ alpha ^ (seed >> 17) ^ (alpha >> 26);
    return t + alpha
  };

  useEffect(() => {
    setTimeout(() => {
      getQrCode();
    }, 15000);
  }, [qrValue]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);

      if (time === 0) {
        setTime(15);
      }
    }, 1000);
  }, [time]);

  useEffect(() => {
    getQrCode();
  }, []);

  return (
    <Container>
      <QRCodeSVG value={qrValue} size={303} />
      <div>
        <div className="qr_flex_end">
          <p>
            갱신까지<span>{time}</span>초
          </p>
        </div>
        <div className="qr_flex_start qr_text">입장 유효기간</div>
        <div className="qr_flex_start qr_date">{startDate} ~</div>
        <div className="qr_flex_start qr_date">{endDate} </div>
      </div>
    </Container>
  );
};

export default QrCode;
