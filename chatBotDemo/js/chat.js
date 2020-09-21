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
  Image
} from 'react-native';
import ChatBot from 'react-native-chatbot'; 
import CaptureImage from '../js/CaptureImage';

//steps are to instruct what message chat bot will fire and when to take input from user
const steps = [
  {
    id:'0',
    message:'Hello! How may I help you?',
    trigger:'1'
  },
  {
    id:'1',
    user:true,
    trigger:'2'
  },
  // {
  //   id:'2',
  //   message:'Please send the pic of your order',
  //   // trigger:'image-upload'
  //   trigger:'3'
  // },
  // {
  //   id: "image-upload",
  //   component: <CaptureImage nextTrigger ="show-message" />, 
  //   metadata: { dataType: "image-url" },
  //   trigger:'3'
  // },
  {
    id:'2',
    message:'Sorry for the inconvenience.You will get your payment back shortly',
    trigger:'4'
  },
  {
    id:'4',
    message:'Was your issue resolved?',
    trigger:'5'
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'YES', trigger: '6' },
      { value: 2, label: 'NO', trigger: '8' },
    ], 
   },
   {
    id:'6',
    message:'Please rate us.',
    trigger:'9'
   },
   {
    id:'8',
    message:'You will receive call from our customer support, shortly.',
    trigger:'9'
   },
   {
     id:'9',
     message:'Thank you!!',
     end:true
   }

]

const steps1 = [
  {
    id:'0',
    message: 'Hello there. How may I help you?',
    trigger:'image-upload'
  },
  {
    id: "image-upload",
    component: <CaptureImage nextTrigger ="show-message" />,
    metadata: { dataType: "image-url" },
    trigger:'2'
  },     
  {
    id: '2',
    user: true,
    trigger:'3'
  
  },
  {
    id: "3",
    message:'Please select below options',
    trigger:'4'
  },  

  {
    id: '4',
    options: [
      { value: 1, label: 'Number 1', trigger: '3' },
      { value: 2, label: 'Number 2', trigger: '2' },
      { value: 3, label: 'Number 3', trigger: '5' },
    ], 
   },
  {
    id: '5',
    message: 'Bye!',
    inputAttributes: {},
    end: true,
  },
]



export default class Chat extends Component {
  render(){
    return(
      <SafeAreaView>
        <ChatBot
        steps={steps}/>
      </SafeAreaView>
    )
  }
}






