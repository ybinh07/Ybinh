import React from 'react'
import styled from 'styled-components'
const Div=styled.div`
  font-size: larger;
  font-weight: bolder;
  margin-top: 10px;
  margin-left: 20px;
`
export const Header = ({title}) => {
  return (
    <Div>
        {title}
      
    </Div>
  )
}

export default Header