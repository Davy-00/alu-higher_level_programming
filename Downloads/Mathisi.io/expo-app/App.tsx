import React from 'react';
import { Text, View } from 'react-native';
import { Stack } from 'expo-router';

const App = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
};

export default App;
