// app/home.js
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth); // Access user data from Redux
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/');
    }
  }, [isLoggedIn, router]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/'); // Redirect to login after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
      {user && (
        <>
          <Text style={styles.welcomeText}>
            Logged in as: {user.userCode} & {user.password}
          </Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: "gray",
  },
});

export default Home;
