import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Details = ({ place }) => {
    const navigation = useNavigation();
    const [photobook, setPhotobook] = useState([]);
    const [checked, setChecked] = useState([]);
    const [isVisited, setIsVisited] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const storedPhotobook = await AsyncStorage.getItem('photobook');
            const storedChecked = await AsyncStorage.getItem('checked');

            if (storedPhotobook) {
                setPhotobook(JSON.parse(storedPhotobook));
            }

            if (storedChecked) {
                const checkedData = JSON.parse(storedChecked);
                setChecked(checkedData);

                const visited = checkedData.some(item => item.name === place.name);
                setIsVisited(visited);
            }
        };
        loadData();
    }, []);


    const handleUpload = async () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, selectionLimit: 0 },
            async (response) => {
                if (!response.didCancel && !response.errorCode) {
                    const newImages = response.assets.map(asset => ({
                        ...place,
                        imageUri: asset.uri,
                    }));
                    const updatedPhotobook = [...photobook, ...newImages];
                    setPhotobook(updatedPhotobook);
                    await AsyncStorage.setItem('photobook', JSON.stringify(updatedPhotobook));
                    alert('Images uploaded and saved successfully!');
                }
            }
        );
    };    

    const handleCheckIn = async () => {
        const currentDate = new Date().toISOString();
        const updatedChecked = [...checked, { ...place, date: currentDate }];
        setChecked(updatedChecked);
        setIsVisited(true);

        await AsyncStorage.setItem('checked', JSON.stringify(updatedChecked));
        alert('Checked in successfully!');
    };

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

                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.btn} onPress={handleUpload}>
                        <Text style={styles.btnText}>Upload</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MapScreen', { place: place })}>
                        <Text style={styles.btnText}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, isVisited && {backgroundColor: '#8e8e8e'}]}
                        onPress={!isVisited ? handleCheckIn : null}
                        disabled={isVisited}
                    >
                        <Text style={styles.btnText}>{isVisited ? 'Visited' : 'Check in'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 15
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
    },

    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
        marginTop: 15
    },

    btn: {
        width: '32%',
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

export default Details;