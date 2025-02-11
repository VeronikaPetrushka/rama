// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground, ScrollView, Modal } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { useNavigation } from '@react-navigation/native';
// import achieves from '../constants/achieves';
// import Icons from './Icons';

// const { height } = Dimensions.get('window');

// const Details = ({ place }) => {
//     const navigation = useNavigation();
//     const [photobook, setPhotobook] = useState([]);
//     const [checked, setChecked] = useState([]);
//     const [isVisited, setIsVisited] = useState(false);
//     const [modalState, setModalVisible] = useState({ index: null, visible: false });

//     useEffect(() => {
//         const loadData = async () => {
//             const storedPhotobook = await AsyncStorage.getItem('photobook');
//             const storedChecked = await AsyncStorage.getItem('checked');

//             if (storedPhotobook) {
//                 setPhotobook(JSON.parse(storedPhotobook));
//             }

//             if (storedChecked) {
//                 const checkedData = JSON.parse(storedChecked);
//                 setChecked(checkedData);

//                 const visited = checkedData.some(item => item.name === place.name);
//                 setIsVisited(visited);
//             }
//         };
//         loadData();
//     }, []);


//     const handleUpload = async () => {

//         const previousPhotobookLength = photobook.length;

//         launchImageLibrary(
//             { mediaType: 'photo', quality: 1, selectionLimit: 0 },
//             async (response) => {
//                 if (!response.didCancel && !response.errorCode) {
//                     const newImages = response.assets.map(asset => ({
//                         ...place,
//                         imageUri: asset.uri,
//                     }));
//                     const updatedPhotobook = [...photobook, ...newImages];
//                     setPhotobook(updatedPhotobook);
//                     await AsyncStorage.setItem('photobook', JSON.stringify(updatedPhotobook));
//                     alert('Images uploaded and saved successfully!');

//                     if (previousPhotobookLength === 0) {
//                         setModalVisible({ index: 4, visible: true });
//                     }
//                 }
//             }
//         );
//     };    

//     const handleCheckIn = async () => {
//         const currentDate = new Date().toISOString();
//         const updatedChecked = [...checked, { ...place, date: currentDate }];
//         setChecked(updatedChecked);
//         setIsVisited(true);

//         await AsyncStorage.setItem('checked', JSON.stringify(updatedChecked));

//         if (checked.length === 0) {
//             setModalVisible({ index: 2, visible: true });
//         }

//         if (updatedChecked.length === 12) {
//             setModalVisible({ index: 3, visible: true });
//         }

//         alert('Checked in successfully!');
//     };

//     return (
//         <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
//             <View style={styles.container}>

//                 <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
//                     <Icons type={'back'} />
//                 </TouchableOpacity>

//                 <Image source={place.image} style={styles.image} />

//                 <Text style={styles.name}>{place.name}</Text>

//                 <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
//                     <Text style={styles.address}>{place.address}</Text>
//                     <Text style={styles.description}>{place.description}</Text>
//                     <Text style={styles.subTitle}>Why it matters ?</Text>
//                     <Text style={styles.description}>{place.fact}</Text>
//                 </ScrollView>

//                 <View style={styles.btnsContainer}>
//                     <TouchableOpacity style={styles.btn} onPress={handleUpload}>
//                         <Text style={styles.btnText}>Upload</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MapScreen', { place: place })}>
//                         <Text style={styles.btnText}>Map</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[styles.btn, isVisited && {backgroundColor: '#8e8e8e'}]}
//                         onPress={!isVisited ? handleCheckIn : null}
//                         disabled={isVisited}
//                     >
//                         <Text style={styles.btnText}>{isVisited ? 'Visited' : 'Check in'}</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <Modal
//                     transparent={true}
//                     visible={modalState.visible}
//                     animationType="fade"
//                     onRequestClose={() => setModalVisible({ ...modalState, visible: false })}
//                 >
//                     <View style={styles.modalOverlay}>
//                         <View style={styles.modalContent}>
//                             {achieves[modalState.index] ? (
//                                 <>
//                                     <Image source={achieves[modalState.index].image} style={styles.modalImage} />
//                                     <Text style={styles.modalTitle}>{achieves[modalState.index].title}</Text>
//                                     <Text style={styles.modalText}>{achieves[modalState.index].text}</Text>
//                                 </>
//                             ) : (
//                                 <Text style={styles.errorText}>Achievement data not found</Text>
//                             )}
//                             <TouchableOpacity
//                                 style={styles.closeButton}
//                                 onPress={() => setModalVisible({ ...modalState, visible: false })}
//                             >
//                                 <Text style={styles.closeButtonText}>Nice !</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </Modal>

//             </View>
//         </ImageBackground>
//     )
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         paddingBottom: 25
//     },

//     back: {
//         width: 40,
//         height: 40,
//         position: 'absolute',
//         top: height * 0.045,
//         left: 10,
//         zIndex: 10
//     },

//     image: {
//         width: '100%',
//         height: height * 0.35,
//         marginBottom: height * 0.03,
//         borderBottomLeftRadius: 5,
//         borderBottomRightRadius: 5,
//     },

//     name: {
//         fontSize: 24,
//         color: '#ffe8e8',
//         fontWeight: '800',
//         textAlign: 'center',
//         marginBottom: height * 0.02
//     },

//     address: {
//         fontSize: 15,
//         color: '#ffe8e8',
//         fontWeight: '300',
//         marginBottom: height * 0.02,
//         paddingHorizontal: 10
//     },

//     description: {
//         fontSize: 15,
//         color: '#c90404',
//         fontWeight: '400',
//         marginBottom: height * 0.02, 
//         backgroundColor: 'rgba(255, 255, 255, 0.6)',
//         width: '90%',
//         padding: 10,
//         textAlign: 'justify',
//         borderRadius: 10
//     },

//     subTitle: {
//         fontSize: 18,
//         color: '#ffe8e8',
//         fontWeight: '900',
//         textAlign: 'center',
//         marginBottom: height * 0.02
//     },

//     btnsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         paddingHorizontal: 15,
//         marginTop: 15
//     },

//     btn: {
//         width: '32%',
//         padding: 12,
//         borderRadius: 12,
//         backgroundColor: '#fc4747',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },

//     btnText: {
//         fontSize: 14,
//         color: '#ffe8e8',
//         fontWeight: '800',
//     },

//     modalOverlay: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },

//     modalContent: {
//         width: '80%',
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         padding: 20,
//         alignItems: 'center',
//     },

//     modalImage: {
//         width: 100,
//         height: 100,
//         marginBottom: 15,
//     },

//     modalTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         marginBottom: 10,
//         textAlign: 'center',
//     },

//     modalText: {
//         fontSize: 14,
//         color: '#555',
//         textAlign: 'center',
//         marginBottom: 20,
//     },

//     closeButton: {
//         paddingHorizontal: 30,
//         paddingVertical: 7,
//         backgroundColor: '#fc4747',
//         borderRadius: 12,
//     },
    
//     closeButtonText: {
//         fontSize: 14,
//         color: '#fff',
//         fontWeight: '700',
//     },    

// });

// export default Details;