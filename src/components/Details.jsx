import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Details = ({ place }) => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Image source={place.image} style={styles.image} />

                <Text style={styles.name}>{place.name}</Text>

                <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
                    <Text style={styles.address}>{place.address}</Text>
                    <Text style={styles.description}>{place.description}</Text>
                    <Text style={styles.subTitle}>Why it matters ?</Text>
                    <Text style={styles.description}>{place.fact}</Text>
                </ScrollView>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    back: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: height * 0.045,
        left: 10,
        zIndex: 10
    },

    image: {
        width: '100%',
        height: height * 0.35,
        marginBottom: height * 0.03,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    name: {
        fontSize: 24,
        color: '#ffe8e8',
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: height * 0.02
    },

    address: {
        fontSize: 15,
        color: '#ffe8e8',
        fontWeight: '300',
        marginBottom: height * 0.02,
        paddingHorizontal: 10
    },

    description: {
        fontSize: 15,
        color: '#c90404',
        fontWeight: '400',
        marginBottom: height * 0.02, 
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '90%',
        padding: 10,
        textAlign: 'justify',
        borderRadius: 10
    },

    subTitle: {
        fontSize: 18,
        color: '#ffe8e8',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: height * 0.02
    }

});

export default Details;