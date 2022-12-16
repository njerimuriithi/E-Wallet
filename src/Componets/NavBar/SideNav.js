import React from 'react'
import ReactDOM from "react-dom/client";
import {Routes ,Route} from 'react-router-dom'
import DashBoard from '../../Pages/DashBoard';
import Transactions from '../../Pages/Transactions.Js';
import SideNavItem from './SideNavItem';

function SideNav() {
  return (
    <div>
        <SideNavItem/>
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
          

        </Routes>


    </div>
  )
}

export default SideNav