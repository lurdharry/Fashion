import React, {Component} from 'react';
import {Platform, StyleSheet,View,Dimensions,
        TouchableOpacity,Text,KeyboardAvoidingView,Image} from 'react-native';
import {NavigationActions} from 'react-navigation'

import {LatoText} from '../Components/LatoText'

export default class SideMenu extends React.Component {
      navigateToScreen=(route)=>(
            ()=>{
            const NavigationAction =NavigationActions.navigate({
                  routeName:route
            });
            this.props.navigation.dispatch(NavigationAction);
      }
      )
  render() {
    return (
      <View style={styles.container}>
            <View>
                  <Image style={styles.coloredlogo}
                        source={require('../assets/images/coloredlogo.png')}/>
            </View>
            <TouchableOpacity style={styles.links}>
                  <LatoText>Home</LatoText>
            </TouchableOpacity>
            <TouchableOpacity 
                   onPress={this.navigateToScreen('Home2')}
                   style={[styles.links,{backgroundColor:this.props.activeKeyItem==='Home2'?'red':null}]}>
                   <LatoText>Categories</LatoText>
            </TouchableOpacity>
            <TouchableOpacity 
                        onPress={this.navigateToScreen('Cart')} 
                        style={[styles.links,{backgroundColor:this.props.activeKeyItem==='Cart'?'red':null}]}>
                  <LatoText>My Bag</LatoText>
            </TouchableOpacity>
            <TouchableOpacity 
                        onPress={this.navigateToScreen('SelectedCloth')}
                        style={[styles.links,{backgroundColor:this.props.activeKeyItem==='SelectedCloth'?'red':null}]}>
                  <LatoText>Wishlist</LatoText>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen('Chats')}
                        style={[styles.links,{backgroundColor:this.props.activeKeyItem==='Chats'?'red':null}]}>
                  <LatoText>Messages</LatoText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.links}>
                  <LatoText>Profiles</LatoText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.links}>
                  <LatoText>settings</LatoText>
            </TouchableOpacity>
            
            
           
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:24,
    
  },
  coloredlogo:{
    
    height:39,
    width:51,
    
    marginLeft:20
  },
  links:{
    marginTop:10,
    width:'100%',
    marginTop:25,
    marginLeft:20,
    fontSize:30

  }
 

});