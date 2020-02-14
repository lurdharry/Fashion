import React, {Component} from 'react';
import {Platform, StyleSheet,View,Dimensions,
        TouchableOpacity,Text,KeyboardAvoidingView,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LatoText} from '../Components/LatoText'

var dw= Dimensions.get('window').width;
var dh= Dimensions.get('window').height;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../assets/images/nav.png')}  style= {styles.drawerIcon} />
		          </TouchableOpacity>
		          <LatoText style={{fontSize:15,color:'black',marginLeft:40}}>Dress</LatoText>
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
          <ScrollView style={{backgroundColor:'lightgrey',flex:1}}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.box}>
                    <Image source={require('../assets/images/shirt3.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                        <LatoText>Kanvas Sneaker</LatoText>
                        <Image source={require('../assets/images/back.png')}
                            style={{height:24,width:'24'}}/> 
                    </View>
                    <LatoText>Shoes</LatoText>
                    <View style={{flexDirection:'row',}}>
                        <View>
                        <FontAwesome name="navicon" size={10} color="gold"/>
                            <FontAwesome name='star' size={10} color='gold'/>
                            <FontAwesome name='star' size={10} color='gold'/>
                            <FontAwesome name='star' size={10} color='gold'/>
                            <FontAwesome name='star' size={10} color='grey'/>
                        </View>
                        <LatoText style={{color:'blue',fontSize:15}}>$ 59.00</LatoText>
                    </View>


                </View>
                

            </View>
          </ScrollView>
           
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
      borderColor:'black',
      marginLeft:7
  },
  pic:{
    width:200,
      height:200, 
  },
 

});