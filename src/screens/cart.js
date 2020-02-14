import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,Dimensions,TouchableOpacity,ScrollView,Picker} from 'react-native';



export default class Cart extends React.Component{
 
  render() {
    return (
		   <View style={styles.Container}>
		      <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../assets/images/nav.png')} style={styles.drawerIcon} />
		          </TouchableOpacity>
              <Text  style={{marginLeft:40,fontSize:17}}>CART</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
		                <Image source={require('../assets/images/bag.png')} style= {styles.drawerIcon}  />
                </TouchableOpacity>
		      
                <TouchableOpacity>
		                <Image  source={require('../assets/images/Search.png')}style= {[styles.drawerIcon,{marginLeft:25}]} />
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.itemBox}>
                 <Image   style={{height:108,width:118}} source={require('../assets/images/bamboula.png')} />
                 <View style={{alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:12,color:'black',marginLeft:25}}>Bamboula  sisa Tote</Text>
                   <Text style={{fontSize:16,marginTop:7}}>1 * $128.00</Text>
                   <Text style={{fontSize:22,color:'black'}}>$128.00</Text>
                  
                 </View>
          </View>
          <View style={styles.itemBox}>
                 <Image   style={{height:108,width:118}} source={require('../assets/images/marbag.png')} />
                 <View style={{alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:12,color:'black',marginLeft:25}}>Mar Y Sol maffia</Text>
                   <Text style={{fontSize:16,marginTop:7}}>1 * $98.00</Text>
                   <Text style={{fontSize:22,color:'black'}}>$98.00</Text>
                  
                 </View>
          </View>
          <View style={styles.itemBox}>
                 <Image   style={{height:108,width:118}} source={require('../assets/images/italianbag.png')} />
                 <View style={{alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:12,color:'black',marginLeft:25}}>Italian leather Drape</Text>
                   <Text style={{fontSize:16,marginTop:7}}>1 * $178.00</Text>
                   <Text style={{fontSize:22,color:'black'}}>$178.00</Text>
                  
                 </View>
          </View>
          <View style={styles.total}>
              <Text style={{fontSize:16,marginTop:22}}>Total</Text>
              <Text style={{fontSize:22,color:'black',marginTop:15}}>$328.00</Text>
              <TouchableOpacity 
                  activeOpacity={0.75}>
                  <View style={{width:209,alignItems:"center", paddingVertical:15, backgroundColor:"#0052FF",
                       
                       borderRadius:5,
                       justifyContent:"center",
                      alignSelf:"center"}}>
                        <Text style={{fontSize:15,color:"white"}}>Check Out</Text>
           
                  </View>
             </TouchableOpacity>
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
  justifyContent:"space-between",
  borderBottomWidth:1,
  borderBottomColor:'lightgrey'
 
},
drawerIcon:{
  height:18,
  width:16,
},
itemBox:{
  height:111,
  width:"100%",
  borderWidth:1,
  flexDirection:'row',
  backgroundColor:'white',
  borderColor:'lightgrey', 
  borderTopWidth:0,
},
total:{
  position:'absolute',
  bottom:15,
  flexDirection:'row',
  paddingHorizontal:20
}


});