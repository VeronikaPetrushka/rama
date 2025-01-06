import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import places from '../constants/places.js';

const Map = () => {
    const mapRef = useRef(null);
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerSize, setMarkerSize] = useState(35);

    useEffect(() => {
        if (mapRef.current) {
            const coordinates = places.map((item) => ({
                latitude: item.coordinates[0].lat,
                longitude: item.coordinates[0].lng,
            }));
            mapRef.current.fitToCoordinates(coordinates, {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                animated: true,
            });
        }
    }, []);

    const handleNextMarker = () => {
        const nextIndex = (currentIndex + 1) % places.length;
        setCurrentIndex(nextIndex);
        setSelectedPlace(null);

        const { lat, lng } = places[nextIndex].coordinates[0];
        mapRef.current.animateToRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
        }, 1000);

        setMarkerSize(80);
    };

    const handlePlaceChange = (region) => {
        const zoomFactor = Math.max(0.1, Math.min(0.1 / region.latitudeDelta, 1));
        const newSize = 35 * zoomFactor;

        if (markerSize !== 80) {
            setMarkerSize(Math.max(35, Math.min(newSize, 120)));
        }
    };

    const handleMarkerPress = (place) => {
        setSelectedPlace(place);
    };

    const goToDetailsScreen = () => {
        if (selectedPlace) {
            navigation.navigate('DetailsScreen', { place: selectedPlace });
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: 45.4371908,
                    longitude: 12.3345898,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                onRegionChange={handlePlaceChange}
            >
                {places.map((item) => (
                    <Marker
                        key={item.name}
                        coordinate={{
                            latitude: item.coordinates[0].lat,
                            longitude: item.coordinates[0].lng,
                        }}
                        onPress={() => handleMarkerPress(item)}
                    >
                        <View>
                            <Image
                                source={item.image}
                                style={[styles.markerImage,
                                     { width: markerSize, height: markerSize }]}
                            />
                        </View>
                        <Callout tooltip onPress={goToDetailsScreen}>
                            <View style={styles.calloutContainer}>
                                <Text style={styles.placeName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <TouchableOpacity style={styles.btn} onPress={handleNextMarker}>
                <Text style={styles.btnText}>Next place</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 14,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: '#db1414'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    btn: {
        position: 'absolute',
        bottom: 10,
        left: '35%',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 15,
        backgroundColor: '#db1414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerImage: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#db1414'
    },
    visitedMarkerBorder: {
        borderWidth: 3,
        borderColor: '#FFC000',
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500'
    },
    calloutContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
        minWidth: 120,
    },
    placeName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#3C3C3B',
        marginBottom: 5,
        textAlign: 'center',
    },
    detailsButton: {
        backgroundColor: '#db1414',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    visitedButton: {
        backgroundColor: '#FFC000',
    },
    detailsButtonText: {
        color: '#fff',
    },
    visitedIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: -5,
        right: -5,
        zIndex: 15,
    },
});

export default Map;
