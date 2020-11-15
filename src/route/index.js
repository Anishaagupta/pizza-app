import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../components/Navbar/index';

const AppRouter = () => {
    return (
        <div>
            <Route to="/" components={Navbar}></Route>
                           
        </div>
    )
}

export default AppRouter 
