import React from "react";
import puppy from '../../../assets/images/puppy.png';
import styled from 'styled-components';

  const BodyWrapper = styled.div`
    display: flex;
  `;
  const CuteDog = styled.img`
    margin-bottom: -225px;
    margin-left: 20%;

  `;

function Body(){
  return (
    <BodyWrapper>
      <CuteDog src={puppy}/>
    </BodyWrapper>
  );
}

export default Body;
