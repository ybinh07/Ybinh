import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
 const Container = styled.div`
    width: fit-content;
    height:fit-content;
    background-color: #1A1A1A;
    border-radius: 10px;
    padding: 10px ;
    color: white;
    margin: auto;
`
const ExpenseContainer = styled.div`
        width: 771px;
        height:fit-content;
        display: flex;
        align-items: center;
        border-radius: 10px;
    `
const Info = styled.div` 
        border-radius: 10px;
        /* display: inline-block; */
        display: flex;
        flex-direction: column;
    `

const ExpenseInfo = ({ width, height, background, margin, border, children,textAlign,fontSize,fontWeight }) => {
    return (
        <Info style={{ height, background, margin, width, border,textAlign,fontSize,fontWeight }}>
            {children}
        </Info>
    )
}
const DateBox = styled.div`
    display: flex;
    justify-content: center;
    color: white;
`
const DateContainer = ({ fontSize, content, fontWeight }) => {
    return (

        <DateBox>
            <div 
                style={{ 
                fontSize, 
                fontWeight, 
                marginTop: '13px' }}
                >{content}
            </div>
        </DateBox>

    )
}


const Expense = ({ background, dateTitle,nameTitle,amountTitle }) => {
    // console.log(amountTitle)
    const selectDate = () => {
        const getDate = new Date(dateTitle);
        const year = getDate.getFullYear();
        const thang = moment().month(getDate.getMonth() + 1).format('MMM');
        const day = getDate.getDate();
        return (
            <>
                <DateContainer 
                fontSize='12px' 
                content={thang} />

                <DateContainer 
                fontWeight='bolder' 
                fontSize='15px' 
                content={year} />

                <DateContainer 
                fontWeight='bolder' 
                fontSize='22px' 
                content={day} />
            </>
        )
    }
    const getFullDay = selectDate()
   
    return (
        
<Container>

        <ExpenseContainer style={{ background}}>
            {/* box Date */}
                <ExpenseInfo 
                width='114px' 
                height='114px' 
                background='#1A1A1A' 
                border='1px solid white' 
                margin='10px 25px' >
                {getFullDay}
            </ExpenseInfo>

            {/* Tên expense */}
              <ExpenseInfo 
              width='500px' 
              height='40px' 
              fontSize='36px'
              fontWeight='bolder'>
                {nameTitle}
            </ExpenseInfo>  
            
            {/* box chi phí */}
            <ExpenseInfo 
            width='68px'
            height='48px' 
            background='#862796' 
            border='1px solid white'  
            textAlign='center' 
            fontWeight='bolder'
            >
                {amountTitle}$
            </ExpenseInfo> 
        </ExpenseContainer>

        </Container>
    )
}

export { ExpenseInfo, Container }
export default Expense