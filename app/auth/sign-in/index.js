import { TouchableOpacity, StyleSheet, View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../../../constants/Colors";
import { useRouter } from "expo-router";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>Let's Sign You In</Text>
          <Text style={{ fontFamily: "outfit", fontSize: 25, color: Colors.BLUE, marginTop: 20 }}>Welcome Back</Text>
          <Text style={{ fontFamily: "outfit", fontSize: 25, color: Colors.BLUE, marginBottom: 10 }}>You've been missed!</Text>

          <View style={styles.inputContainer}>
            <Text style={{ fontFamily: "outfit", fontSize: 18 }}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="hello@company.com"
              onFocus={(e) => e.target.setNativeProps({ style: { borderColor: Colors.BLUE } })}
              onBlur={(e) => e.target.setNativeProps({ style: { borderColor: Colors.GRAY} })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={{ fontFamily: "outfit", fontSize: 18 }}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Your Password"
              onFocus={(e) => e.target.setNativeProps({ style: { borderColor: Colors.BLUE} })}
              onBlur={(e) => e.target.setNativeProps({ style: { borderColor: Colors.GRAY} })}
            />
          </View>

          <View style={styles.forgotPasswordContainer}>
            <Text style={{ fontFamily: "outfit", fontSize: 18, color: Colors.BLUE }}>Forgot Password?</Text>
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTextSignin}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push("auth/sign-up");
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonTextCreate}>Register Academy Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: Colors.PRIMARY,
    marginTop: 7,
    padding: 10,
    paddingLeft: 17,
    borderWidth: 1,
    width: "100%",
    borderRadius: 15,
    borderColor: Colors.GRAY,
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  forgotPasswordContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "flex-start",
  },
  content: {
    padding: 30,
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "flex-start", // Align items to the left
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
  },
  scrollContent: {
    paddingTop: 150,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  buttonTextSignin: {
    padding: 10,
    backgroundColor: Colors.BLUE, // Use your color
    color: Colors.WHITE,
    textAlign: "center",
    width: "100%",
    borderRadius: 15,
    fontFamily: "outfit",
    fontSize: 18,
  },
  buttonTextCreate: {
    padding: 10,
    textAlign: "center",
    borderWidth: 1,
    width: "100%",
    borderRadius: 15,
    fontFamily: "outfit",
    fontSize: 18,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.GRAY, // Use your color
  },
  orText: {
    marginHorizontal: 10,
    fontFamily: "outfit",
    fontSize: 17,
    color: Colors.GRAY,
  },
});
