
import React from 'react'
import { Navbar } from './components/Navbar';
import UsersContainer from './pages/Users/UsersContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { About } from './pages/About'
import { Alert } from './components/Alert'
import { AlertState } from './context/alert/AlertState'
import ProfileContainer from './pages/Profile/ProfileContainer'

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className='container pt-4'>
          <Alert alert={{text: 'Test alert'}} />
          <Switch>
            <Route path='/' exact>
              <UsersContainer />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/profile/:name'>
              <ProfileContainer />
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </AlertState>
    
  );
}

export default App
