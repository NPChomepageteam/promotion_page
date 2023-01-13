import React from "react";
import styled from "styled-components";

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
  width: 100%;

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
  margin-top: 195px;
`
const QText = styled.div`
    color:#4C88FF;
    font-size: 16px;
    font-weight: 600;
    width: 279px;
    margin-top:50px;
    text-align: left;
    margin-left:13.05px;
    margin-right:43.65px;
    display: inline-block;
`
const QImg = styled.img`
background-size: cover;
display: inline-block;
width: 8px;
height: 10px;
margin-top: 5px;
margin-left: 40px;

`
const QDiv = styled.div`
background-size: cover;
display: inline-block;
width: 8px;
height: 10px;
margin-right: 13.05px;
margin-top: 5px;
margin-left: 49px;

`
const ADetail = styled.div`
  display: inline-block;
  width: 310px;
  height: 78px;
  background: #F3F3F3;
  border-radius: 10px;
  text-align: center;
  margin-top: 20.5px;
  padding-top:20px;
  margin-right: 33px;
  margin-left: 33px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 600;
`;
const Project = () => {

  return (
    <div>
      <TextDiv>Q&A</TextDiv>
      <Hr/>
      <DetailDiv>
      <QImg/>
      <QText style={{marginTop:'28px'}}>텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리?</QText>
      <ADetail></ADetail>
      </DetailDiv>
      <DetailDiv>
      <QImg/>
      <QText>텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리?</QText>
      <ADetail></ADetail>
      </DetailDiv>
      <DetailDiv>
      <QImg/>
      <QText>텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리?</QText>
      <ADetail></ADetail>
      </DetailDiv>
      <DetailDiv>
      <QImg/>
      <QText>텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리?</QText>
      <ADetail></ADetail>
      </DetailDiv>
      <DetailDiv>
      <QImg/>
      <QText>텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리?</QText>
      <ADetail></ADetail>
      </DetailDiv>
    </div>
  );
};

export default Project;