import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {
  DocumentPickerResponse,
  RegisterFormValues,
  RootStackParamList,
  initialValues,
} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerApi} from '../../redux/Slice/IndexApi';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Please Enter your full name'),
  username: Yup.string().required('Please Enter your username'),
  email: Yup.string()
    .email('Invalid email')
    // .matches(/^[^A-Z]/, 'First character cannot be a capital letter')
    .required('Please Enter your email address'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please Enter your password'),
});

const SignUpScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {loading, error} = useSelector((state: RootState) => state.auth);
  const [selectedImages, setSelectedImages] = useState<
    DocumentPickerResponse[]
  >([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleImageSelection = (images: DocumentPickerResponse[]) => {
    setSelectedImages(images);
    console.log('Selected images:', images);
  };

  const handleRegisterForm = async (values: RegisterFormValues) => {
    try {
      const response = await dispatch(registerApi(values)).unwrap();
      await AsyncStorage.setItem('userData', JSON.stringify(response));
      Alert.alert('Registration successful!', 'You can now log in.');
      navigation.navigate('Login');
    } catch (err: any) {
      Alert.alert('Registration failed', err.message || 'An error occurred');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={handleRegisterForm}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <View style={styles.headingContainer}>
                <Text style={styles.heading}>Sign Up</Text>
                <Text style={styles.subHeading}>
                  Welcome! Sign up to your account
                </Text>
              </View>

              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                placeholder="Enter your full Name"
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.error}>{errors.fullName}</Text>
              )}

              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Enter your username"
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                placeholder="Enter your email"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={!showPassword} 
                  placeholder="Enter your password"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.iconContainer}>
                  <Icon
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    size={24}
                    color="#333"
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              {/* <Text style={styles.label}>Upload Your Profile Images</Text>
              <ImagePickerComponent onImageSelected={handleImageSelection} /> */}

              <TouchableOpacity
                style={[styles.button, loading && {opacity: 0.6}]}
                onPress={() => handleSubmit()}
                disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Sign Up</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('Login')}>
            Log in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  headingContainer: {paddingVertical: 30},
  heading: {fontSize: 30, fontWeight: 'bold', color: '#333', marginBottom: 10},
  subHeading: {fontSize: 16, color: '#333', fontWeight: 'bold'},
  formContainer: {paddingHorizontal: 20},
  label: {fontSize: 16, marginBottom: 5, fontWeight: '500', color: '#000'},
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 14,
    color: '#000',
  },
  iconContainer: {
    position: 'absolute',
    right: 25,
    top: '40%',
    transform: [{translateY: -12}],
  },
  error: {fontSize: 14, color: 'red', marginBottom: 10},
  button: {
    backgroundColor: '#FF681F',
    paddingVertical: 15,
    borderRadius: 15,
    width: '100%',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  footerContainer: {alignItems: 'center', marginBottom: 30},
  footerText: {fontSize: 16, color: '#777'},
  signUpText: {color: '#FF681F', fontWeight: 'bold'},
});

export default SignUpScreen;
