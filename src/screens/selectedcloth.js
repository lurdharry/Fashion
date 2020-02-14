import React, {Component} from 'react';
import {Platform, StyleSheet,Text, View,Image,StatusBar,Dimensions,TouchableOpacity,ScrollView,Picker} from 'react-native';



export default class Selectedcloth extends React.Component{
  state={
    checked:true,
    info:'1',
  }
  selected(){
    if (this.state.checked){
      this.setState({checked:true})
    }
    else{
      this.setState({checked:false})
    }
  }
  clothinfo(gh){
    if(gh=='1'){
        return(
            <Text >AS SEEN IN REDBOOK! You'll be primed and ready in the Perfect Situation Purple Long Sleeve Shift Dress when everything starts falling into place! This woven poly dress has a casual shift shape, accented by a rounded neckline and long sleeves with lightly puffed shoulders. Sleeves end with matching button tabs on the fitted wrist cuffs. Hidden side seam pockets.</Text>
        );
      }
    else if (gh=='2'){
      return(
        <Text>ghj</Text>
      );
    }
    else if (gh=='3'){
      return(
        <Text>fghj</Text>
      );
    }
    };
  render() {
    return (
		   <View style={styles.Container}>
		      <View style={styles.topView}>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		              <Image  source={require('../images/back.png')} style={{height:14,width:21}} />
		          </TouchableOpacity>
                  <Image  source={require('../images/coloredlogo.png')}  style={{height:22,width:29,marginLeft:40}}/>
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
          <ScrollView>
             <Image   source={require('../images/shortgown.png')} style={{height:452,width:'100%'}}/>
             <View style={{marginHorizontal:25,fontSize:16,marginTop:20,alignItems:'center'}}>
                    <Text>Perfect Situation purple long sleeve shift shirt</Text>
             </View>
             <View style={{flexDirection:'row',paddingHorizontal:17,marginTop:20,justifyContent:'space-between'}}>
                  <TouchableOpacity style={styles.sizeSelect}>
                    <Text>XS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.selected()} style={[styles.sizeSelect,{backgroundColor:!this.state.checked?'blue':'lightgrey'}]}>
                    <Text>S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sizeSelect}>
                    <Text>M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sizeSelect}>
                    <Text>L</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sizeSelect}>
                    <Text>XL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sizeSelect}>
                    <Text>XLL</Text>
                  </TouchableOpacity>
                 
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <View style={{flexDirection:'row',marginLeft:15}}>
                  <Text style={{marginTop:15,fontSize:17,fontWeight:'bold'}}>Color:</Text>
                  <TouchableOpacity style={[styles.colorselect,{backgroundColor:'black'}]}></TouchableOpacity>
                  <TouchableOpacity style={[styles.colorselect,{backgroundColor:'lightgrey',marginLeft:15}]}></TouchableOpacity>
                  <TouchableOpacity style={[styles.colorselect,{backgroundColor:'skyblue',marginLeft:15}]}></TouchableOpacity>
                </View>
                <Picker
                  selectedValue={this.state.quantity}
                   style={{height: 32, width: 96,marginRight:50,marginTop:12,}}
                  onValueChange={(itemValue,itemIndex ) =>
                   this.setState({quantity: itemValue})
                             }>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                </Picker>
             </View>
             <TouchableOpacity 
                  activeOpacity={0.75}>
                  <View style={{width:"92%",alignItems:"center", paddingVertical:15, backgroundColor:"#0052FF",
                       marginTop:17.8,
                       borderRadius:5,
                       justifyContent:"center",
                      alignSelf:"center"}}>
                        <Text style={{fontSize:15,color:"white"}}>Add to Cart</Text>
           
                  </View>
             </TouchableOpacity>
         <View style={styles.describe}>
               
                    <TouchableOpacity
                         style={{borderBottomWidth:this.state.info==='1'?3:0,paddingTop:15,paddingBottom:5}}
                        onPress={()=>this.setState({info:'1'})}>
                     <Text style={{color:this.state.info=='1'?'black':'lightgrey'}}>DESCRIPTION</Text>
                     </TouchableOpacity>
               
               
                   <TouchableOpacity
                       style={{borderBottomWidth:this.state.info==='2'?3:0,paddingTop:15,paddingBottom:5}}
                      onPress={()=>this.setState({info:'2'})}>
                    <Text style={{color:this.state.info=='2'?'black':'lightgrey'}}>SIZE & FIT</Text>
                   </TouchableOpacity>
               
               
                   <TouchableOpacity
                           style={{borderBottomWidth:this.state.info==='3'?3:0,paddingTop:15,paddingBottom:5}}
                           onPress={()=>this.setState({info:'3'})}>
                    <Text style={{color:this.state.info=='3'?'black':'lightgrey'}}>MODEL INFO</Text>
                   </TouchableOpacity>
               

         </View>
         <View style={{width:"100%",flex:1,padding:20,alignItems:'center'}}>
           {this.clothinfo(this.state.info)}
          </View>
                    
                    
            
          </ScrollView>
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
 
},
drawerIcon:{
  height:18,
  width:16,
},
sizeSelect:{
  margin:1,
  backgroundColor:'lightgrey',
  height:30,
  width:30,
  justifyContent:'center',
  alignItems:'center'
  
},
colorselect:{
  height:30,
  width:30,
  borderRadius:15,
  marginTop:10
},
describe:{
  flexDirection:'row',marginHorizontal:30,
  borderBottomWidth:1,
  borderBottomColor:'lightgrey',
  justifyContent:'space-between'
}

});