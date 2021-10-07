import React from 'react'
import styled from "styled-components";

const PStyle = styled.div `
  max-width: 500px;
  margin: 0px auto;
  font-size: 2rem;
  line-height: 1.3em;
  p:hover{
      color:black;
      font-size:2rem;
    
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export default function Ptex({children}) {
    
    return (
        <PStyle className="para">
        <p>{children}</p>    
        </PStyle>
    )
}
