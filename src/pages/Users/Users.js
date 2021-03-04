import React from 'react'
import { Card } from '../../components/Card'

const Users = props => {
  return (
    <div className='row'>
      {
        props.users.map(user => (
          <div className='col-sm-3 mb-3' key={user.id}>
            <Card {...user} />
          </div>)
        )
      }
    </div>
  )
}

export default Users