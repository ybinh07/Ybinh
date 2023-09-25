import React, { useState } from 'react';
import './App.css';
import Header, { ButtonForm } from './components/Button';
import Form from './components/Form';
import styled from 'styled-components';
import Expense, { Container } from './components/Expense';

const FormContainer = styled.div`
    width: 799px;
    min-height: 40px;
    border-radius: 10px;
    background-color: #897BDA;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
`
const Year = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 13px;
`
const initialForm = {
  name: '',
  amount: '',
  date: '',
  year: ''
}

function App() {
  const [infoForm, setForm] = useState(initialForm);
  const { name, amount, date } = infoForm
  const [listForm, setListForm] = useState([])
  const [showForm, setShowForm] = useState(false);

  const [showExpenseInfo, setShowExpenseInfo] = useState(false);

  const [filterExpense, setFilterExpense] = useState([])
  const [showExpenseFilter, setShowExpenseFilter] = useState(false)
  

  // console.log(listForm)

  const handleChange = (key, event) => {
    const value = event.target.value
    setForm({ ...infoForm, [key]: value })
    // console.log(key, event)
  }

  // console.log(cutYear)
  const appearForm = () => {
    // console.log(123)
    setShowForm(true);
  }

  const addClick = () => {
    // console.log(infoForm)

    if (!name || !amount || !date) {
      alert('Invalid content')

    } else {

      // console.log(123)
      const cutYearFormDate = date.slice(0, 4)
      const UpDateYear = { ...infoForm, year: cutYearFormDate }
      setListForm([...listForm, UpDateYear])
      setForm(initialForm)
      setShowExpenseInfo(true);

    }
  }
  // console.log(listForm)
  const cancelClick = () => {
    setForm(initialForm)
  }

  // const ChangeYear = () => {

  // }
  const handleChangeYear = (e) => {
    const selectedYear = e.target.value
    const filteredYears = listForm.filter(form => form.year === selectedYear);
    // console.log(selectedYear)
    {
      if (selectedYear === '0') {
        setShowExpenseInfo(true)
        setShowExpenseFilter(false)

      } else {
        setFilterExpense(filteredYears)
        setShowExpenseInfo(false)
        setShowExpenseFilter(true)
      }

    }
  }
  // console.log(filterExpense)
  const years = () => {
    const options = []
    for (let i = 2000; i <= 2023; i++) {
      options.push(
        <option value={i}>{i}</option>

      )
    }

    return (
      <div>
        <select onChange={handleChangeYear} className='selected_year'>
          {options}
          <option value='0'>All Expenses</option>
        </select>
      </div>
    )
  }


  return (

    <>
      {/* Nút xuất hiện form */}
      <Header background='#897BDA' color='FFFFFF' onClick={(e) => appearForm()} />
      {showForm && (<FormContainer>
          

          {/* Form */}
        <Form
          title='Name'
          pHolder='Enter name here'
          type='text'
          value={name}
          onChange={(e) => handleChange('name', e)} />

        <Form
          title='Amount'
          pHolder='Enter Amount here'
          type='number'
          value={amount}
          onChange={(e) => handleChange('amount', e)} />

        <Form
          title='Date'
          pHolder='dd/mm/yyy'
          type='date' value={date}
          onChange={(e) => handleChange('date', e)} />

        <div className='button_add_cancel'>

        {/* Nút Add */}
          <ButtonForm
            background='#862796'
            color='white'
            title='Add'
            onClick={(e) => addClick()} />

          {/* Nút cancel */}
          <ButtonForm
            background='#D0D0D0'
            title='Cancel'
            color='#6A6A6A'
            onClick={(e) => cancelClick()} />

        </div>

      </FormContainer>)}

      {/* hiện những expense được filter */}
      {showExpenseFilter && (
        <Container>
          <Year >
            <h3>Filter by year</h3>
            {years()}

          </Year>

          {filterExpense.map((formInfo) => (
            <Expense
              background="#575757"
              dateTitle={formInfo.date}
              nameTitle={formInfo.name}
              amountTitle={formInfo.amount} />
          ))}
        </Container>
      )}

      {/* hiện tất cả expense */}
      {showExpenseInfo && (
        <Container>
          <Year >
            <h3 style={{ paddingLeft: '10px' }}>Filter by year</h3>
            {years()}

          </Year>

          {listForm.map((formInfo) => (
            <Expense
              background="#575757"
              dateTitle={formInfo.date}
              nameTitle={formInfo.name}
              amountTitle={formInfo.amount} />
          ))}
        </Container>
      )}
    </>

  )
}

export default App;
