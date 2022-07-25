import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Regunit from './pages/Regunit';
import Footer from './Footer';
import Staffmaster from  './pages/Staffmaster';

import Masterstaff2 from './pages/Masterstaff2';
import useToken from './Components/useToken';
import Login from './pages/Loginform';
function setToken(userToken) {
	sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  function getToken() {
	const tokenString = sessionStorage.getItem('token');
	const userToken = JSON.parse(tokenString);
	return userToken?.token
  }
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }else{
  
  return (
        
	<Router>
    <div class="wrapper">
	 <Header/>
      <Menu/>
	
		<div>
			<Switch>
				<Route path='/Regunit' component={Regunit} />		
				<Route path='/Staff' component={Masterstaff2} />	
			</Switch>
		</div>
	   
	
    </div>
	 </Router>
  
  );
  }
}

export default App;
