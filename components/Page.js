

/*///:`   -//     -/++/. ./////`              
:Mm/+MN` .NmMs  .mNo::+s /Md///`              
:MmsyMy  dM-yM/ oMs ohhs /Mmhhh               
:Md..   sMyyymN-.mNo:+Md /Md///`              
`/:    `//   ./-  -/++/- .////*/


import React from 'react';
import { Dimensions, View } from 'react-native';
//---------------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
//---------------------------------------------------------
export default function Page({ children, verticalAlign }) {
    const page = {
        backgroundColor: 'tomato',
        height: '100%',
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: verticalAlign,

    }
    return (
        <View style={page}>
            {children}
        </View >
    )
}




