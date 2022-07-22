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

import Login from './pages/Loginform';

function App() {
	const [token, setToken] = useState();
	if(!token) {
    return <Login setToken={setToken} />
    }
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
	   
	   {/*<Footer/>*/}
    </div>
	 </Router>
  
  );
}

export default App;
