import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import PieChart from '../common/pieChart';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import ConfettiCannon from 'react-native-confetti-cannon';
import img from '../assets/card/startquize.jpg';
import axios from 'axios';

const ResultQuizScreen = ({ route }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { resultData } = route.params;

  const { resultId } = route.params;
  // const [resultData, setResultData] = useState<any | null>(null);
  console.log('resultData: ', resultData);
  console.log('resultData123: ', resultId);

  const progress = useSharedValue(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiBursts, setConfettiBursts] = useState<number>(0);


  useEffect(() => {
    // Animate progress based on total percentage
    if (resultData?.totalPercentage) {
      progress.value = withTiming(resultData.totalPercentage / 100, { duration: 1500 });

      if (resultData.totalPercentage >= 80) {
        setShowCelebration(true);
      }
    }
  }, [resultData, progress]);
  const handlePress = () => {
    navigation.navigate('QuizOverview');
  };

  const handlePressBack = () => {
    navigation.navigate('Categories');
  };

  return (
    <>
      <ImageBackground
        source={img}
        style={styles.topContainer}
        resizeMode="cover">
        <PieChart progress={progress} />
        {showCelebration &&
         Array.from({ length: confettiBursts }).map((_, index) => (
            <ConfettiCannon
              key={index}
              count={300}
              origin={{ x: Math.random() * 300, y: -10 }}
              fadeOut={true}
            />
         ))}
         
      </ImageBackground>

      <SafeAreaView style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Quiz Results</Text>
          </View>

          {resultData && (
            <>
              <View style={styles.bodyContainer}>
                <View style={styles.leftSection}>
                  <Text style={styles.leftHeading}>Total Questions</Text>
                  <Text style={styles.leftDesc}>{resultData.totalQuestions}</Text>
                </View>
                <View style={styles.rightSection}>
                  <Text style={styles.rightHeading}>Total Points</Text>
                  <Text style={styles.rightDesc}>{resultData.totalScore}</Text>
                </View>
              </View>

              <View style={styles.bodyContainer}>
                <View style={styles.leftSection}>
                  <Text style={styles.leftHeading}>Correct Answers</Text>
                  <Text style={[styles.leftDesc, styles.correctText]}>{resultData.correctAnswer}</Text>
                </View>
                <View style={styles.rightSection}>
                  <Text style={styles.rightHeading}>Incorrect Answers</Text>
                  <Text style={[styles.rightDesc, styles.incorrectText]}>{resultData.incorrectAnswer}</Text>
                </View>
              </View>

              <View style={styles.bodyContainer}>
                <View style={styles.leftSection}>
                  <Text style={styles.leftHeading}>Pass/Fail</Text>
                  <Text style={[styles.leftDesc, styles.skippedText]}>{resultData.passFail}</Text>
                </View>
                <View style={styles.rightSection}>
                  <Text style={styles.rightHeading}>Completion</Text>
                  <Text style={styles.rightDesc}>{resultData.totalPercentage}%</Text>
                </View>
              </View>
            </>
          )}

   

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={handlePress}>
              <Text style={styles.leftButtonText}>Quiz Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightButton} onPress={handlePressBack}>
              <Text style={styles.rightButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
  },
  safeAreaContainer: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
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
    color: '#000',
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
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  leftDesc: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  rightHeading: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  rightDesc: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  correctText: {
    color: 'green',
  },
  incorrectText: {
    color: 'red',
  },
  skippedText: {
    color: '#FFA500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  leftButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  rightButton: {
    flex: 1,
    backgroundColor: '#FF681F',
    paddingVertical: 12,
    borderRadius: 8,
  },
  leftButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  rightButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ResultQuizScreen;


// import React, {useEffect, useState} from 'react';
// import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
// import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
// import img from '../assets/card/startquize.jpg';
// import {Result, calculateQuizResults} from '../types/quizUtils';
// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../types';
// import PieChart from '../common/pieChart';
// import {useSharedValue, withTiming} from 'react-native-reanimated';
// import ConfettiCannon from 'react-native-confetti-cannon';

// const ResultQuizScreen = ({route}: any) => {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const [loading, setLoading] = useState<boolean>(true);
//   const {questions, answers} = route.params;
//   const [result, setResult] = useState<Result | null>(null);
//   const progress = useSharedValue(0);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [confettiBursts, setConfettiBursts] = useState<number>(0);

//   useEffect(() => {
//     if (questions && answers) {
//       const formattedAnswers = questions.reduce(
//         (
//           acc: {[x: string]: any},
//           question: {id: string | number},
//           index: string | number,
//         ) => {
//           acc[question.id] = answers[index];
//           return acc;
//         },
//         {},
//       );

//       const results = calculateQuizResults(questions, formattedAnswers);
//       setResult(results);
//       setLoading(false);
//       const completion = results.correctAnswer / results.totalQuestions;
//       progress.value = withTiming(completion, {duration: 3000});
//       if (completion >= 0.7) {
//         setShowCelebration(true);
//       }
//     } else {
//       console.error('Questions or answers are missing!');
//     }
//   }, [questions, answers]);

//   useEffect(() => {
//     if (showCelebration) {
//       const interval = setInterval(() => {
//         setConfettiBursts((prev) => prev + 1);
//       }, 2000);
//       if (confettiBursts >= 10) {
//         clearInterval(interval);
//       }

//       return () => clearInterval(interval);
//     }
//   }, [showCelebration, confettiBursts]);

//   const handlePress = () => {
//     navigation.navigate('QuizOverview');
//   };

//   const handlePressBack = () => {
//     navigation.navigate('Categories');
//   };

//   return (
//     <>
//       {/*---------  Header with Image Background --------- */}
//       <ImageBackground
//         source={img}
//         style={styles.topContainer}
//         resizeMode="cover">
//         <PieChart progress={progress} />
//         {showCelebration &&
//           Array.from({ length: confettiBursts }).map((_, index) => (
//             <ConfettiCannon
//               key={index}
//               count={300} // Number of confetti pieces
//               origin={{ x: Math.random() * 300, y: -10 }} // Random starting points
//               fadeOut={true} // Confetti fades out
//             />
//           ))}
//       </ImageBackground>

//       {/* --------- Main Container --------- */}
//       <SafeAreaView style={styles.mainContainer}>
//         <ScrollView contentContainerStyle={styles.container}>
//           {/* --------- Header Title --------- */}
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>Accurate Answers</Text>
//           </View>

//           {/* --------- Quiz Details --------- */}
//           {result && (
//             <>
//               <View style={styles.bodyContainer}>
//                 <View style={styles.leftSection}>
//                   <Text style={styles.leftHeading}>Total Questions</Text>
//                   <Text style={styles.leftDesc}>{result.totalQuestions}</Text>
//                 </View>
//                 <View style={styles.rightSection}>
//                   <Text style={styles.rightHeading}>Total Points</Text>
//                   <Text style={styles.rightDesc}>{result.totalPoints}</Text>
//                 </View>
//               </View>

//               <View style={styles.bodyContainer}>
//                 <View style={styles.leftSection}>
//                   <Text style={styles.leftHeading}>Correct Answers</Text>
//                   <Text style={[styles.leftDesc, styles.correctText]}>
//                     {result.correctAnswer}
//                   </Text>
//                 </View>
//                 <View style={styles.rightSection}>
//                   <Text style={styles.rightHeading}>Incorrect Answers</Text>
//                   <Text style={[styles.rightDesc, styles.incorrectText]}>
//                     {result.incorrectAnswers}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.bodyContainer}>
//                 <View style={styles.leftSection}>
//                   <Text style={styles.leftHeading}>Skipped Questions</Text>
//                   <Text style={[styles.leftDesc, styles.skippedText]}>
//                     {result.skippedQuestions}
//                   </Text>
//                 </View>
//                 <View style={styles.rightSection}>
//                   <Text style={styles.rightHeading}>Completion</Text>
//                   <Text style={styles.rightDesc}>{result?.completion}</Text>
//                 </View>
//               </View>
//             </>
//           )}

//           {/*------- Start Button  -------*/}
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.leftButton} onPress={handlePress}>
//               <Text style={styles.leftButtonText}>Quiz Overview</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.rightButton}
//               onPress={handlePressBack}>
//               <Text style={styles.rightButtonText}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   topContainer: {
//     height: 250,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   spinnerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 18,
//     color: '#000',
//   },
//   safeAreaContainer: {
//     flex: 1,
//     padding: 20,
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   resultText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   heading: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '700',
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
//   bodyContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   leftSection: {
//     flex: 1,
//     marginRight: 10,
//     backgroundColor: '#ffffff',
//     padding: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     shadowColor: '#ddd',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   rightSection: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     padding: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     shadowColor: '#ddd',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   leftHeading: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 10,
//   },
//   leftDesc: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#000',
//   },
//   rightHeading: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 10,
//   },
//   rightDesc: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#000',
//   },
//   correctText: {
//     color: 'green',
//   },
//   incorrectText: {
//     color: 'red',
//   },
//   skippedText: {
//     color: '#FFA500',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   leftButton: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     paddingVertical: 12,
//     marginRight: 8,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   rightButton: {
//     flex: 1,
//     backgroundColor: '#FF681F',
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   leftButtonText: {
//     color: '#000000',
//     fontSize: 18,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   rightButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });

// export default ResultQuizScreen;
