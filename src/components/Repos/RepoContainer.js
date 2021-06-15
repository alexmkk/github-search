import React, { useEffect, useState } from 'react'
import { Repo } from './Repo'
import axios from 'axios'
import { withCreds } from '../../store/actions/users'


const RepoContainer = props => {
  
  const {repo} = props
  const [langs, setLangs] = useState([])
  
  useEffect(() => {
    let langUrl = repo.languages_url
    axios
      .get(withCreds(`${langUrl}?`))
      .then(response => setLangs(response.data))
  }, [repo.languages_url])

  return <Repo repo={repo} langs={langs} />
  
}

export default RepoContainer