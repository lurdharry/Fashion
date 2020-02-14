import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';



export default class loginSignup extends Component{
  state={
    currentPage:'form1',
    checked:false
  }
  loginsignup(){
    if(this.state.currentPage==='form1'){
        return(
          <KeyboardAvoidingView style={[styles.container,{marginTop:35,height:'45%'}]}>
          <View style={styles.loginbox2}>
             <View style={{marginTop:15,paddingHorizontal:10}} >
                   <Image  style={{height:12,width:15,}}source={require('../assets/images/mailicon.png')}/>
             </View>
              <View style={{width:'80%'}}>
             <TextInput  placeholder='Email'/>
             </View>
          </View>
          <View style={[styles.loginbox2,{marginTop:20}]}>
             <View style={{marginTop:10,paddingHorizontal:10}} >
                   <Image  style={{height:20,width:15,}}source={require('../assets/images/passwordicon.png')}/>
             </View>
              <View style={{width:'80%'}}>
             <TextInput style={{fontSize:15}} placeholder='Password'/>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:25,width:"100%",justifyContent:"space-between",paddingHorizontal:10}}>
              <View style={{flexDirection:"row",paddingBottom:10}}>
                <TouchableOpacity 
                    onPress={()=>this.setState({checked:!this.state.checked})}
                    style={[styles.remember,{ backgroundColor:this.state.checked?'#e10a6a':'white',
                    borderColor:this.state.checked?'#e10a6a':'#e10a6a',}]}> 
               

                </TouchableOpacity>
                <Text style={{paddingLeft:5,fontFamily:'Proxima-bd',fontSize:20}} >Remember me</Text>
              </View>
              <TouchableOpacity ><Text style={{color:"#e10a6a",alignSelf:'flex-end'}}>forgot Password?</Text></TouchableOpacity>
            
          </View>
          <TouchableOpacity 

              activeOpacity={0.75}
              onPress={()=>this.props.navigation.navigate('DrawerNav')}>
              <View style={{width:"92%",alignItems:"center", paddingVertical:15, backgroundColor:"#e10a6a",
                         marginTop:49,
                         borderRadius:5,
                         justifyContent:"center",
                        alignSelf:"center"}}>
               <Text style={{fontSize:15,color:"white",fontFamily:'Proxima-bd',}}>SIGN IN</Text>
             
              </View>
            </TouchableOpacity>
         </KeyboardAvoidingView>
        );
    }
    else if(this.state.currentPage==='form2'){
      return(
        <KeyboardAvoidingView style={[styles.container,{marginTop:30,height:"60%"}]}>
        <View style={styles.loginbox2}>
            <View style={{marginTop:15,paddingHorizontal:10}} >
                 <Image  style={{height:12,width:15,}}source={require('../assets/images/mailicon.png')}/>
            </View>
            <View style={{width:'80%'}}>
                 <TextInput  placeholder='Email'/>
            </View>
        </View>
        <View style={[styles.loginbox2,{marginTop:15}]}>
            <View style={{marginTop:10,paddingHorizontal:10}} >
                 <Image  style={{height:20,width:15,}}source={require('../assets/images/passwordicon.png')}/>
            </View>
            <View style={{width:'80%'}}>
                 <TextInput style={{fontSize:15}} placeholder='Password'/>
           </View>
        </View>
        <View style={[styles.loginbox2,{marginTop:15}]}>
             <View style={{marginTop:10,paddingHorizontal:10}} >
                 <Image  style={{height:20,width:15,}}source={require('../assets/images/passwordicon.png')}/>
             </View>
             <View style={{width:'80%'}}>
                 <TextInput style={{fontSize:15}} placeholder='Confirm Password'/>
             </View>
        </View>
        <View style={{flexDirection:'row',marginTop:20,width:"100%",justifyContent:"center",paddingHorizontal:10}}>
            <View style={{flexDirection:"row",}}>
            
               <Text style={{paddingLeft:10,fontSize:12}} >By Clicking 'REGISTER' I agree to our </Text>
               <TouchableOpacity><Text  style={{color:'#e10a6a',fontSize:12}}>Term of Service</Text></TouchableOpacity>
            </View>
          
          
        </View>
        <TouchableOpacity 
            activeOpacity={0.75}>
            <View style={{width:"92%",alignItems:"center", paddingVertical:15, backgroundColor:"#e10a6a",
                       marginTop:17.8,
                       borderRadius:5,
                       justifyContent:"center",
                      alignSelf:"center"}}>
                <Text style={{fontSize:15,color:"white"}}>REGISTER</Text>
           
            </View>
         </TouchableOpacity>
       </KeyboardAvoidingView>
      );
    }
 };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
          <View style={styles.loginbox}>
                <Image style={styles.loginbox}
                        source={require('../assets/images/loginlogo.png')}>
                </Image>
          </View>
          <KeyboardAvoidingView style={{width:"100%",flex:1,paddingHorizontal:5}}>
              {this.loginsignup()}
          </KeyboardAvoidingView>
        
          <Image style={styles.coloredlogo}
                        source={require('../assets/images/coloredlogo.png')}>
             </Image>
             
              <TouchableOpacity onPress={()=>this.setState({currentPage:'form1'})}
                  style={styles.logintext}>
                <Text style={{color:this.state.currentPage==='form1'?'black':'lightgrey',fontSize:20,fontFamily:'Proxima-bd',
}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({currentPage:'form2'})}
                  style={styles.signup}>
                <Text style={{color:this.state.currentPage==='form2'?'black':'lightgrey',fontSize:20,}}>Sign Up</Text>
              </TouchableOpacity>
          
            
               
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    marginTop:-24
    
    
    
    }, 
    loginbox:{
      
      height:300,
      width:'100%',
      
    },
    coloredlogo:{
      position:'absolute',
      height:39,
      width:51,
      top:50,
      alignSelf:'center'
    },
    logintext:{
      position:'absolute',
      top:280,
      left:20,
      
      
     
    },
    signup:{
      position:'absolute',
      top:280,
      left:110,
      
      
     
    },
    remember:{
      width:12,
      height:12,
      borderWidth:1,
      borderRadius:3,
      marginTop:5
    },
    loginbox2:{
      flexDirection:'row',
     alignSelf:"center",
      height:40, 
      width:"92%",
      borderBottomWidth:1,
      borderBottomColor:'lightgrey',
      
      
     
      
    },
});
