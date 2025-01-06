import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const More = ({ item }) => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Text style={styles.title}>{item.name}</Text>

                <ScrollView style={{width: '100%'}}>
                    <Text style={styles.history}>{item.history}</Text>
                    <Text style={styles.subTitle}>Culture and Traditions</Text>
                    <Text style={styles.history}>{item.culture}</Text>
                </ScrollView>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: height * 0.12,
        padding: 15
    },

    back: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: height * 0.055,
        left: 10,
        zIndex: 10
    },

    title: {
        fontSize: 26,
        color: '#ffe8e8',
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: height * 0.03
    },

    subTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#ffe8e8',
        marginBottom: 10,
        textAlign: 'center'
    },

    history: {
        fontSize: 16,
        fontWeight: '300',
        color: '#c90404',
        marginBottom: 10,
        textAlign: 'justify',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 12
    },

});

export default More;
