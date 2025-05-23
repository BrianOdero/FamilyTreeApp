import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image, Alert, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import signupStyle from '@/styles/signup';
import LottieView from 'lottie-react-native';
import { supabase } from '@/lib/supabase';

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false)
  const router = useRouter()

  const styles = signupStyle()

    async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) Alert.alert(error.message)
    
    setLoading(false)
  }

  if (loading) return <ActivityIndicator size={'large'}/>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <LottieView 
            source={require('@/assets/animations/signupAnimation.json')}
            style={styles.lottieAnimation}
            autoPlay 
                />

        <Text style={styles.title}>Create an account</Text>
        
        <View style={styles.form}>
         
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="email@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="••••••••••"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#9ca3af" 
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity style={styles.primaryButton} onPress={signUpWithEmail}>
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>
          
        
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Link href="/login">
              <Text style={styles.footerLink}>Login</Text>
            </Link>
          </View>
        </View>
        
        
      </View>
    </SafeAreaView>
  );
}