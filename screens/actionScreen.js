

/* //`    -/++:`///////`////.  -+++-   //:  :/`      
 `mNMh  `dMo:/s://hMy/:`:MM:`.mN+:+Nm. NMMs hM.      
 hM:sMo /Mh       sM+    NM` oMy   sMo NN:NddM.      
oMhyymM:`dMo:/s-  sM+  `:MM/`.mN+:+Nm. NN .dMM.      
//   ./:  -/++:`  -/.  `////.  -+++-   //   */


import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Dimensions,
    FlatList,
    Pressable,
    View,
    Text,
} from 'react-native';
//------------------------------------------------------
import Page from '../components/Page'
//------------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
//------------------------------------------------------
export const ActionScreen = ({ navigation, route }) => {
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


    const DATA = route.params
    const DATA_LENGTH = DATA.length

    const [isStart, setIsStart] = useState(false)
    const [isFinish, setIsFinish] = useState(false)

    const [index, setIndex] = useState(0)
    const [counter, setCounter] = useState(DATA[index].duration)

    const [flatListRef, setFlatListRef] = useState(0)

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //----------------------------------------
    const renderItem = ({ item }) => {

        const stylesItem = {
            item: {
                backgroundColor: '#ddd'
            },
            item_title: {
                color: 'tomato',
                fontWeight: 'bold',
                fontSize: 30,
            },
            item_counter: {
                position: 'absolute',
                bottom: 100,
            },
            item_counter_text: {
                color: 'tomato',
                fontWeight: 'bold',
                fontSize: 120,
            }
        }
        return (
            <View style={[
                stylesItem.item,
                styles.CENTER,
                styles.FULLSCREEN
            ]}>

                <Text style={stylesItem.item_title}>{item.title}</Text>

                <Text>durata: {item.duration}</Text>

                <View style={stylesItem.item_counter}>
                    <Text style={stylesItem.item_counter_text}>{counter}</Text>
                </View>

            </View>
        )
    }
    //----------------------------------------
    const goToPrevItem = () => {
        if (index != 0) {

            setIndex(index => index - 1)
            console.log('::::BACK')
        }
    }
    //----------------------------------------
    const goToNextItem = () => {
        if (index != DATA_LENGTH - 1) {

            setIndex(index => index + 1)
            console.log('::::NEXT')
        }
    }
    //----------------------------------------
    const getItemLayout = (data, index) => (
        { length: SCREEN_WIDTH, offset: SCREEN_WIDTH * index, index }
    )
    //----------------------------------------
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //----------------------------------------
    useEffect(() => { // START

        setIsStart(true)
        console.log('::::START')
    }, [])
    //----------------------------------------
    useEffect(() => { // SCROLL
        if (isStart) {

            flatListRef.scrollToIndex({ animated: true, index: index })
            setCounter(DATA[index].duration)
            console.log('::::SCROLL')
        }
    }, [index])
    //----------------------------------------
    useEffect(() => { // COUNTER UPDATE

        console.log('::::COUNTER: ' + counter)
        let interval = setInterval(() => {

            if (counter == 0 && index < (DATA_LENGTH - 1)) {

                setIndex(index => index + 1)
                return () => clearInterval(interval)
            }

            if (counter >= 0 && index < DATA_LENGTH && !(counter == 0 && index == (DATA_LENGTH - 1))) {

                setCounter(counter => counter - 1)
                return () => clearInterval(interval)
            }

            if (!isFinish && counter == 0 && index == (DATA_LENGTH - 1)) {

                setIsFinish(true)
                return () => clearInterval(interval)
            }

        }, 1000)
        return () => clearInterval(interval)

    }, [counter])
    //----------------------------------------
    useEffect(() => { // FINISH
        if (isFinish) {

            console.log('::::FINISH')
        }
    }, [isFinish])
    //----------------------------------------
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    return (
        <Page >


            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

                horizontal={true}
                scrollEnabled={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}

                ref={(ref) => setFlatListRef(ref)}
                getItemLayout={getItemLayout}
            />


            <Pressable
                onPress={() => goToPrevItem()}
                style={[
                    { backgroundColor: (index != 0) ? 'tomato' : '#ddd', left: 20 },
                    styles.timer_btn,
                    styles.CENTER,
                ]} >

                <Text style={styles.timer_btn_text}>back</Text>
            </Pressable>


            <Pressable
                onPress={() => goToNextItem()}
                style={[
                    { backgroundColor: (index != DATA_LENGTH - 1) ? 'tomato' : '#ddd', right: 20 },
                    styles.timer_btn,
                    styles.CENTER,
                ]} >

                <Text style={styles.timer_btn_text}>next</Text>
            </Pressable>


            {
                isFinish

                    ? <View style={[
                        styles.isFinish,
                        styles.CENTER,
                        styles.FULLSCREEN,
                    ]}>

                        <Text style={styles.title}>END</Text>

                        <Pressable
                            onPress={() => navigation.navigate('Home')}
                            style={styles.isFinish_homeBtn}>
                            <Text style={styles.isFinish_homeBtn_text}>Go Home</Text>
                        </Pressable>
                    </View>

                    : <></>
            }


        </Page >
    )
}

const styles = StyleSheet.create({
    FULLSCREEN: {
        width: SCREEN_WIDTH,
        height: '100%',
    },
    CENTER: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer_btn: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        borderRadius: 10,
    },
    timer_btn_text: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 18,
    },
    isStart: {
        backgroundColor: '#00000055',
        position: 'absolute'
    },
    isFinish: {
        backgroundColor: 'tomato',
        position: 'absolute',
    },
    title: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 50,
    },
    isFinish_homeBtn: {
        backgroundColor: '#ddd',
        position: 'absolute',
        bottom: 50,
        borderRadius: 50
    },
    isFinish_homeBtn_text: {
        padding: 20,
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 20,
    },
})