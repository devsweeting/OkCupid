import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #fec5e2;
`;

function Header(){
  return (
    <Wrapper>
      <Title>Okcupid</Title>
      <h3>Have an account?</h3>
      <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link>
    </Wrapper>
  );
}

export default Header;
