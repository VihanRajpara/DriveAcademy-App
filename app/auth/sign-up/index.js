import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { api_url } from '../../../data';
export default function SignUp() {
  const [data, setData] = useState(null); // State to hold API data
  const [loading, setLoading] = useState(true); // State to show loading spinner
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to call the API
    const fetchData = async () => {
      try {
        const response = await axios.get(api_url); // Replace with your actual backend URL
        setData(response.data.message); // Store the response data
      } catch (err) {
        console.log(err);
        
        // setError(err.message); // Catch and store any error
      } finally {
        setLoading(false); // Stop loading once the API call is complete
      }
    };

    fetchData(); // Call the function when the component mounts
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading spinner while fetching data
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text> 
      </View>
    );
  }

  return (
    <View>
      <Text>SignUp</Text>
      {data && (
        <Text>{data}</Text> 
      )}
    </View>
  );
}
