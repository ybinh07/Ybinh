
// import {styled} from 'styled-components'
// export const Flex =styled.div`
//     display: flex;
//     gap: 10px;
// `;
// export const Container = styled.div`
//     padding: 20px;
//     background-color: aqua;
// `;
// export const Block =styled.div`
//     border: 2px solid yellow;
//     padding: 4px;
// `;
// export const Content = ({content1, content2}) => {
//     return (
//         <Container>
//         <Flex>
//             <Block>{content1}</Block>
//             <Block>{content2}</Block>
//         </Flex>
//         </Container>
//     )
// }
import React from 'react'
import styled from "styled-components";
const Lable = styled.div`
   width: 100%;
   height: fit-content; 
   
`
const Text = styled.p`
   margin-left: 20px;
   margin-right: 20px;
`
const Input = styled.input`
margin: 0px 20px;
   width: 90%;
   height: 25px;
 
`
// const Button =styled.button`
//   width: 50px;
//   height: 30px;
// `
export const Message =({message})=>{
  return(
    <>
    <Text>{message}</Text>
    </>
  )
}
export const Content = ({title,type}) => {
  return (  
    <>
    <Lable>
     <Text>{title}</Text> 
      <Input type={type}/>
    </Lable>
    </>
  )
}

export default Content



