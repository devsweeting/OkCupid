import React from "react";
import puppy from '../../../assets/images/puppy.png';
import styled from 'styled-components';
import BodyText from './BodyText';

  const BodyWrapper = styled.div`
    display: flex;
  `;
  const CuteDog = styled.img`
    margin-bottom: -225px;
    margin-left: 20%;
    position: relative;
    left: 50px;
    top: 300px;
    height: 650px;
    transform: rotate(-2.75deg);
    
  `;

  // const BodyText = styled.`
  //   border: 1px black solid;
  // `;

function Body(){
  return (
    <div>
      <BodyWrapper>
        <BodyText/>
        <CuteDog src={puppy}/>
      </BodyWrapper>
    </div>
  );
}

export default Body;
