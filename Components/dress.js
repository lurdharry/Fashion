import React, {Component} from 'react';
import {Platform, StyleSheet,View,Dimensions,
        TouchableOpacity,Text,KeyboardAvoidingView,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
		              <Image  source={require('../images/nav.png')}  style= {styles.drawerIcon} />
		          </TouchableOpacity>
		          <Text style={{fontSize:15,color:'black',marginLeft:40}}>Dress</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('Cart')}>
		                <Image  source={require('../images/bag.png')} style= {styles.drawerIcon}  />
                </TouchableOpacity>
		      
                <TouchableOpacity>
		                <Image  source={require('../images/Search.png')}style= {[styles.drawerIcon,{marginLeft:25}]} />
                </TouchableOpacity>
              </View>
          </View>
          <ScrollView style={{backgroundColor:'lightgrey',flex:1}}>
 
          <View style={{flexDirection:'row'}}>
                <View style={styles.box}>
                    <Image source={require('../images/shirt3.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
                        <Text style={{fontSize:15}}>Kanvas Sneaker</Text>
                        <FontAwesome name='navicon' size={15} color='black'/>
                    </View>
                    <Text style={{paddingLeft:5}}>Shoes</Text>
                    <View style={styles.star}>
                        <Stars/>
                        <Text style={{color:'blue',fontSize:12,}}>$ 59.00</Text>
                    </View>


                </View>
                <View style={styles.box}>
                    <Image source={require('../images/shirt.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
                        <Text style={{fontSize:15}}>Kanvas Sneaker</Text>
                        <FontAwesome name='navicon' size={15} color='black'/>
                    </View>
                    <Text style={{paddingLeft:5}}>Shoes</Text>
                    <View style={styles.star}>
                        <Stars/>
                        <Text style={{color:'blue',fontSize:12,}}>$ 59.00</Text>
                    </View>


                </View>
                

            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.box}>
                    <Image source={require('../images/shirt4.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
                        <Text style={{fontSize:15}}>Kanvas Sneaker</Text>
                        <FontAwesome name='navicon' size={15} color='black'/>
                    </View>
                    <Text style={{paddingLeft:5}}>Shoes</Text>
                    <View style={styles.star}>
                        <Stars/>
                        <Text style={{color:'blue',fontSize:12,}}>$ 59.00</Text>
                    </View>


                </View>
                <View style={styles.box}>
                    <Image source={require('../images/shirt5.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
                        <Text style={{fontSize:15}}>Kanvas Sneaker</Text>
                        <FontAwesome name='navicon' size={15} color='black'/>
                    </View>
                    <Text style={{paddingLeft:5}}>Shoes</Text>
                    <View style={styles.star}>
                        <Stars/>
                        <Text style={{color:'blue',fontSize:12,}}>$ 59.00</Text>
                    </View>


                </View>
                

            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.box}>
                    <Image source={require('../images/shirt6.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
                        <Text style={{fontSize:15}}>Kanvas Sneaker</Text>
                        <FontAwesome name='navicon' size={15} color='black'/>
                    </View>
                    <Text style={{paddingLeft:5}}>Shoes</Text>
                    <View style={styles.star}>
                        <Stars/>
                        <Text style={{color:'blue',fontSize:12,}}>$ 59.00</Text>
                    </View>


                </View>
                <View style={styles.box}>
                    <Image source={require('../images/shirt2.png')}
                        style={styles.pic}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:5,marginTop:5}}>
                        <Text style={{fontSize:15}}>Kanvas Sneaker</Text>
                        <FontAwesome name='navicon' size={15} color='black'/>
                    </View>
                    <Text style={{paddingLeft:5}}>Shoes</Text>
                    <View style={styles.star}>
                        <Stars/>
                        <Text style={{color:'blue',fontSize:12,}}>$ 59.00</Text>
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