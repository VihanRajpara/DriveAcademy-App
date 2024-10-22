import { ActivityIndicator, Text, View } from "react-native";
import Login from '../components/Login';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginSuccess } from '../redux/authSlice';
import Home from './home/index';
import { useRouter } from "expo-router";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        dispatch(loginSuccess({ email: 'test@user.com' ,password:'123'})); // You may want to adjust how you store/retrieve user data
        router.push('/home'); // Use the full path here
      }else{
        setLoading(false);
      }
    };
    checkLoginStatus();
  }, [dispatch,router]);


  if (loading) {
    // Show a loading indicator while checking login status
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Login />
    </View>
  );
}
