import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 500;  
`;

const BestSeller = () => {
  return (
    <Container>Best Sellers</Container>
  )
}

export default BestSeller