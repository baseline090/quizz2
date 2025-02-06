import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutUsScreen = ({ navigation }: any) => {
  const handlePressBack = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.safeArea}>
      {/*----- Header Section -----*/}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePressBack}>
          <Icon name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <Text style={styles.headerDescription}>
          Get to know us and our mission.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/*----- App Description Section -----*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            We aim to provide top-notch services that empower users to achieve their goals efficiently. 
            Our commitment to quality and customer satisfaction drives everything we do.
          </Text>
        </View>

        {/*--------- Team Section ---------*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <Text style={styles.sectionText}>
            Our team consists of passionate and skilled professionals dedicated to delivering the best user experience.
          </Text>
        </View>

        {/*--------- About Section ---------*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>
            We are a company committed to innovation and excellence. Our journey began with a vision to create solutions that improve lives and enhance productivity. 
            We believe in the power of collaboration and strive to build a community around our products.
          </Text>
        </View>

        {/*--------- Contact Section ---------*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionText}>
            We would love to hear from you! For inquiries, please reach out to us at:
          </Text>
          <Text style={styles.sectionText}>Email: info@example.com</Text>
          <Text style={styles.sectionText}>Phone: (123) 456-7890</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 20,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 25, // Make it round
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    padding: 10,
  },
  header: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.6,
    elevation: 5,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  headerDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  section: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default AboutUsScreen;
