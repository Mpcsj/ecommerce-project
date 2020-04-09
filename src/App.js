import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

const HatsPage=(props)=>(
  <div>
    <h1>Hats page</h1>
  </div>
)
  
function App() {
  return (
    <div className='body'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
