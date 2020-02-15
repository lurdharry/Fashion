import React from 'react'
import {Text} from 'react-native'

export const LatoText =props=>{
    return (
        <Text {...props} style={[props.style,{fontFamily:'Proxima-rg'}]}>
            {props.children}
        </Text>
    )
}