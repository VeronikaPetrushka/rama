// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import histories from '../constants/histories';
// import Icons from './Icons';

// const { height } = Dimensions.get('window');

// const Book = () => {
//     const navigation = useNavigation();

//     return (
//         <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
//             <View style={styles.container}>
//                 <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
//                     <Icons type={'back'} />
//                 </TouchableOpacity>

//                 <Text style={styles.title}>Histories</Text>

//                 <ScrollView style={{width: '100%'}}>
//                     {
//                         histories.map((item, index) => (
//                             <View key={index} style={styles.card}>
//                                 <Text style={styles.name}>{item.name}</Text>
//                                 <Text 
//                                     style={styles.history}
//                                     numberOfLines={4}
//                                     ellipsizeMode="tail"
//                                     >
//                                         {item.history}
//                                 </Text>
//                                 <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MoreScreen', {item: item})}>
//                                     <Text style={styles.btnText}>Learn more</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         ))
//                     }
//                 </ScrollView>

//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         paddingTop: height * 0.07,
//         padding: 15
//     },

//     back: {
//         width: 40,
//         height: 40,
//         position: 'absolute',
//         top: height * 0.055,
//         left: 10,
//         zIndex: 10
//     },

//     title: {
//         fontSize: 26,
//         color: '#ffe8e8',
//         fontWeight: '800',
//         textAlign: 'center',
//         marginBottom: height * 0.03
//     },

//     card: {
//         width: '100%',
//         padding: 15,
//         borderRadius: 12,
//         backgroundColor: '#ffe8e8',
//         marginBottom: 20,
//         borderRadius: 12,
//         alignItems: 'center',
//         padding: 15,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 3,
//     },

//     name: {
//         fontSize: 18,
//         fontWeight: '800',
//         color: '#c90404',
//         marginBottom: 10,
//         textAlign: 'center'
//     },

//     history: {
//         fontSize: 16,
//         fontWeight: '300',
//         color: '#575151',
//         marginBottom: 10,
//         textAlign: 'justify'
//     },

//     btn: {
//         width: '100%',
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
//     }

// });

// export default Book;
