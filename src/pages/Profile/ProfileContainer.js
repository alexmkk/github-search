import React, { useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { getRepos, getUser } from './../../store/actions/users';
import { connect } from 'react-redux';
import Profile from './Profile';
import Loader from '../../components/Loader/Loader';


const ProfileContainer = (props) => {
  const params = useParams()
  const {fetchUser, fetchRepos, loading, user, repos} = props
  const urlName = params.name
  
  useEffect(() => {
    fetchRepos(urlName)
    fetchUser(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (loading) {
    return (
      <Loader />
    )
  }

  return (
      <>
        <Link to='/' className='btn btn-link'>На главную</Link>
        <Profile user={user} repos={repos} />
      </>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading,
  repos: state.repos
})

const mapDispatchToProps = dispatch => ({
  fetchUser: name => dispatch(getUser(name)),
  fetchRepos: name => dispatch(getRepos(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)