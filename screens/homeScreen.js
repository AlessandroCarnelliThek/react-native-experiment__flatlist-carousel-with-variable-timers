

/*   //   -/++:   :/-  `//. ://///             
NM`  MM``dM+:/NN- mMM:`dMM: hMs///             
NMhhhMM`/Mh   oMs mM+MdhhM: hMdhho             
NM`  MM``dM+:/NN- mM`/o`hM: hMs///             
//   //   -/++:   :/    :/. :///*/


import React from 'react';
import {
    StyleSheet,
    Pressable,
    Text,
} from 'react-native';
//---------------------------------------------
import Page from '../components/Page'
//---------------------------------------------
const DATA = [
    {
        id: '001',
        title: 'pagina #1',
        duration: 7
    },
    {
        id: '002',
        title: 'pagina #2',
        duration: 3
    },
    {
        id: '003',
        title: 'pagina #3',
        duration: 4
    },
    {
        id: '004',
        title: 'pagina #4',
        duration: 2
    },
    {
        id: '005',
        title: 'pagina #5',
        duration: 5
    },
]
//---------------------------------------------
export const HomeScreen = ({ navigation }) => {
    return (
        <Page>


            <Pressable style={styles.start_btn}
                onPress={() => navigation.navigate('Action', DATA)} >

                <Text style={styles.start_btn_text}>START</Text>
            </Pressable>


        </Page>
    )
}

const styles = StyleSheet.create({
    start_btn: {
        backgroundColor: '#ddd',
        width: 120,
        height: 120,

        borderRadius: 100,

        position: 'absolute',
        bottom: 75,

        justifyContent: 'center',
        alignItems: 'center',
    },
    start_btn_text: {
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 25,
    }
})
