import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Header(){
  return (
    <div>
      <Title>Okcupid</Title>
      <h3>Have an account?</h3>
      <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link>
    </div>
  );
}

export default Header;
