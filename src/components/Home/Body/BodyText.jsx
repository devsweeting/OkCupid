import React from "react";
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const BodyTextWrapper = styled.div`
  position: relative;
  top: 150px;
  left: 75px;
  font-family: sans-serif;
`;

const JoinButton = styled.button`
  box-sixing: border-box;
  display: inline-block;
  margin-bottom: 22px;
  width: 284px;
  height: 62px;
  background: rgba(0,0,0,.5);
  border-radius: 3px;
  font-size: 16px;
  line-height: 62px;
  text-align: center;
  letter-spacing: 1.1px;
  color: white;
`;

const GlobalStyles = createGlobalStyle`
  h1, p {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,900');
    font-family: 'Lato', sans-serif;
  }
`;

const Title = styled.h1`
  text-shadow: 3px 3px black;
  color: white;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
`;

const InnerBodyText = styled.p`
  line-height: 30px;
  font-size: 20px;
`;

function BodyText(){
  return (
    <BodyTextWrapper>
      <GlobalStyles />
      <Title>DATING DESERVES BETTER</Title>
      <InnerBodyText> On OkCupid, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: better.</InnerBodyText>

      <JoinButton>Join okc</JoinButton>

      <InnerBodyText> By clicking Join, you agree to our Terms of Service. Learn about how we process and use your data in our Privacy Policy and how we use cookies and similar technology in our Cookie Policy. </InnerBodyText>
    </BodyTextWrapper>
  );
}

export default BodyText;
