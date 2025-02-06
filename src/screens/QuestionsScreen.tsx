import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import ModelPopUp from '../common/PopUp';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuestionsScreen = ({route}: any) => {
  const {quizzes} = route.params;
  const quizData = quizzes && quizzes.length > 0 ? quizzes[0] : null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(300);
  const [answers, setAnswers] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sentquizid, setSentquizid] = useState<string | null>(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          handleNextQuestion();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const questions = quizData?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const questionText = currentQuestion?.text || '';
  const options = currentQuestion?.options || [];

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmitQuiz = async (updatedAnswers: string[]) => {
    const allAnswered = updatedAnswers.every(answer => answer?.trim() !== '');
    const correctLength = updatedAnswers.length === questions.length;

    if (correctLength && allAnswered) {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.post(
          'https://quizz2.onrender.com/api/submit/quiz',
          {
            quizId: quizData?._id,
            answers: updatedAnswers,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 200) {
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Quiz submitted successfully!',
            visibilityTime: 2000,
          });
          console.log(response.data.result._id, 'I am quiz response ID');
          setSentquizid(response.data.result._id);
          console.log(response, 'i am quiz response');
          // setSentquizid

          setModalVisible(true);
        }
      } catch (error) {
        console.error('Error submitting quiz:', error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Failed to submit quiz.',
          visibilityTime: 2000,
        });
      }
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please answer all questions before submitting!',
        visibilityTime: 2000,
      });
    }
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please select an option!',
        visibilityTime: 2000,
      });
      return;
    }

    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedOption;

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleSubmitQuiz(newAnswers);
      }

      return newAnswers;
    });

    setSelectedOption(null);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers(Array(questions.length).fill(''));
    setTimeLeft(300);
  };

  const formatTimeLeft = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.questionCounter}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        <Text style={styles.timerText}>
          Time Left: {formatTimeLeft(timeLeft)}
        </Text>

        <Text style={styles.questionText}>{questionText}</Text>

        <View style={styles.optionsContainer}>
          {options.map((option: string, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionPress(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.skipButton}
        // onPress={handleSkipQuestion}
      >
        <Text style={styles.skipButtonText}>Skip Question</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNextQuestion}
        disabled={!selectedOption}>
        <Text style={styles.buttonText}>
          {currentQuestionIndex < questions.length - 1
            ? 'Next Question'
            : 'Submit'}
        </Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalOverlay}>
          <ModelPopUp
            visible={modalVisible}
            onClose={handleModalClose}
            answers={answers}
            questions={questions}
            id={sentquizid}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  questionCounter: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  questionText: {
    fontSize: 26,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  optionsContainer: {},
  timerText: {
    fontSize: 20,
    padding: 20,
    color: '#ff0000',
    textAlign: 'center',
  },
  optionButton: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  selectedOption: {backgroundColor: '#FF681F'},
  optionText: {fontSize: 18},
  button: {
    backgroundColor: '#FF681F',
    padding: 16,
    borderRadius: 15,
    margin: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  skipButton: {
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 18, 
    color: '#000', 
    fontWeight: 'bold',
  },
 
});

export default QuestionsScreen;
