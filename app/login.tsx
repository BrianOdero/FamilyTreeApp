import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'


const login = () => {

   const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('onboardingComplete');
        } catch(e) {
            console.log(e)
        }
  console.log('Done.')
}


  return (
    <SafeAreaView>
      <Text>login</Text>
      <Button onPress={() => {removeValue()}} color="red" title="Clear All Data"/>
    </SafeAreaView>
  )
}

export default login