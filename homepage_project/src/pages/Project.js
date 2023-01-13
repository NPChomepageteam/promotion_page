import React from "react";
import styled from "styled-components";
import Pro1 from './Pro1';
import Pro2 from './Pro2';
import Pro3 from './Pro3';
import Pro4 from './Pro4';
import Pro5 from './Pro5';
import Pro6 from './Pro6';
import ProAll from './ProAll'
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
  background: #F3F3F3;
  border: 2px solid #F3F3F3;
  border-radius: 20px;
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
  height: 192px;

  margin-top: 100px;
  margin-left: 35px;
`;

const GameTitle = styled.div`
  position: absolute;
  left: 47px;
  margin-top: 2%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #000000;
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

const Hr = styled.hr`
  border: solid 1px #E8E8E8;
  margin-top: 22px;
`

const Project = () => {

  return (
    <div>
      <TextDiv>프로젝트</TextDiv>
      
      <ScrollDiv>
      <StyledLink to="/"><MenuDiv>전체</MenuDiv></StyledLink>
      <StyledLink to="/Pro6"><MenuDiv>6기</MenuDiv></StyledLink>
      <StyledLink to="/Pro5"><MenuDiv>5기</MenuDiv></StyledLink>
      <StyledLink to="/Pro4"><MenuDiv>4기</MenuDiv></StyledLink>
      <StyledLink to="/Pro3"><MenuDiv>3기</MenuDiv></StyledLink>
      <StyledLink to="/Pro2"><MenuDiv>2기</MenuDiv></StyledLink>
      <StyledLink to="/Pro1"><MenuDiv>1기</MenuDiv></StyledLink>
      </ScrollDiv>
      <Hr/>
      <Routes>
        <Route path="/" element={<ProAll />}/>
        <Route path="/Pro6" element={<Pro6 />}/>
        <Route path="/Pro5" element={<Pro5 />}/>
        <Route path="/Pro4" element={<Pro4 />}/>
        <Route path="/Pro3" element={<Pro3 />}/>
        <Route path="/Pro2" element={<Pro2 />}/>
        <Route path="/Pro1" element={<Pro1 />}/>
      </Routes>
    </div>
  );
};

export default Project;