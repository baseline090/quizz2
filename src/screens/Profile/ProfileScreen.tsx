import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {details, notificationData, settingsData} from '../../data/profiledata';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../../redux/store';
import {logoutApi} from '../../redux/Slice/IndexApi';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {loginSuccess, setToken} from '../../redux/Slice/authSlice';
import Toast from 'react-native-toast-message';

export function Settings() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    
    try {
      const result = await dispatch(logoutApi()).unwrap();
      console.log('result: ', result);

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Logout Successful',
        text2: 'You have been logged out successfully!',
      });

      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Logout failed:', error);

      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Logout Failed',
        text2: error || 'An error occurred while logging out.',
      });

      if (error === 'Unauthorized access, please login first') {
        dispatch(loginSuccess(null));
        dispatch(setToken(null));
        navigation.navigate('Login');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {settingsData.map((item, index) => (
        <View style={styles.detailsContainer} key={index}>
          <Icon name={item.icon} size={20} color="#000" />
          <Text style={styles.detailsHeader}>{item.label}</Text>
          <Icon
            name="chevron-right"
            size={20}
            color="#000"
            onPress={() => {
              if (item.label === 'Privacy Policy') {
                navigation.navigate('PrivacyPolicyScreen');
              } else if (item.label === 'Terms & Conditions') {
                navigation.navigate('TermsConditionScreen');
              } else if (item.label === 'Help Center') {
                navigation.navigate('HelpCenterScreen');
              } else if (item.label === 'About Us') {
                navigation.navigate('AboutUsScreen');
              } else if (item.label === 'Logout') handleLogout();
            }}
          />
        </View>
      ))}
    </SafeAreaView>
  );
}

export function Notification({navigation}: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollNoteContent}>
      {notificationData.map((item, index) => (
        <View style={styles.notificationContainer} key={index}>
          <View style={styles.icon}>
            <Icon name={item.icon} size={40} color={'orange'} />
          </View>
          <Text style={styles.notificationHeader}>{item.label}</Text>
          <Text style={styles.notificationdesc}>{item.description}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

function ProfileScreen({route}: any) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/card/img1.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>{user ? user.fullName : 'Guest'}</Text>
        <Text style={styles.email}>{user ? user.email : 'john@gmail.com'}</Text>
      </View>

      {details.map((item, index) => (
        <View style={styles.detailsContainer} key={index} >
          {item.icon ? (
            <Icon name={item.icon} size={20} color="#000" />
          ) : (
            <Text>No Icon</Text>
          )}
          <Text style={styles.detailsHeader}>{item.label}</Text>
          <Icon
            name="chevron-right"
            size={20}
            color="#000"
            onPress={() => {
              if (item.label === 'My Profile') {
                navigation.navigate('MyProfile');
              } else if (item.label === 'Completed Quizzes') {
                navigation.navigate('CompletedQuiz');
              } else if (item.label === 'Settings') {
                navigation.navigate('Settings');
              } else if (item.label === 'Notification') {
                navigation.navigate('Notification');
              }
            }}
          />
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  email: {
    fontSize: 18,
    color: '#000000',
  },
  detailsContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  detailsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    flex: 1,
    color: '#000000',
  },

  scrollNoteContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cardDescription: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },

  notificationContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  icon: {
    backgroundColor: '#FAD5A5',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  notificationdesc: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    padding: 12,
    backgroundColor: '#FF681F',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
