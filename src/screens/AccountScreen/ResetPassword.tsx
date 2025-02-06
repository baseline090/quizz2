import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {RootStackParamList} from '../../types';
import { resetPasswordApi } from '../../redux/Slice/IndexApi';

// const ResetPasswordSchema = Yup.object().shape({
//   newpassword: Yup.string()
//     .required('Please enter your password'),
//   confirmpassword: Yup.string()
//     .oneOf([Yup.ref('newpassword')], 'Passwords must match')
//     .required('Please confirm your password'),
// });

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log('passwordVisible: ', passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
    console.log('confirmPasswordVisible: ', confirmPasswordVisible);
  };

  const handleResetPassword = async (values: {
    email: string;
    newpassword: string;
    confirmPassword: string;
  }) => {
    console.log('resetpassword response: ', values);
    setLoading(true);
    try {
      await dispatch(
        resetPasswordApi({
          newPassword: values.newpassword,
          email: values.email,
          confirmPassword: values.confirmPassword,
        }),
      ).unwrap();
      Alert.alert('Success', 'Your password has been reset successfully.');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', newpassword: '', confirmPassword: ''}}
        // validationSchema={ResetPasswordSchema}
        onSubmit={handleResetPassword}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          // console.log('Formik values:', values);
          // console.log('Formik errors:', errors);
          return (
            <View style={styles.formContainer}>
              <View style={styles.headingContainer}>
                <Text style={styles.subHeading}>
                  Your new password must be different from previously used
                  passwords.
                </Text>
              </View>

              <Text style={styles.label}>Email</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Enter your email"
                />
              </View>

              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <Text style={styles.label}>New Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('newpassword')}
                  onBlur={handleBlur('newpassword')}
                  value={values.newpassword}
                  placeholder="Enter your New Password"
                  secureTextEntry={!passwordVisible}
                />

                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              {touched.newpassword && errors.newpassword && (
                <Text style={styles.error}>{errors.newpassword}</Text>
              )}

              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Confirm your New Password"
                  secureTextEntry={!confirmPasswordVisible}
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                  <Icon
                    name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}>
                {loading ? (
                  <ActivityIndicator size="small" color="#000" />
                ) : (
                  <Text style={styles.buttonText}>Reset Password</Text>
                )}
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  headingContainer: {
    paddingVertical: 30,
  },
  subHeading: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    textAlign: 'left',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    fontSize: 16,
    color:"#000"
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF681F',
    paddingVertical: 15,
    borderRadius: 15,
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ResetPassword;
