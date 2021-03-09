import React from 'react'
import Repos from '../../components/Repos/Repos';

const Profile = props => {
  const {user, repos} = props
  
  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    public_repos, public_gists,
    following
  } = user

  return (
    <>
      <div className='card mb-4'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-3 text-center'>
                <img className='img-thumbnail' src={avatar_url} alt={name} />
                <h1>{name}</h1>
                {location && <p>Местоположение: {location}</p>}
              </div>
              <div className='col'>
                {
                  bio && <><h3>BIO</h3><p>{bio}</p></>
                }
                <a
                  href={html_url}
                  className='btn btn-dark mb-2'
                  target='_blank'
                  rel='noreferrer'
                >Открыть профиль</a>
                <ul>
                  {login && <li>
                      <strong>Username:</strong> {login}
                    </li>}
                  {login && <li>
                    <strong>Компания:</strong> {company}
                  </li>}
                  {login && <li>
                    <strong>Website:</strong> {blog}
                  </li>}
                </ul>
                  <div className='badge badge-primary mr-1'>Подписчики: {followers}</div>
                  <div className='badge badge-success mr-1'>Подписан: {following}</div>
                  <div className='badge badge-info mr-1'>Репозитории: {public_repos}</div>
                  <div className='badge badge-dark mr-1'>Gists: {public_gists}</div>
              </div>
            </div>
          </div>
        </div>

        <Repos repos={repos} />
    </>
  )
}

export default Profile