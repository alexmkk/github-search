import React from 'react'
import { Search } from '../../components/Search'
import { connect } from 'react-redux'
import { search, clearUsers, setSearchText } from '../../store/actions/users'
import Loader from '../../components/Loader/Loader'
import Users from './Users'

const UsersContainer = props => {
  const {loading, users, fetchSearchUsers, fetchClearUsers, text, setSearchText} = props
  return (
      <>
        <Search 
          fetchSearchUsers={fetchSearchUsers}
          fetchClearUsers={fetchClearUsers}
          text={text}
          setSearchText={setSearchText}
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
  loading: state.loading,
  text: state.text
})

const mapDispatchToprops = dispatch => ({
  fetchSearchUsers: value => dispatch(search(value)),
  fetchClearUsers: () => dispatch(clearUsers()),
  setSearchText: text => dispatch(setSearchText(text))
})


export default connect(mapStateToProps, mapDispatchToprops)(UsersContainer)