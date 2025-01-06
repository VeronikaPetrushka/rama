import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import achieves from '../constants/achieves.js';
import quiz from '../constants/quiz.js';

const Quiz = () => {
    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [timerActive, setTimerActive] = useState(true);
    const [modalState, setModalVisible] = useState({ index: null, visible: false });

    useEffect(() => {
        const initializeCompletedCount = async () => {
            try {
                const completedCount = await AsyncStorage.getItem('completedCount');
                if (completedCount === null) {
                    await AsyncStorage.setItem('completedCount', '0');
                }
            } catch (error) {
                console.error('Failed to initialize completed count:', error);
            }
        };

        initializeCompletedCount();
    }, []);

    useEffect(() => {
        const saveQuizState = async () => {
            try {
                const savedRecords = await AsyncStorage.getItem('quizRecords');
                const records = savedRecords ? JSON.parse(savedRecords) : [];
                const completedCount = parseInt(await AsyncStorage.getItem('completedCount')) || 0;

                if (quizFinished) {
                    if (currentQuestionIndex + 1 === quiz.length) {
                        records.push(correctAnswersCount);
                        await AsyncStorage.setItem('quizRecords', JSON.stringify(records));
                        await AsyncStorage.setItem('completedCount', (completedCount + 1).toString());
                    }
                }
            } catch (error) {
                console.error('Failed to save quiz state:', error);
            }
        };

        saveQuizState();
    }, [correctAnswersCount, quizFinished, currentQuestionIndex]);

    useEffect(() => {
        const checkForFirstCompletion = async () => {
            try {
                const completedCount = parseInt(await AsyncStorage.getItem('completedCount')) || 0;

                if (quizFinished && completedCount === 1) {
                    setModalVisible({ index: 0, visible: true });
                }
            } catch (error) {
                console.error('Failed to check completed count:', error);
            }
        };

        checkForFirstCompletion();
    }, [quizFinished]);

    const handleAnswerSelection = (option) => {
        const correct = quiz[currentQuestionIndex].correctAnswer;
        setSelectedOption(option);
        const answerIsCorrect = option === correct;
        setIsAnswerCorrect(answerIsCorrect);

        if (answerIsCorrect) {
            setCorrectAnswersCount(correctAnswersCount + 1);
        }

        setTimeout(() => {
            handleNextQuestion();
        }, 1000);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < quiz.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswerCorrect(null);
            setTimerActive(true);
        } else {
            setQuizFinished(true);
        }
    };

    useEffect(() => {
        if (timerActive && timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else if (timeLeft === 0) {
            setQuizFinished(true);
            setTimerActive(false);
        }
    }, [timeLeft, timerActive]);

    const renderOptions = () => {
        return quiz[currentQuestionIndex].options.map((option, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.option,
                        selectedOption === option &&
                        (isAnswerCorrect
                            ? { backgroundColor: 'rgba(41, 140, 25, 0.6)' }
                            : { backgroundColor: 'rgba(163, 47, 47, 0.6)' })
                    ]}
                    onPress={() => handleAnswerSelection(option)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            );
        });
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleTryAgain = async () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswerCorrect(null);
        setQuizFinished(false);
        setCorrectAnswersCount(0);
        setTimeLeft(30);
        setTimerActive(true);
        setIsFirstCompletion(true);    
    };
    
    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{ flex: 1 }}>
            <View style={styles.container}>
                {quizFinished ? (
                    <View style={{ width: '100%' }}>
                        <Text style={styles.finishText}>Congratulations! You have completed the quiz.</Text>
                        <Text style={styles.scoreText}>You got {correctAnswersCount} out of {quiz.length} correct!</Text>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#fcb6b6' }]}
                            onPress={handleTryAgain}
                        >
                            <Text style={[styles.buttonText, { color: '#c90404' }]}>Try Again</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.goBack('')}
                        >
                            <Text style={styles.buttonText}>Home</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ width: '100%' }}>
                        <Text style={styles.question}>{quiz[currentQuestionIndex].question}</Text>

                        <View style={styles.timerContainer}>
                            <ProgressBar
                                progress={timeLeft / 30}
                                color="#fc4747"
                                style={styles.progressBar}
                            />
                            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                        </View>

                        {renderOptions()}
                    </View>
                )}

                <Modal
                    transparent={true}
                    visible={modalState.visible}
                    animationType="fade"
                    onRequestClose={() => setModalVisible({ ...modalState, visible: false })}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            {achieves[modalState.index] ? (
                                <>
                                    <Image source={achieves[modalState.index].image} style={styles.modalImage} />
                                    <Text style={styles.modalTitle}>{achieves[modalState.index].title}</Text>
                                    <Text style={styles.modalText}>{achieves[modalState.index].text}</Text>
                                </>
                            ) : (
                                <Text style={styles.errorText}>Achievement data not found</Text>
                            )}
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible({ ...modalState, visible: false })}
                            >
                                <Text style={styles.closeButtonText}>Nice !</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    question: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center'
    },

    option: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 15,
        marginVertical: 5,
        borderRadius: 12,
        width: '100%',
    },

    optionText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#c90404',
        textAlign: 'center'
    },

    finishText: {
        fontSize: 26,
        fontWeight: '900',
        color: '#ffe8e8',
        textAlign: 'center',
        marginBottom: 10,
    },

    scoreText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 100
    },

    timerContainer: {
        width: '100%',
        height: 30,
        backgroundColor: '#c90404',
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    progressBar: {
        height: 20,
        borderRadius: 10,
        width: '100%',
    },

    timerText: {
        position: 'absolute',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

    button: {
        width: '100%',
        backgroundColor: '#fc4747',
        padding: 15,
        borderRadius: 12,
        marginVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonText: {
        fontSize: 18,
        color: '#ffe8e8',
        fontWeight: '900',
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },

    modalImage: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
    },

    modalText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },

    closeButton: {
        paddingHorizontal: 30,
        paddingVertical: 7,
        backgroundColor: '#fc4747',
        borderRadius: 12,
    },

    closeButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '700',
    },    
    
});

export default Quiz;
