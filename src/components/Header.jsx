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
  display: flex;
  justify-content: space-between;
`;

const TestButton = styled(Link)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
  color: palevioletred;
`;

function Header(){
  return (
    <Wrapper>
      <Title>Okcupid</Title>
        <div>
      <h3>Have an account?</h3>
      <TestButton to="/">Home</TestButton>  <TestButton to="/signin">Sign In</TestButton>
      </div>
    </Wrapper>
  );
}

export default Header;
