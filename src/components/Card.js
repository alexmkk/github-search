import React from 'react'
import {Link} from 'react-router-dom'

export const Card = ({login, avatar_url}) => 
    <div className='card'>
      <img src={`${avatar_url}`} alt='' className='card-img-top' />
      <div className='card-body'>
      <h5 className='card-title'>{login}</h5>
        <Link to={'/profile/' + login} className='btn btn-primary'>Открыть</Link>
      </div>
    </div>
 