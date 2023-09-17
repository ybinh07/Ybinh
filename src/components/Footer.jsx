import React from 'react'
import styled from 'styled-components'
export const Button =styled.button`
    width: 95px;
    height: 40px;
    border-radius: 7px;
    border: none;
    font-weight: bolder;
    margin-left: 20px;
    margin-bottom: 20px;
`
export const StyleButton = ({color,background,contents}) => {
  return (
    <>
    <Button style={{background,color}}>
    {contents}
    </Button>
    </>
  )
}

export default StyleButton