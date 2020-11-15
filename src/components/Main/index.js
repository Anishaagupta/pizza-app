import React, { useState } from 'react';
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar';
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
         setIsOpen(!isOpen)
     }

    return (
       <MainContainer>
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <MainContent>
               <MainItems>
                   <MainH1>Greatest Pizza Ever</MainH1>
                   <MainP>Ready in 2 minutes</MainP>
                   <MainBtn>Place Order</MainBtn>
               </MainItems>
           </MainContent>
       </MainContainer>
    )
}

export default Main;
