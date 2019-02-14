import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #b9eeef;
  box-sizing: border-box;


`;

const Form = styled.div`
  background-color: tomato;
  position: relative;
  margin: 100px auto 50px;
  width: 460px;
  height: 610px;
  text-align: center;

`;




function SignIn(){
  return (
    <Wrapper>
      <div>
       <Form>

           <h1>Sign in</h1>

       </Form>
      </div>
    </Wrapper>
  );
}

export default SignIn;
