import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ImageBackground,
    Platform,
    StatusBar
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                <SafeAreaView style = {styles.screencheck}>
                    <ImageBackground source={require('../assets/bg_image.png')} style = {styles.backgroundImage} >
                    <View style = {styles.titleBar}>
                        <Text style = {styles.titleText}>Stellar App</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('CraftScreen')
                    }} style = {styles.card}>
                        <Text style = {styles.cardText}>Space Crafts</Text>
                        <Text style = {styles.knowText}>{"Know More"}</Text>
                        <Image source = {require('../assets/space_crafts.png')} style = {styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('MapScreen')
                    }} style = {styles.card}>
                        <Text style = {styles.cardText}>Star Maps</Text>
                        <Text style = {styles.knowText}>{"Know More"}</Text>
                        <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Picsscreen')
                    }} style = {styles.card}>
                        <Text style = {styles.cardText}>Star Maps</Text>
                        <Text style = {styles.knowText}>{"Know More"}</Text>
                        <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>
                    </TouchableOpacity>
                    </ImageBackground>
                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    screencheck: {
        margintop: Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15, justifyContent: "center", alignItems: "center"
    },
    titleText: {
        fontSize: 40, fontWeight:"bold", color:"white"
    },
    card: {
        flex:0.25, 
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white"
    },
    cardText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 75,
        paddingLeft: 30
    },
    knowText: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        right: 20,
        top: -80,
        resizeMode: "contain"
    }
})