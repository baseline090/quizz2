import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HelpCenterData } from '../../data/profiledata'; // Importing new HelpCenterData
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const HelpCenterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeNoteContent}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {HelpCenterData.map((item, index) => (
          <View style={styles.notificationContainer} key={index}>
            <View style={styles.icon}>
              <Icon name={item.icon} size={40} color={'#FF681F'} />
            </View>
            <Text style={styles.notificationHeader}>{item.label}</Text>
            <Text style={styles.notificationdesc}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeNoteContent: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  notificationContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 20,
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
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  notificationdesc: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default HelpCenterScreen;
