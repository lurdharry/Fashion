import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer,createDrawerNavigator} from "react-navigation";
import SideMenu from "./sidemenu";
import Products from './products.js';
import Cart from './cart';
import SelectedCloth from './selectedcloth'
import Dress from './dress'
import Chats from './Chats'
export const DrawerNavigator = createDrawerNavigator (
  {
    Home:{screen:Products},
    Home2:{screen:Products},
    Cart:{screen:Cart},
    SelectedCloth:{screen:SelectedCloth},
    Dress:{screen:Dress},
    Chats:{screen:Chats},

    
  },
  {
  contentComponent:(props) => <SideMenu  {...props} />,
  contentOptions: {
      inactiveTintColor: "#ffffff",
      activeTintColor: 'red',
      
    },
	}
);
const myDrawer = createAppContainer(DrawerNavigator);
export default myDrawer;  
