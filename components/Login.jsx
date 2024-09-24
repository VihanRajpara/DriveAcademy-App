import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/one.jpeg")}
        style={{
          width: "100%",
          height: 570,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 28,
            textAlign: "center",padding:10
          }}
        >
          Start Learning Today
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,padding:5
          }}
        >
          Practice driving in various road conditions and scenarios.Get personalized feedback and support from experienced driving instructors.
        </Text>
        <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
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
    marginTop:'20%'
  },
});
