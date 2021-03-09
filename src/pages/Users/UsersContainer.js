import React from 'react'
import { Search } from '../../components/Search'
import { connect } from 'react-redux'
import { search, clearUsers } from '../../store/actions/users'
import Loader from '../../components/Loader/Loader'
import Users from './Users'

const UsersContainer = props => {
  const {loading, users, fetchSearchUsers, fetchClearUsers} = props
  return (
      <>
        <Search 
          fetchSearchUsers={fetchSearchUsers}
          fetchClearUsers={fetchClearUsers}
        />
        {loading 
          ? <Loader />
          : <Users users={users} />
        }
        
      </>
  )
}

const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading
})

const mapDispatchToprops = dispatch => ({
  fetchSearchUsers: value => dispatch(search(value)),
  fetchClearUsers: () => dispatch(clearUsers())
})


export default connect(mapStateToProps, mapDispatchToprops)(UsersContainer)