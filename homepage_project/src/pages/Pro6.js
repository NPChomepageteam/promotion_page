import React from "react";
import styled from "styled-components";

import {Routes, Route, Link} from 'react-router-dom'
const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;
`;
const TextDiv = styled.div`
  position: absolute;
  left: 35px;
  top: 90px;
  white-space: nowrap;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
`;

const ScrollDiv = styled.div`
  margin-top: 160px;
  margin-left: 35px;
  overflow: scroll;

  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuDiv = styled.div`
  display: inline-block;
  width: 54px;
  height: 54px;
  background: #ffffff;
  border: 2px solid #4c88ff;
  border-radius: 50%;
  text-align: center;
  line-height: 54px;
  margin-right: 10px;

  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 600;
`;

const DetailDiv = styled.div`
  width: 324px;
`;

const ImageDiv = styled.img`
  background-size: cover;
  width: 324px;
  height: 204px;

  margin-top: 100px;
  margin-left: 35px;
`;

const GameDetail = styled.div`
  display: inline-block;
  width: 325px;
  height: 89px;
  background: #F6F6F6;
  border-radius: 10px;
  text-align: center;

  margin-right: 33px;
  margin-left: 33px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 600;
`;

const DetailText = styled.div`
  position: absolute;
  height: 20px;
  left: 47px;
  margin-top: 10%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
`;

const NumText = styled.div`
  font-family: "Noto Sans";
  font-size: 16px;
  line-height: 100%;
  font-weight: 600;
  text-align: left;
  margin-left: 34px;
  margin-top:72px;

`
const Pro6 = () => {
  return (
    <div>
      <NumText>| 6기</NumText>
      <DetailDiv>
        <ImageDiv src="/img/올라프.jpg" style={{marginTop:'28px'}}/>
        <GameDetail>게임제목</GameDetail>
      </DetailDiv>
      <DetailDiv>
        <ImageDiv src="/img/올라프.jpg" />
        <GameDetail>게임제목</GameDetail>
      </DetailDiv>
      <DetailDiv>
        <ImageDiv src="/img/올라프.jpg" />
        <GameDetail>게임제목</GameDetail>
      </DetailDiv>
      
    </div>
  );
};

export default Pro6;