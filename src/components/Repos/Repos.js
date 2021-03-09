import React from 'react'
import RepoContainer from './RepoContainer';

const Repos = props => {
  const {repos} = props
  
  return (
    <>
      {repos.map(repo => {
        return <RepoContainer
          key={repo.id}  
          repo={repo}
        />
      })}
    </>
  )
}

export default Repos