import React from 'react'
import { styled } from 'styled-components'
import { Header } from './Header';
import Content, { Message } from './Content';
import StyleButton from './Footer';
export const Container = styled.div`
margin: 70px auto;
width: 500px;
height: fit-content;
border: 1px solid black;
`;
const Body = styled.div`
    width: 100%;
`
const Footer = styled.div`
    width: 100%;
`
const Layout = () => {
    return (
        <Container>
            <Header title='Sign up for an account' />
           
            <Body>
                <Content title='Username ' type='text'></Content>
                <Content title='Password (4 characters minimum) ' type='password' />
                <Content title='Password confirm' type='password' />
                <Content title='Email' type='email' />

            </Body>

            <Footer>
            <Message message='By clicking the "Sign up" button below, I certify that I
                 have read and agree to the TMDB terms of use and privacy policy.'/>

                <StyleButton color='white' background='#00BFFF' contents='Đăng ký' />
                <StyleButton color='#00BFFF' background='white' contents='Cancel' />
            </Footer>
        
        </Container>
    )
}


export default Layout