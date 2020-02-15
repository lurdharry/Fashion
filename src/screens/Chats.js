import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LatoText} from '../Components/LatoText'
import {UserDetails} from '../Components/userDB'
import { ScrollView } from 'react-native-gesture-handler';
const BgColor=(status)=>{
    switch (status) {
        case'Online' :
            return '#48D360'
            break;
        case 'Offline' :
            return '#BBBACD'
            break;
        case 'Away' :
            return '#FF8900'
            break;
        default:
            break;

    }
}

export default class Chats extends Component{
  render() {
		
    return (
		   <View style={styles.Container}>
         {/* start of header */}
		      <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../assets/images/nav.png')}  style= {styles.drawerIcon} />
		          </TouchableOpacity>
                  <LatoText style={{fontSize:15,color:'black',}}>CHATS</LatoText>

                  <View style={{flexDirection:'row'}}>
                {/* <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('Cart')}>
		                <Image  source={require('../assets/images/bag.png')} style= {styles.drawerIcon}  />
                </TouchableOpacity>
		      
                <TouchableOpacity>
		                <Image  source={require('../assets/images/Search.png')}style= {[styles.drawerIcon,{marginLeft:25}]} />
                </TouchableOpacity> */}
              </View>
          </View>
          {/* end of header */}
              <ScrollView>
                  {UserDetails.map((item,index)=>{
                      return(
                          <User
                            Details={item}
                            key={index}
                            BgColor={()=>this.BgColor()}
                          />
                      )
                  })}
              </ScrollView>
                    
                    
            

          </View>
		   
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const User=(props)=>{
    const{name,status,img,notification}=props.Details
    const messages=notification.length
    return(
        <TouchableOpacity style={styles.eachUser}>
            <View style={{flexDirection:'row'}}>
                <Image style={styles.userImage} source={img} resizeMode='contain' />
                <View style={{marginLeft:20}}>
                    <LatoText style={{color:'black',fontSize:14}}>{name}</LatoText>
                    <View style={{flexDirection:"row",marginTop:7,alignItems:'center'}}>
                        <View style={[styles.statusCircle,{backgroundColor:BgColor(status)}]}/>
                        <LatoText style={{fontSize:9}}>{status}</LatoText>
                    </View>
                </View>

            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {
                    messages>1&&
                    <View style={styles.notifCircle}>
                        <LatoText style={{color:'white',fontSize:14}}>{messages}</LatoText>
                    </View>
               }
                <Image resizeMode='contain' source={require('../assets/images/Users/rightarrow.png')} style={styles.arrow}/>
            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    arrow:{
        height:16,
        width:10,
        marginLeft:30
    },
    userImage:{
        // marginLeft:45,
        height:48,
        width:48,
        borderRadius:24
    },
    notifCircle:{
        height:22,
        width:22,
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E10A6A'
    },
    statusCircle:{
        height:8,
        width:8,
        borderRadius:4,
        marginRight:5
    },
eachUser:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:17,
    alignItems:'center',
    // borderTopColor:'black',
    borderBottomColor:'rgb(242,242,242)',
    
    borderWidth:.1,
    paddingVertical:16
},
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