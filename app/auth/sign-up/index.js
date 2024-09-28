import { TouchableOpacity, StyleSheet, View,Image, Text, TextInput, ScrollView, SafeAreaView,Dimensions,ActivityIndicator,FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from "../../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";
const { width, height } = Dimensions.get('window');

const SignIn = () => {
  const navigation = useNavigation();
  const [imagesLoaded, setImagesLoaded] = useState(true);
  const flatListRef = useRef(null); // Reference for the FlatList
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("../../../assets/images/Academy.jpeg"),
    require("../../../assets/images/Academy2.jpeg"),
    require("../../../assets/images/Academy3.jpeg"),
    require("../../../assets/images/Academy4.jpeg"),
    require("../../../assets/images/Academy5.jpeg"),
    require("../../../assets/images/Academy6.jpeg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % images.length; 
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 2000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={item}
        style={styles.image}
      />
    </View>
  );
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>
     <View style={{ marginTop: 130, height: height * 0.28 }}>
     {imagesLoaded ? (
          <FlatList
          ref={flatListRef}
            data={images}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={() => setImagesLoaded(true)}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.BLUE} />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: width, // Full width for each image
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%', // Use full height of the container
    resizeMode: 'cover',
  },
  backButtonContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 130,
    backgroundColor: Colors.WHITE,
    zIndex: 2,
    paddingTop: 30, // Adjust padding to ensure the button is not obscured by status bar
    paddingBottom: 10, // Optional: space for visual appeal
  },
  roundButton: {
    position: "absolute",
    zIndex:2,
    top: 60, // Adjust top position as needed
    left: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.BLUE, // Your desired button color
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // For shadow effect on Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 3.5, // Shadow radius for iOS
  }
});

export default SignIn