import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "./Header.style";
import backImg from "../../../assets/image/Icon/back.png";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";

const Header = () => {
  const navigate = useNavigate();
  const [headerItem, setHeaderItem] = useRecoilState(headState);

  return (
    <H.Container>
      <nav>
        <H.ContentWrapper>
          <button onClick={() => navigate(-1)}>
            <img src={backImg} alt="뒤로가기" />
          </button>
          <H.Content>{headerItem}</H.Content>
        </H.ContentWrapper>
      </nav>
    </H.Container>
  )
};

export default Header;
