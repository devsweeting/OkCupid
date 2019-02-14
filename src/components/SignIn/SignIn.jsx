import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #b9eeef;
  height: 50em;


`;

const Form = styled.div`
  background-color: tomato;
  position: relative;
  margin: 100px auto 50px;
  width: 460px;
  height: 610px;
  text-align: center;

`;

const InnerForm = styled.div`
  width: 50px;
  height: 50px;
`


function SignIn(){
  return (
    <Wrapper>
      <div>
       <Form>
         <InnerForm>
           <h1>Sign in</h1>
         </InnerForm>
       </Form>
      </div>
    </Wrapper>
  );
}

export default SignIn;
