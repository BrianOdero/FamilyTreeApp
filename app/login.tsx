import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import loginStyle from '@/styles/login';
import LottieView from 'lottie-react-native';
import { supabase } from '@/lib/supabase';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const [loading,setLoading] = useState(false)

  const styles = loginStyle();

  async function signInWithEmail(){

    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (error) Alert.alert(error.message)
    router.push('/(auth)/homepage')
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <LottieView 
            source={require('@/assets/animations/loginAnimation.json')}
            style={styles.lottieAnimation}
            autoPlay 
        />
            
        <Text style={styles.title}>login</Text>
        
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
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.primaryButton} onPress={signInWithEmail}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>
          
          
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Link href="/signup">
              <Text style={styles.footerLink}>Sign up</Text>
            </Link>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}