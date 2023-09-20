import React from 'react'
import styled from "styled-components";
const ContainerHeader = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
`
const ButtonTittle = styled.button`
    height: 30px;
    width: 150px;
    margin: 10px 0px;
    border-radius: 3px;
    border: none;
`


export const Header = ({background}) => {
  return (
    <ContainerHeader style={{background}}>
        <ButtonTittle >hi</ButtonTittle>
    </ContainerHeader>
  )
}

export default Header