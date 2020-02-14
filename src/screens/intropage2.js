import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity} from 'react-native';



export default class IntroPage2 extends Component{
  render() {
    return (
      <ImageBackground style={styles.container}
                        source={require('../assets/images/background.png')}>
             <Image style={styles.logo}
                        source={require('../assets/images/logo.png')}>
             </Image>
             <TouchableOpacity
                     style={styles.rightarrow}
                    onPress={()=>this.props.navigation.navigate('loginPage')}>
                <Image 
                    style={{height:17,width:46}}
                        source={require('../assets/images/leftarrow.png')}>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity
                    style={styles.leftarrow}
                    onPress={()=>this.props.navigation.navigate('IntroPage')}>
                <Image 
                      style={{ height:19,width:10}}
                        source={require('../assets/images/leftarrow.png')}>
                </Image>
              </TouchableOpacity>
             <Image style={styles.sliderDots}
                        source={require('../assets/images/SliderDots.png')}>
             </Image>   
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:'100%',
    
    },
    logo:{
      position:'absolute',
      height:44,
      width:57,
      top:130,
      alignSelf:'center'
    },
    rightarrow:{
      position:'absolute',
      bottom:40,
      right:20,
     
    },
   
    leftarrow:{
      position:'absolute',
      bottom:30,
      left:20,
     
    },
    sliderDots:{
      position:'absolute',
      bottom:40,
      left:158,
      height:8,
      width:60
    },
});
