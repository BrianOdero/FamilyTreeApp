import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import getWelcomeScreenStyles from '@/styles/welcomeScreen'; // Renamed import to avoid naming conflict
import { supabase } from '@/lib/supabase';

export default function WelcomeScreen() {
  const animationRef = useRef<LottieView>(null);

  const styles = getWelcomeScreenStyles(); // This returns the StyleSheet object

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  useEffect(() => {
   
  }, [])
  


  async function signInAnonymously(){
    const { data : {session}, error } = await supabase.auth.signInAnonymously()
    if (error) Alert.alert(error.message)
    Alert.alert('Successfully signed in as guest user')
    router.push('/(auth)/homepage')
  }

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

           <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={signInAnonymously}
          >
            <Text style={styles.secondaryButtonText}>Register As Guest User</Text>
          </TouchableOpacity>

          
        </View>
        
        <View style={styles.indicator}>
          <View style={styles.indicatorDot} />
        </View>
      </View>
    </SafeAreaView>
  );
}
