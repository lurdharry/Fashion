import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import IntroPage from "./intropage.js";
import IntroPage2 from "./intropage2.js";
import LoginSignup from "./loginsign.js";
import myDrawer from './drawernav';
import Cart from './cart.js';
import Dress from './dress.js';



export const mainNavigation = createStackNavigator (
    {
       IntroPage:{screen:IntroPage},
       IntroPage2:{screen:IntroPage2},
       loginPage:{screen:LoginSignup}, 
       DrawerNav:{screen:myDrawer},
    //    Cart:{screen:Cart},
    //    Dress:{screen:Dress},
      
    },)

    const AppContainer = createAppContainer(mainNavigation);
export default AppContainer;  

