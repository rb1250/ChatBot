/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ChatBot from 'react-native-chatbot';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import Chat from './js/chat';

const steps = [
  {
    id:'0',
    message: 'My First ChatBot',
    trigger:'1'
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
]



const AppNavigator = createStackNavigator({
  ChatBot:{screen:Chat},
 
})

export default createAppContainer(AppNavigator)