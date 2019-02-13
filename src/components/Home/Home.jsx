import React from "react";
import Body from './Body/Body';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2em;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 50em;
  margin-top: -200px;

  animation: colorchange 50s;
  -webkit-animation: colorchange 100s;
  @keyframes colorchange
  {
    0%   {background: #fec5e2;}
    50%  {background: #23d7ef;}
    75%  {background: tomato;}
    100%  {background: #21bc66;}
  }

  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
  {
    0%   {background: #fec5e2;}
    50%  {background: #23d7ef;}
    75%  {background: tomato;}
    100%  {background: #21bc66;}
  }
`;



function Home(){
  return (
    <div>
      <Wrapper>
        <Body/>
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default Home;
