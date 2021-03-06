import React from 'react';
import {View, ActivityIndicator, StyleSheet, ImageBackground, AsyncStorage} from 'react-native';
import {getData, returnData} from '../Functions';

export default class Splash extends React.Component{

    async componentDidMount(){
        let data = await getData();
        if(data) {
            await AsyncStorage.getItem('help').then((help) => {
                console.log(help);
                if(help == '1') {
                    this.props.navigation.navigate('Route');
                }else{
                    this.props.navigation.navigate('Help');
                }
            });
        }
    }

    render() {
        return (
           <View style={{flex:1}}>
               <ImageBackground style={{flex:1}} source={require('../../assets/img/splash.jpg')}>
                   <ActivityIndicator color={'white'} style={style.loading}/>
               </ImageBackground>
           </View>
        );
    }
}

let style = StyleSheet.create({
    loading:{
        position:'absolute',
        bottom:18,
        left:0,
        right:0
    }
})
