import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const Onboarding = () => 
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    onboardingView: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    stepIndicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    stepIndicator: {
      width: 15,
      height: 5,
      borderRadius: 5,
      backgroundColor: 'gray',
      marginHorizontal: 5,
      marginVertical: 10
    },
    lottieAnimation: {
      width: Dimensions.get("window").width,
      height: 300, // Reduced height for better vertical centering
      marginBottom: 20,
    },
    onboardingTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
    },
    onboardingDescription: {
      fontSize: 16,
      textAlign: 'center',
      marginHorizontal: 20,
      marginBottom: 40,
      color: '#666',
    },
    buttonView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      gap: 10,
    },
    button: {
      flex: 1,
      backgroundColor: "black",
      padding: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16,
    }
  });
 


export default Onboarding