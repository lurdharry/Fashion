import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity} from 'react-native';



export default class IntroPage extends Component{
  render() {
    return (
      <View style={styles.container}>
            
             <TouchableOpacity
                    style={styles.rightarrow}
                    onPress={()=>this.props.navigation.navigate('IntroPage2')}>
                  <Image style={{ height:8,width:60}}
                        source={require('../images/rightarrow.png')}>
                 </Image>
             </TouchableOpacity>
            
            
             <Image style={styles.sliderDots}
                        source={require('../images/SliderDots.png')}>
             </Image>  
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:'100%',
    backgroundColor:"hotpink"
    
    }, 
    iphone:{
      position:'absolute',
      height:44,
      width:57,
      top:130,
      right:60,
      color:'yellow'
    },
    rightarrow:{
      position:'absolute',
      bottom:40,
      left:158,
     

    },
    sliderDots:{
      position:'absolute',
      top:20,
      right:20,
      height:12,
      width:30
    },
});