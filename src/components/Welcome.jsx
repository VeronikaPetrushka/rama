import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";

const Welcome = ({ visible, onClose }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Welcome to First Nations Explorer!</Text>

                    <Text style={styles.text}>Discover the rich heritage of Canada’s Indigenous peoples. Dive into detailed articles, mark key locations, capture memories in your photo album, and test your knowledge with engaging quizzes. Earn achievements as you explore and celebrate the First Nations' legacy!</Text>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>    

                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 23,
        color: '#fc4747',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 19,
        color: '#3C3C3B',
        marginBottom: 28,
        textAlign: 'center'
    },
    closeButton: {
        width: 150,
        padding: 7,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fc4747',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
    }
});

export default Welcome;
