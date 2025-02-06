import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TermsConditionScreen = ({ navigation }: any) => {
  const handlePressBack = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Image Background */}
      <ImageBackground
       source={{ uri: 'https://www.example.com/gradient-bg.jpg' }}
        style={styles.headerBackground}
      >
        <TouchableOpacity style={styles.iconContainer} onPress={handlePressBack}>
          <Icon name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
        <Text style={styles.headerDescription}>
          Please read these terms and conditions carefully before using our service.
        </Text>
      </ImageBackground>

      {/* Main Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Agreement of Terms</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corporis? Maxime deserunt laudantium...
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Terms of Services</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corporis? Maxime deserunt laudantium...
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Condition of Use</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corporis? Maxime deserunt laudantium...
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Condition of Use</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corporis? Maxime deserunt laudantium...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F4F9',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerBackground: {
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#6A11CB', 
    
  },
  iconContainer: {
    position: 'absolute',
    top: 22,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  headerDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: '#FFF',
    padding: 18,
    marginVertical: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    lineHeight: 24,
  },
});

export default TermsConditionScreen;
