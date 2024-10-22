import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions,FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const router = useRouter();
   
  const [imagesLoaded, setImagesLoaded] = useState(true);
  const images = [
    require("../assets/images/three.jpeg"), 
    require("../assets/images/two.png"),
    require("../assets/images/four.jpeg"), 
    require("../assets/images/five.jpeg"), 
  ];

  const flatListRef = useRef(null); // Reference for the FlatList
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % images.length; 
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={item}
        style={styles.image}
      />
    </View>
  );
  
  return (
    <View>
      {/* {isLoggedIn && router.push('/home')} */}
      <View
        style={{
          width: "100%",
          height: height * 0.65, // Adjust height relative to screen size
        }}
      >
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
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 28,
            textAlign: "center",
            padding: 10,
          }}
        >
          Start Learning Today
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            padding: 5,
          }}
        >
          Practice driving in various road conditions and scenarios.Get personalized feedback and support from experienced driving instructors.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("auth/sign-in")}>
          <Text
            style={{
              fontFamily: "outfit",
              textAlign: "center",
              fontSize: 17,
              color: Colors.WHITE,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -30,
    height: "100%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    // paddingTop:40,
    padding: 25,
  },
  button: {
    backgroundColor: Colors.BLUE,
    borderRadius: 15,
    padding: 15,
    marginTop: "20%",
  },
});
