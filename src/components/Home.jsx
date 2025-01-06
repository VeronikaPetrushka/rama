import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Settings from './Settings';
import Map from './Map';

const { height } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();
    const [settingsVisible, setSettingsVisible] = useState(false);

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <View style={styles.map}>
                    <Map />
                </View>

                <TouchableOpacity style={styles.quizBtn} onPress={() => navigation.navigate('QuizScreen')}>
                    <Text style={styles.quizBtnText}>Quiz</Text>
                </TouchableOpacity>

                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PhotoScreen')}>
                        <Text style={styles.btnText}>Photo book</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BookScreen')}>
                        <Text style={styles.btnText}>Heritage</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AchievesScreen')}>
                        <Text style={styles.btnText}>Achievements</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => setSettingsVisible(true)}>
                        <Text style={styles.btnText}>Settings</Text>
                    </TouchableOpacity>
                </View>

                <Settings visible={settingsVisible} onClose={setSettingsVisible} />

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: height * 0.07,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    map: {
        width: '100%',
        height: height * 0.35,
        marginBottom: height * 0.05
    },

    quizBtn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#fcb6b6',
        borderWidth: 2,
        borderColor: '#c90404',
        marginBottom: height * 0.03
    },

    quizBtnText: {
        fontSize: 19,
        color: '#c90404',
        fontWeight: '800',
    },

    btnsContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: height * 0.04
    },

    btn: {
        width: '46%',
        padding: 43,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fc4747',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffe8e8',
    },

    btnText: {
        fontSize: 17,
        color: '#ffe8e8',
        fontWeight: '800',
    }
});

export default Home;