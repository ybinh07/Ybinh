import React from 'react'
import styled from 'styled-components'
import { Message } from './Content'
const Div=styled.div`
  font-size: larger;
  font-weight: bolder;
  margin-top: 10px;
  margin-left: 20px;
`
export const Header = ({title}) => {
  return (
   <>
   <Div>
        {title}
    </Div>
    <Message message='Signing up for an account is free and easy.Fill out the form below to get started
            . JavaScript is required to continue.'/>
   </> 
  )
}

export default Header