import React from 'react'

import styled from 'styled-components'


const Input = styled.input`
  height: 25px;
  width: 60%;
  margin: auto 0px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
export const Text = styled.p`  
  align-items: center;
  color: white;
  width: 50px;
`;
const InputContainer = styled.div`
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    background-color: #897BDA;

`

const Form = ({ title, pHolder, type, value, onChange }) => {
  return (
    
    <InputContainer> 
      <Text>{title}</Text> 
      <Input 
      value={value} 
      type={type} 
      placeholder={pHolder} 
      onChange={onChange} />

    </InputContainer>
   
  )
}

export default Form