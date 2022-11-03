import React from 'react';

import  Home from './Home';
import ResturantList from './ResturantList';
import ResturantUpdate from './ResturantUpdate';
import ResturantCreate from './ResturantCreate';
import ResturantSearch from './ResturantSearch';
import ResturantDetail from './ResturantDetail';


import { BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import Navbar from './Navbar';
const Menu = () => {
    return ( <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
       
        <Route path='/ResturantList' element={<ResturantList/>} />
        <Route path='/ResturantUpdate' element={<ResturantUpdate/>} />
        <Route path='/ResturantCreate' element={<ResturantCreate/>} />
        <Route path='/ResturantSearch' element={<ResturantSearch/>} />
        <Route path='/ResturantDetail' element={<ResturantDetail/>} />
        <Route path='/' element={<Home/>} />
        
    </Routes>
    </BrowserRouter>
    
    </> );
}
 
export default Menu;