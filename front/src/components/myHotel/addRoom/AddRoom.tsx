import React, { useState, useEffect } from "react";
import { Container } from "./AddRoom.style";
import { InputWrapper } from "styles/them.style";
import { ImgInputWrap } from "../MyHotel.style";

import UploadImage from "assets/image/MyHotel/uploadImage.png";

const AddRoom = ({register, watch}: any) => {
  const [imgPreview, setImgPreview] = useState("");
  const [addRoom, setAddRoom] = useState(0);

  const room_image = watch("room_image");

  const RoomHandler = () => {
    setAddRoom(prev => prev + 1)
  };

  useEffect(() => {
    if (room_image && room_image.length > 0) {
      const file: any = room_image[0];
      setImgPreview(URL.createObjectURL(file));
    }

  }, [room_image]);

  return (
    <Container>
      {addRoom > 0 && (
        <div>
          <InputWrapper>
            <label>방 이름</label>
            <input 
              type="text" 
              {...register('room_name', {
                required: true
              })} />
          </InputWrapper>
          <InputWrapper>
            <label>가격</label>
            <input 
              type="text" 
              {...register('price', {
                required: true
              })} />
          </InputWrapper>
          <InputWrapper>
            <label>인원 수</label>
            <input 
              type="text" 
              {...register('people_number', {
                required: true
              })} />
          </InputWrapper>
          <ImgInputWrap>
            <label htmlFor="file_input_room">
              <img src={imgPreview || UploadImage} alt="호텔 사진"/>
            </label>
            <input 
              id="file_input_room" 
              type="file" 
              {...register('room_image', {
                required: true
              })} />
        </ImgInputWrap>
        </div>
      )}
      <button type="button" onClick={RoomHandler}>방 추가하기</button>
    </Container>
  );
};

export default AddRoom;
