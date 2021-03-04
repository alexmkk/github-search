import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/AlertContext'

export const Search = props => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const {fetchSearchUsers, fetchClearUsers, text, setSearchText} = props
  
  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    fetchClearUsers()

    if (value.trim()) {
      alert.hide()
      fetchSearchUsers(value.trim())
    } else {
      alert.show('Введите данне пользователя')
    }
  }
  
  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='Введите ник пользователя'
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}