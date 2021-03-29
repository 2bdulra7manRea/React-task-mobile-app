
import './App.css';
import {Switch , BrowserRouter , Route} from 'react-router-dom'
import MainScreen from './pages/MainScreen';
import React from 'react'
export default function App() {
  



const AddScreenLazy=React.lazy(()=>import("./pages/AddScreen"));
return(<>
<BrowserRouter>
<div className='container-fluid'>
<Switch>
  <Route path='/' exact component={MainScreen}></Route>
  <Route path='/add' exact component={AddScreenLazy}></Route>
</Switch>
</div>
</BrowserRouter>
</>)

}
