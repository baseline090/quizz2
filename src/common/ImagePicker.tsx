import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, Alert } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

interface ImagePickerResponse {
  path: string;
  uri: string;
  type: string;
  mime: string;
  size: number;
}

const ImagePickerComponent = ({ onImageSelected }: any) => {
  const [images, setImages] = useState<ImagePickerResponse[]>([]);

  const maxSizeMB = 2;
  const maxSizeKB = maxSizeMB * 1024;

  const compressImage = async (image: any) => {
    try {
      const compressedImage = await ImageCropPicker.openCropper({
        path: image.path,
        width: 800, 
        height: 600, 
        compressImageQuality: 0.6,
        mediaType: 'photo',
        cropping: false, 
      });
      return compressedImage;
    } catch (error) {
      console.log('Error compressing image: ', error);
      return null;
    }
  };

  const openImagePicker = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      cropping: false,
    })
      .then(async (response: any) => {
        const validImages: ImagePickerResponse[] = [];

        for (let image of response) {
          let imageSizeKB = image.size / 1024;
          if (imageSizeKB > maxSizeKB) {
            const compressedImage = await compressImage(image);
            if (compressedImage) {
              image = compressedImage;
              imageSizeKB = image.size / 1024;
            } else {
              Alert.alert(
                'Image too large',
                `The image ${image.path.split('/').pop()} is too large and could not be compressed.`,
                [{ text: 'OK' }]
              );
              continue;
            }
          }

          if (imageSizeKB <= maxSizeKB) {
            validImages.push({
              path: image.path,
              uri: image.path,
              type: image.mime,
              mime: image.mime,
              size: image.size,
            });
          } else {
            Alert.alert(
              'Image too large',
              `The image ${image.path.split('/').pop()} exceeds the ${maxSizeMB} MB limit.`,
              [{ text: 'OK' }]
            );
          }
        }

        setImages(validImages);
        onImageSelected(validImages);
      })
      .catch(error => {
        console.log("Error picking images: ", error);
      });
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImageSelected(newImages);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={openImagePicker}
        >
          <Text style={styles.buttonText}>Click here to upload images</Text>
          <Image
            source={{ uri: 'https://img.icons8.com/offices/40/000000/attach.png' }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <View style={styles.imageList}>
          {images.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: image.uri }} style={styles.image} />
              <TouchableOpacity style={styles.cancelButton} onPress={() => removeImage(index)}>
                <Text style={styles.cancelButtonText}>&times;</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
    alignItems: 'center',
  },


  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  cancelButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#DDDDDD',
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  cancelButtonText: {
    color: 'red',
    fontSize: 20,
    fontWeight: "700",
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f0f8ff',
    padding: 8,
    marginTop:8
  },
  buttonText: {
    marginRight: 10,
    fontSize: 19,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});

export default ImagePickerComponent;