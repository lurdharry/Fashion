import React from 'react'
import {Text} from 'react-native'

export const LatoText =()=>{
    return (
        <Text {...props} style={[props.style,{fontFamily:'Lato-rg'}]}>
            {props.children}
        </Text>
    )
}