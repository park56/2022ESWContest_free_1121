import React, { useState, useEffect, useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Btn, InputWrapper } from "styles/them.style";
import { Container, SInputWrapper, SmallBox, ImgInputWrap } from "./MyHotel.style";

import UploadImage from "assets/image/MyHotel/uploadImage.png";
import AddRoom from "./addRoom/AddRoom";
import { instance } from "util/axios";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { hotelState } from "store/hotel/hotelState";
import axios from "axios";

interface Inputs {
  hotel_name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  phone_number: number;
  hotel_image: string;

  room_name: string;
  price: number;
  people_number: number;
  room_image: string;
}

const MyHotel = () => {
  const [imgPreview, setImgPreview] = useState("");
  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [hotelname, setHotelName] = useState(hotelState);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const hotel_image = watch("hotel_image");
  let userId = localStorage.getItem("user_id");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    alert("등록에 성공하였습니다.");

    const hotelFormData = new FormData();
    const roomFormData = new FormData();
    hotelFormData.append("image", data.hotel_image);
    roomFormData.append("room_image", data.room_image);

    try {
      if (data.hotel_name) {
        await instance.post(`/addhotel`, {
          room: data.room_name,
          personnel: data.people_number,
          price: data.price,
          hotelname: data.hotel_name,
          phoneNumber: data.phone_number,
          location: data.address,
          checkin: data.checkIn,
          checkout: data.checkOut,
        });

        // axios.post(
        //   `/addhotel`,
        //   { hotel: data.hotel_name },
        //   {
        //     headers: {
        //       id: `${useId}`,
        //     },
        //   }
        // );
      }
      // if (data.hotel_image) {
      //   // await instance.post(`/uploadimg?${data.hotel_name}`, hotelFormData);
      //   await axios({
      //     method: "post",
      //     url: `/uploadimg?${data.hotel_name}`,
      //     data: hotelFormData,
      //   });

      //   // axios.post(`/uploadimg?${data.hotel_name}`, data.hotel_image);
      // }

      // if (data.room_name) {
      //   await instance.post("/addroom", {
      //     room: data.room_name,
      //     price: data.price,
      //     personnel: data.people_number,
      //   });
      // }
      // if (data.room_image) {
      //   await instance.post("/room_image", roomFormData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   });
      // }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (hotel_image && hotel_image.length > 0) {
      const file: any = hotel_image[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [hotel_image]);

  useEffect(() => {
    setHeaderItem("호텔 등록");
  }, [setHeaderItem]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>호텔명</label>
          <input
            type="text"
            {...register("hotel_name", {
              required: true,
            })}
          />
        </InputWrapper>
        <InputWrapper>
          <label>주소</label>
          <input
            type="text"
            {...register("address", {
              required: true,
            })}
          />
        </InputWrapper>
        <SmallBox>
          <SInputWrapper>
            <label>체크인</label>
            <input type="time" {...register("checkIn", {})} />
          </SInputWrapper>
          <SInputWrapper>
            <label>체크아웃</label>
            <input type="time" {...register("checkOut", {})} />
          </SInputWrapper>
        </SmallBox>
        <InputWrapper>
          <label>전화번호</label>
          <input
            type="text"
            {...register("phone_number", {
              required: true,
            })}
          />
        </InputWrapper>
        <ImgInputWrap>
          <label htmlFor="file_input">
            <img src={imgPreview || UploadImage} alt="호텔 사진" />
          </label>
          <input
            id="file_input"
            type="file"
            {...register("hotel_image", {
              required: true,
            })}
          />
        </ImgInputWrap>
        <AddRoom register={register} watch={watch} />
        <Btn type="submit">저장</Btn>
      </form>
    </Container>
  );
};

export default MyHotel;
