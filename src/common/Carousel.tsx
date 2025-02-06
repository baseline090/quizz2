import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Article } from '../types';

const { width: screenWidth } = Dimensions.get('window');

const CarouselComponent: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const renderCarouselItem = ({ item }: { item: Article }) => {
    return (
      <ImageBackground
        source={item.backgroundImage}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}>
        <View style={styles.overlay} />
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={screenWidth * 0.9} 
        height={240}             
        autoPlay={true}
        data={articles}
        renderItem={renderCarouselItem}
        style={styles.carousel}
        scrollAnimationDuration={1000}
        snapEnabled={true}
        mode="parallax" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
  },
  carousel: {
    overflow: 'hidden',
    borderRadius: 12, 
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10, // Ensures all corners are rounded uniformly
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly darker overlay
    borderRadius: 10,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default CarouselComponent;
