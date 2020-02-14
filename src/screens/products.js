import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LatoText} from '../Components/LatoText'


export default class Products extends Component{
  render() {
		
    return (
		   <View style={styles.Container}>
		      <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../assets/images/nav.png')}  style= {styles.drawerIcon} />
		          </TouchableOpacity>
		          <LatoText style={{fontSize:15,color:'black',marginLeft:40}}>WOMEN</LatoText>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('Cart')}>
		                <Image  source={require('../assets/images/bag.png')} style= {styles.drawerIcon}  />
                </TouchableOpacity>
		      
                <TouchableOpacity>
		                <Image  source={require('../assets/images/Search.png')}style= {[styles.drawerIcon,{marginLeft:25}]} />
                </TouchableOpacity>
              </View>
          </View>
          <Image   source={require('../assets/images/gown.png')} style={{height:250,width:'100%',overlayColor:"pink"}}/>
          <View style={{marginTop:12,marginBottom:24,alignItems:'center'}}>
                     <LatoText style={{fontSize:16,color:'black',marginTop:5,        fontFamily:'Lato',
}}>CATEGORIES</LatoText>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingHorizontal:8,marginTop:20}}>
             
                     <Image  source={require('../assets/images/dress.png')} style= {{height:34,width:27}}  />
                     <Image  source={require('../assets/images/outerwear.png')} style= {{height:31,width:32}} />
                     <Image  source={require('../assets/images/lingerie.png')} style= {{height:21,width:32,}}/>
                    
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:8}} >
                  <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Dress')}>
                     <LatoText style={{fontSize:15,color:'black',marginTop:8}}>Dresses</LatoText>
                  </TouchableOpacity>
                  <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Dress')}>
                     <LatoText style={{fontSize:15,color:'black',marginTop:8}}>Outerwear</LatoText>
                  </TouchableOpacity>
                  <TouchableOpacity
                       onPress={()=>this.props.navigation.navigate('Dress')}>
                     <LatoText style={{fontSize:15,color:'black',marginTop:8,marginLeft:10}}>lingerie</LatoText>
                  </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingHorizontal:8,marginTop:44}}>
             
             <Image  source={require('../assets/images/shoe.png')} style= {{height:28,width:28}}  />
             <Image  source={require('../assets/images/accessory.png')} style= {{height:30,width:30}} />
             <Image  source={require('../assets/images/lipstick.png')} style= {{height:30,width:10,paddinhTop:10}}/>
            
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:8,alignItems:'center',}} >
             <LatoText style={{fontSize:15,color:'black',marginTop:8,marginLeft:10}}>Shoes</LatoText>
             <LatoText style={{fontSize:15,color:'black',marginTop:8,marginLeft:20}}>Accessories</LatoText>
             <LatoText style={{fontSize:15,color:'black',marginTop:8,marginLeft:5}}>Beauty</LatoText>
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
goods:{
  height:34,
  width:27,
},

});