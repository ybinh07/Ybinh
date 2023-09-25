import React from 'react'
import styled from "styled-components";
const Container = styled.div`
    width: 799px;
    min-height:100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 40px;

`
const ButtonTittle = styled.button`
    height: 30px;
    border-radius: 10px;
    padding: 0px 10px;
    border: none;
    font-weight: bolder;
    margin-left: 15px;
`


export const ButtonForm =({background, title, width, height,margin, onClick, color}) => {
  return(
        <ButtonTittle 
        style={{background, width, height,margin,color}} 
        onClick={onClick}>{title}</ButtonTittle>
  )
}

export const Header = ({background,onClick,color}) => {
  return (
    <Container style={{background,color}}>
      <ButtonForm 
      background='#862796' 
      color='white' 
      width='277px'
      height='44px'
      title='Add New Expense' 
      margin='auto' 
      onClick={onClick}/>
    </Container>
  )
}

export default Header