import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class App extends React.Component{
  render() {
		
    return (
		   <View style={styles.Container}>
		      <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../assets/images/nav.png')}  style= {styles.drawerIcon} />
		          </TouchableOpacity>
                  <Image  source={require('../assets/images/nav.png')}  style={[styles.drawerIcon,{marginLeft:40}]}/>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
		                <Image  source={require('../assets/images/bag.png')} style= {styles.drawerIcon}  />
                </TouchableOpacity>
		      
                <TouchableOpacity>
		                <Image  source={require('../assets/images/Search.png')}style= {[styles.drawerIcon,{marginLeft:25}]} />
                </TouchableOpacity>
              </View>
          </View>
          <View>
             <Image   source={require('../assets/images/nav.png')} style={{height:45,width:'100%'}}/>
             <Text style={{paddingHorizontal:12,fontSize:12}}>Perfect Situation purple long sleeve shift shirt</Text>
             <View style={{flexDirectio:'row',paddingHorizontal:17,marginTop:20}}>
                            <Text>ASDFGHJKL;</Text>
             </View>
                    
                    
            
          </View>
        </View>
		   
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const styles = StyleSheet.create({

Container:{
  flex:1,
  marginTop:24,
  width:'100%'
},
topView:{
  height:35,
  width:"100%",
  flexDirection:'row',
  paddingHorizontal:12.5,
  paddingBottom:12,
  justifyContent:"space-between"
},
drawerIcon:{
  height:18,
  width:16,
},

});