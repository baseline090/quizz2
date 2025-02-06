import React, {useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import img from '../assets/card/wallpaper.jpg';


const StartQuizScreen = ({navigation, route}: any) => {
  const {quizData} = route.params;
  console.log('quizData: ', quizData);


  const handlePress = () => {
    navigation.navigate('QuestionsScreen', { quizData});
  }
  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <>
      {/*---------  Header with Image Background --------- */}
      <ImageBackground
        source={img}
        style={styles.topContainer}
        resizeMode="cover">
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handlePressBack}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <SafeAreaView style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
            {quizData.title}
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.leftSection}>
              <Text style={styles.leftHeading}>
                {quizData?.questions?.length || 0}
              </Text>
              <Text style={styles.leftDesc}>Questions</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.rightHeading}>
                {quizData?.rightAnswerPoints || 0} Points
              </Text>
              <Text style={styles.rightDesc}>Right Answer</Text>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.leftSection}>
              <Text style={styles.leftHeading}>
                {quizData?.wrongAnswerPoints || 0}
              </Text>
              <Text style={styles.leftDesc}>Wrong Answer</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.rightHeading}>
                {quizData?.totalTime || '0 min'}
              </Text>
              <Text style={styles.rightDesc}>Total Time</Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              {quizData?.description }
            </Text>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={handlePress}>
            <Text style={styles.startButtonText}>Start Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: 280,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 16,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 16,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#000'
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  rightSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  leftHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  leftDesc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
  },
  rightHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  rightDesc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
  },
  descriptionContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 8,
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color:'#000'
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 22,
    color: '#777',
  },
  startButton: {
    backgroundColor: '#FF681F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default StartQuizScreen;


// import React, { useState } from 'react';
// import { Alert, ImageBackground, Text, TouchableOpacity, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// type StartQuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StartQuizScreen'>;

// const StartQuizScreen = ({ route }: any) => {

//   console.log('route: ', route);
//   const [questions, setQuestions] = useState([]);
//   const navigation = useNavigation<StartQuizScreenNavigationProp>();

//   const handlePress = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       if (!token) {
//         Alert.alert('No token found. Please log in again.');
//         return;
//       }
  
//       const response = await fetch('http://localhost:3000/api/user/quizdata', {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       const data = await response.json();
  
//       if (data && data.userQuiz && data.userQuiz.length > 0) {
//         const selectedQuiz = data.userQuiz[0]; // Select the first quiz for simplicity
//         console.log('selectedQuiz: ', selectedQuiz);
//         const questions = selectedQuiz?.questions;
//         console.log('questions: ', questions);
  
//         if (questions && questions.length > 0) {
//           setQuestions(questions);
//           navigation.navigate('QuestionsScreen', { questions, quizData: selectedQuiz });
//         } else {
//           Alert.alert('No questions found!');
//         }
//       } else {
//         Alert.alert('No quiz data found!');
//       }
//     } catch (error) {
//       console.error('Error fetching quiz data:', error);
//       Alert.alert('Error fetching quiz data');
//     }
//   };

//   return (
//     <>
//       <ImageBackground source={require('../assets/card/wallpaper.jpg')} style={styles.topContainer} resizeMode="cover">
//         <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
//           <Icon name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//       </ImageBackground>

//       <SafeAreaView style={styles.mainContainer}>
//         <ScrollView contentContainerStyle={styles.container}>
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>{route.params?.quizData?.title || 'Quiz Title'}</Text>
//           </View>

//           <TouchableOpacity style={styles.startButton} onPress={handlePress}>
//             <Text style={styles.startButtonText}>Start Quiz</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   topContainer: {
//     height: 280,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   iconContainer: {
//     position: 'absolute',
//     top: 50,
//     left: 16,
//     borderRadius: 50,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 8,
//   },
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   container: {
//     padding: 16,
//   },
//   headerContainer: {
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   startButton: {
//     backgroundColor: '#FF681F',
//     paddingVertical: 12,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   startButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default StartQuizScreen;
