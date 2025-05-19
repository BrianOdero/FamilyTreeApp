import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import getWelcomeScreenStyles from '@/styles/welcomeScreen'; // Renamed import to avoid naming conflict

export default function WelcomeScreen() {
  const animationRef = useRef<LottieView>(null);

  const styles = getWelcomeScreenStyles(); // This returns the StyleSheet object

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hi, welcome</Text>
        
        <View style={styles.animationContainer}>
          <LottieView
            ref={animationRef}
            source={require('@/assets/animations/loginAnimation.json')}
            style={styles.animation}
            autoPlay
            loop
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.primaryButtonText}>Sign up</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.indicator}>
          <View style={styles.indicatorDot} />
        </View>
      </View>
    </SafeAreaView>
  );
}
