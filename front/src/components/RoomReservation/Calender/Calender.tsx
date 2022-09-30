import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as S from "./Calender.style";
import { instance } from "util/axios";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { hotelState } from "store/hotel/hotelState";

const Calender = ({ peopleCnt, roomInfo }: { peopleCnt: number[], roomInfo: string }) => {
  const d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [days, setDays] = useState(dayjs());
  const [start, setStart] = useState<String>(days.format("YYYY-MM-DD"));
  const [end, setEnd] = useState(days.format("YYYY-MM-DD"));
  const [toggle, setToggle] = useState(false);
  const [dayCnt, setDayCnt] = useState(0);
  const [money, setMoney] = useState(Number(roomInfo));

  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [hotelname, setHotelname] = useRecoilState(hotelState);

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  const changeDays = (time: number) => {
    setDays(dayjs(days.add(time, "month")));
  };

  const changeDate = (time: number) => {
    setStart(`${days.get("year")}-${days.get("month") + 1}-${time}`);
  };

  const changeDate2 = (e: any, time: number) => {
    e.preventDefault();
    setEnd(`${days.get("year")}-${days.get("month") + 1}-${time}`);
  };

  const countMoney = () => {
    if (dayCnt == 0) {
      setMoney(Number(roomInfo));
    } else if (dayCnt < 0) {
      setMoney(Math.abs(91200 * Math.abs(dayCnt)));
    } else if (dayCnt > 0) {
      setMoney(0);
    }
  };

  useEffect(() => {
    setDayCnt(Number(start.split("-")[2]) - Number(end.split("-")[2]));
  }, [start, end]);

  useEffect(() => {
    countMoney();
  }, [dayCnt]);

  const getID = (number: number) => {
    if (
      Number(start.split("-")[0]) === days.get("year") &&
      Number(start.split("-")[1]) === days.get("month") + 1 &&
      Number(start.split("-")[2]) === number + 1
    ) {
      return "start";
    } else if (
      Number(end.split("-")[0]) === days.get("year") &&
      Number(end.split("-")[1]) === days.get("month") + 1 &&
      Number(end.split("-")[2]) === number + 1
    ) {
      return "end";
    } else {
      return "";
    }
  };

  const [people, setPeople] = useState(1);
  const [peopleToggle, setPeoplToggle] = useState(false);

  const changePeopleToggle = () => {
    setPeoplToggle((prev) => !prev);
  };

  const reservation = async() => {
    await instance.post(`/reservation?id=${localStorage.getItem('user_id')}`, {
      hotelname: hotelname,
      room: headerItem
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    });
    alert("예약에 성공하였습니다.");
  };

  return (
    <>
      {toggle ? (
        <S.Container>
          <S.DateInfo>
            <button onClick={() => changeDays(-1)} />
            <p>
              {days.get("year")}년 {days.get("month") + 1}월
            </p>
            <button onClick={() => changeDays(1)} />
          </S.DateInfo>
          <S.CalenderUI>
            {d.map((v, idx) => (
              <S.CalendarStair key={idx}>{v}</S.CalendarStair>
            ))}
            {d.slice(0, d.indexOf(days.format("ddd"))).map((v, idx) => (
              <S.CalendarStair key={idx}></S.CalendarStair>
            ))}
            {new Array(Number(days.daysInMonth())).fill(1).map((v, idx) => (
              <S.CalendarStair
                key={idx}
                onClick={() => changeDate(idx + 1)}
                onContextMenu={(e) => changeDate2(e, idx + 1)}
                id={getID(idx)}
              >
                {idx + 1}
              </S.CalendarStair>
            ))}
          </S.CalenderUI>

          <S.CheckContaienr>
            <p>
              체크인 : 좌클릭 <br /> 체크아웃 : 우클릭{" "}
            </p>
            <button onClick={changeToggle}>확인</button>
          </S.CheckContaienr>
        </S.Container>
      ) : (
        <>
          <S.Date>
            <p>
              {dayjs(String(start)).format("MM월 DD일")} ~ {dayjs(String(end)).format("MM월 DD일")}
            </p>
            <button onClick={changeToggle} />
          </S.Date>

          {peopleToggle ? (
            <S.PeopleContainer>
              {peopleCnt.map((v) => {
                return (
                  <S.PeopleCnt
                    key={v}
                    onClick={() => {
                      changePeopleToggle();
                      setPeople(v);
                    }}
                  >
                    {v}인
                  </S.PeopleCnt>
                );
              })}
            </S.PeopleContainer>
          ) : (
            <S.People>
              <p>{people}인</p>
              <button onClick={changePeopleToggle} />
            </S.People>
          )}
        </>
      )}
      <S.totalWrap>
        <h3>총액</h3>
        <h4>{money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</h4>
      </S.totalWrap>
      <S.ReservationBtn onClick={reservation}>예약하기</S.ReservationBtn>
    </>
  );
};

export default Calender;
