import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { width, height } = Dimensions.get('window');

const Achieves = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        const fetchVisited = async () => {
            const storedData = await AsyncStorage.getItem('checked');
            if (storedData) {
                setChecked(JSON.parse(storedData));
            }
        };
        fetchVisited();
    }, []);

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Text style={styles.title}>Achievements</Text>

                <ScrollView style={{width: '100%'}} contentContainerStyle={styles.contentContainer}>
                    {checked.length > 0 ? (
                        checked.map((item, index) => (
                            <View key={index} style={styles.card}>
                                <Text style={styles.placeName}>{item.name}</Text>
                                <Text style={styles.date}>{item.date}</Text>
                                <Image 
                                    source={item.image} 
                                    style={styles.image} 
                                    resizeMode="cover" 
                                />
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('DetailsScreen', { place: item})}>
                                    <Text style={styles.btnText}>Read more</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noDataText}>No achievements yet. Check in first and come back !</Text>
                    )}
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
        paddingTop: height * 0.07,
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

    contentContainer: {
        alignItems: 'center',
    },

    card: {
        width: width * 0.9,
        backgroundColor: '#ffe8e8',
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

    placeName: {
        fontSize: 18,
        fontWeight: '800',
        color: '#c90404',
        marginBottom: 10,
        textAlign: 'center'
    },

    date: {
        fontSize: 12,
        fontWeight: '300',
        color: '#c90404',
        marginBottom: 10, 
    },

    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },

    noDataText: {
        fontSize: 16,
        color: '#ffe8e8',
        marginTop: 20,
    },

    btn: {
        width: '100%',
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#fc4747',
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnText: {
        fontSize: 14,
        color: '#ffe8e8',
        fontWeight: '800',
    }

});

export default Achieves;
