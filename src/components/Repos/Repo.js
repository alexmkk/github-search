import React from 'react'
import { convDate } from '../../utils/convertDate';
import Langs from './Langs';

export const Repo = ({repo, langs}) => {
  return (
    <>
      {
        <div className='card mb-3'>
        <div className="card-header">
          Обновлен: {convDate(repo.updated_at)}
        </div>
        <div className='card-body'>
          <h5>
            <a  
              href={repo.html_url}
              target='_blank'
              rel='noreferrer'
            >{repo.name}</a>
          </h5>
          <Langs langs={langs}/>
        </div>
      </div>
      }
    </>
  )
}