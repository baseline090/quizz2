import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {erectionData} from '../data/questionData';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const QuizOverview = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});

  const handleSelectAnswer = (questionId: string, option: string) => {
    if (selectedAnswers[questionId]) return;

    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: option,
    }));
  };

  const isAnswerCorrect = (questionId: string, selectedOption: string) => {
    const correctAnswer = erectionData.find(
      q => q.id === questionId,
    )?.correctAnswer;
    return selectedOption === correctAnswer;
  };

  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        <FlatList
          data={erectionData}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitle}>{item.questionText}</Text>
              {item.options.map((option, index) => {
                const isSelected = selectedAnswers[item.id] === option;
                const isCorrect = isAnswerCorrect(item.id, option);

                return (
                  <View style={styles.optionContainer} key={index}>
                    
                    <RadioButton
                      value={option}
                      status={isSelected ? 'checked' : 'unchecked'}
                      onPress={() => handleSelectAnswer(item.id, option)}
                      color="green"
                      uncheckedColor="#ccc"
                    />

                    <Text style={styles.cardDescription}>{option}</Text>

                    {isSelected && (
                      <Icon
                        name={isCorrect ? 'check-circle' : 'cancel'}
                        size={24}
                        color={isCorrect ? 'green' : 'red'}
                        style={styles.icon}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});

export default QuizOverview;
