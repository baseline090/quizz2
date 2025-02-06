import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { technologyCardData } from '../data/cardsection'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'

const TechnologyCardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.cardContainer}>
        {technologyCardData.map((card, index) => (
           <TouchableOpacity key={index} style={styles.card}   onPress={() => navigation.navigate('QuizOverview')} >
            <Image source={card.image} style={styles.categoryImage} />
            <View style={styles.cardDescription}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.description}>{card.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
  },
  scrollNoteContainer: {
    backgroundColor: '#f9f9f9', 
  },
  scrollContent: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'column',
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
    marginRight: 15,
  },
  cardDescription: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  detailsContainer: {
    width: '100%',
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
  },
  
});

export default TechnologyCardScreen