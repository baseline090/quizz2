import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import img from "../assets/ques.png"
import knowledge from "../assets/ques.png"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";


 export function SplashKnowledgeScreen ({navigation}:any) {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={knowledge} style={styles.image} />
          <Text style={styles.mindTitle}>Show off knowledge in this challenging quiz</Text>
          <Text style={styles.subheading}>
            Quiz it up dive into a world of trivia and discover how much you really know
          </Text>
          
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyTabs')}>
            <Text style={styles.buttonText}>Get Started</Text>
            
          </TouchableOpacity>
          <Text style={styles.buttonTextSkip} onPress={() => navigation.navigate('MindblowingScreen')}>Skip</Text>
      </SafeAreaView>
    );

 }
const MindblowingScreen = () => { 
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={img} style={styles.image} />
          <Text style={styles.mindTitle}>Test your IQ with this mind-blowing quiz</Text>
          <Text style={styles.subheading}>
            Unlock your brain power with this quiz and boost your knowledge to the next level.
          </Text>
          
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SplashKnowledgeScreen')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('SplashScreen')}>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    innerContainer: {
        alignItems: 'center',
        paddingHorizontal: 20, 
    },
    image: {
        width: 350, 
        height: 300,
        marginBottom: 20, 
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    mindTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#000'
    },
    subheading: {
        textAlign: 'center', 
        marginBottom: 25, 
        fontWeight: '500',
        color:'#000' 
    },
    button: {
        backgroundColor: '#FF681F', 
        paddingVertical: 15, 
        marginHorizontal: 20, 
        borderRadius: 15, 
        width: '80%', 
        alignItems: 'center', 
        marginBottom:15
    },
  
    buttonText: {
        color: '#ffffff', 
        fontSize: 16, 
        fontWeight: '600', 
        textAlign: 'center', 
    },
    buttonTextSkip:{
        fontSize: 16, 
        fontWeight: '600', 
        textAlign: 'center', 
        color:'#000'
        
    }
  })

export default MindblowingScreen;