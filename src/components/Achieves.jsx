import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import achieves from '../constants/achieves.js'
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Achieves = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState([]);
    const [photobook, setPhotobook] = useState([]);
    const [quizRecords, setQuizRecords] = useState([]);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        const loadCheckedData = async () => {
            const storedChecked = await AsyncStorage.getItem('checked');
            if (storedChecked) {
                setChecked(JSON.parse(storedChecked));
            }
        };
        
        const loadPhotobookData = async () => {
            const storedPhotobook = await AsyncStorage.getItem('photobook');
            if (storedPhotobook) {
                setPhotobook(JSON.parse(storedPhotobook));
            }
        };

        const loadQuizRecords = async () => {
            const storedQuizRecords = await AsyncStorage.getItem('quizRecords');
            if (storedQuizRecords) {
                setQuizRecords(JSON.parse(storedQuizRecords));
            }
        };

        const loadCompletedCount = async () => {
            const storedCompletedCount = await AsyncStorage.getItem('completedCount');
            if (storedCompletedCount) {
                setCompletedCount(parseInt(storedCompletedCount, 10));
            }
        };

        loadCheckedData();
        loadPhotobookData();
        loadQuizRecords();
        loadCompletedCount();
    }, []);

    const checkAchievementIndex = (index) => {

        if (index === 0 && completedCount > 0) {
            return true;
        }
        if (index === 1 && quizRecords.some(record => record === 20)) {
            return true;
        }
        if (index === 2 && checked.length > 0) {
            return true;
        }
        if (index === 3 && checked.length >= 12) {
            return true;
        }
        if (index === 4 && photobook.length > 0) {
            return true;
        }

        return false;
    };

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Text style={styles.title}>Achievements</Text>

                <ScrollView style={{width: '100%'}}>
                    {
                        achieves.map((item, index) => (
                            <View key={index} style={styles.card}>
                                {checkAchievementIndex(index) && 
                                <View style={styles.done}>
                                    <Icons type={'done'} />
                                </View>
                                }
                                <Text style={styles.name}>{item.title}</Text>
                                <View style={styles.innerBox}>
                                    <Image source={item.image} style={styles.image} />
                                    <Text style={styles.text}>{item.condition}</Text>
                                </View>
                            </View>
                        ))
                    }
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

    done: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10,
        right: 10,
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
        width: '100%',
        height: 120,
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

    name: {
        fontSize: 18,
        fontWeight: '800',
        color: '#c90404',
        marginBottom: 15,
        textAlign: 'center'
    },

    innerBox: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },

    text: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fc4747',
        width: '65%'
    },

    image: {
        width: '30%',
        height: 50,
        resizeMode: 'contain',
        marginRight: 15
    },

});

export default Achieves;
