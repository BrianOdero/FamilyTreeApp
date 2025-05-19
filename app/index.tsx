import {  Dimensions, Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';
import Onboarding from "@/styles/onboarding";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated'

const onboardingData = [
  {
    icon: '@/assets/animations/welcomeAnimation.json',
    title: 'Welcome to FamilyTree',
    description: 'Explore your family history and build your family tree with ease.',
  },
  {
    icon: '@/assets/animations/welcomeAnimation.json',
    title: 'Connect with Family',
    description: 'Invite relatives to collaborate and grow your family tree together.',
  },
  {
    icon: '@/assets/animations/welcomeAnimation.json',
    title: 'Preserve Memories',
    description: 'Add stories, photos, and important milestones to preserve your legacy.',
  },
];

export default function OnboardingPage() {

  const styles = Onboarding()

  const [screenIndex, setScreenIndex] = useState(0)// for holding screen indexes

  const data = onboardingData[screenIndex]

  const router = useRouter()

  const onboardingDone = async () => {
  try {
    await AsyncStorage.setItem('onboardingComplete', 'Done');
  } catch (e) {
    console.log('error occurred while saving key, ', e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('onboardingComplete');
    if (value !== null) {
      router.replace('/welcomeScreen')
    }
  } catch (e) {
    console.log('error occurred while fetching key, ', e);
  }
};

useEffect(() => {
  getData()
}, [])


  const onContinue = () => {
    if (screenIndex < onboardingData.length - 1) {
      setScreenIndex(screenIndex + 1)
    }else if(screenIndex === onboardingData.length - 1){
      router.push('/welcomeScreen')
    }
  }

  const onPrevious = () => {
    if (screenIndex > 0) {
      setScreenIndex(screenIndex - 1)
    }
  }

  const onSkip = () => {
    onboardingDone()
    router.push('/welcomeScreen')
    
  }

  


  return (
    <SafeAreaView style = {styles.container}>

       <StatusBar barStyle={"dark-content"}/>

      <Animated.View style={styles.onboardingView} entering={FadeInLeft} exiting={FadeOutRight}>

          <LottieView 
          key={screenIndex}
          source={require('@/assets/animations/welcomeAnimation.json')}
          autoPlay
          loop
          style={styles.lottieAnimation}
        />
        
        <Text style={styles.onboardingTitle}>
          {data.title}
        </Text>

        <Text style={styles.onboardingDescription}>
          {data.description}
        </Text>

        <View style={styles.stepIndicatorContainer}>
            {/**Looping over onboarding data to show based on number of items */}
            {onboardingData.map((step,index) => (
              <View key={index} style={[styles.stepIndicator,{backgroundColor: index === screenIndex ? 'lightblue' : 'gray'}]}/>
            ))}
        </View>

        <View style={styles.buttonView}>
          <Pressable style={[styles.button,{backgroundColor: "transparent"}]} onPress={screenIndex > 0 ? onPrevious : onSkip}>
            <View>
              <Text style={[styles.buttonText,{color: 'black'}]}>
                {screenIndex > 0 ? 'Previous' : 'Skip'}
              </Text>
            </View>
          </Pressable>

          <Pressable style={styles.button} onPress={onContinue}>
            <View>
              <Text style={styles.buttonText}>
                {screenIndex === onboardingData.length - 1 ? "Get Started" : "Continue"}</Text>
            </View>
          </Pressable>
        </View>

      </Animated.View>
    </SafeAreaView>
  );
}
