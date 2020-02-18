import React, {Component} from 'react';
import {Platform, StyleSheet,View,Dimensions,
        TouchableOpacity,Text,KeyboardAvoidingView,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LatoText} from '../Components/LatoText'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {DressData} from '../Components/DressData'
var dw= Dimensions.get('window').width;
var dh= Dimensions.get('window').height;
const Stars=()=>{
    return(
        <View style={{flexDirection:'row',}}>
            <FontAwesome name="star" size={15} color="gold"/>
            <FontAwesome name='star' size={15} color='gold'/>
            <FontAwesome name='star' size={15} color='gold'/>
            <FontAwesome name='star' size={15} color='gold'/>
            <FontAwesome name='star' size={15} color='grey'/>
        </View>
    )
}

export default class Dress extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../assets/images/nav.png')}  style= {styles.drawerIcon} />
		          </TouchableOpacity>
		          <LatoText style={{fontSize:15,color:'black',marginLeft:40}}>Dresses</LatoText>
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
          <ScrollView style={{backgroundColor:'lightgrey',flex:1,}}>
             <View style={{flexDirection:'row',flexWrap:'wrap',marginVertical:10}}>
              {
                  DressData.map((item,index)=>{
                      return(
                          <ItemCarousel
                            key={index}
                            details={item}
                          />
                      )
                  })
              }
 
            </View> 
          </ScrollView>
           
      </View>
    );
  }
}

const ItemCarousel=(props)=>{
    const {category,price,name,img} =props.details
    return(
    <View style={styles.box}>
        <Image source={img} resizeMode='contain'
            style={styles.pic}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
            <LatoText style={{fontSize:15}}>{name}</LatoText>
            {/* <FontAwesome name='navicon' size={15} color='black'/> */}
        </View>
        {/* <LatoText style={{paddingLeft:5,color:'black'}}>{category}</LatoText> */}
        <View style={styles.star}>
            <Stars/>
            <LatoText style={{color:'blue',fontSize:12,}}>$ {price}</LatoText>
        </View>

    </View>
    )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:24,
    
  },
  drawerIcon:{
    height:18,
    width:16,
  },
  coloredlogo:{
    
    height:39,
    width:51,
    
    marginLeft:20
  },
  topView:{
    height:35,
    width:"100%",
    flexDirection:'row',
    paddingHorizontal:12.5,
    paddingBottom:12,
    justifyContent:"space-between"
  },
  box:{
      width:(dw*0.46),
      borderWidth:1,
      marginHorizontal:7,
      marginTop:8,
      borderRadius:5,
      backgroundColor:"white",
      borderColor:'white'
  },
  pic:{
    width:(dw*0.45),
      height:(dw*0.46), 
  },
  star:{
    flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5,
    paddingVertical:5
  }
 

});