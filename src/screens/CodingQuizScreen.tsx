import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { codingData } from '../data/questionData';
import { Alert } from 'react-native';

const CodingQuizScreen = ({navigation}:any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(300); 
  const [answers, setAnswers] = useState<string[]>(Array(codingData.length).fill('')); 

  //------ Timer effect
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          Alert.alert("Time's up!", "You've run out of time.");
          handleNextQuestion(); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const currentQuestion = codingData[currentQuestionIndex];
  const { title: question, options } = currentQuestion;

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = selectedOption;
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (currentQuestionIndex < codingData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigation.navigate('ModelPopUp', { answers: newAnswers }); 
        resetQuiz(); 
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers(Array(codingData.length).fill('')); 
  };

  const formatTimeLeft = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
        <Text style={styles.questionCounter}>
          Question {currentQuestionIndex + 1} of {codingData.length}
        </Text>
        <Text style={styles.timerText}>
          Time Left: {formatTimeLeft(timeLeft)}
        </Text>
  
        <View>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
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
      </View>

      {/*------- Button positioned at the bottom  ------*/}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNextQuestion}
        disabled={!selectedOption}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  )
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
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
    },
    questionText: {
      fontSize: 24,
      marginBottom: 10,
      fontWeight: 'bold',
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
    selectedOption: {
      backgroundColor: '#FFCC80',
    },
    optionText: {
      fontSize: 18,
    },
    button: {
      backgroundColor: '#FF681F',
      padding: 16,
      borderRadius: 15,
      margin: 20,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

export default CodingQuizScreen