import React from 'react'
import RepoContainer from './RepoContainer';

const Repos = props => {
  const {repos} = props
  
  return (
    <>
      {repos
        .sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
        .map(repo => {
          return <RepoContainer
            key={repo.id}  
            repo={repo}
          />
        })}
    </>
  )
}

export default Repos