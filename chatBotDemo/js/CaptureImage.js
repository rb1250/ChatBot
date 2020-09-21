
import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class CaptureImage extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      // picSource: "https://www.gstatic.com/webp/gallery/1.jpg",
      picSource:null,
      isHere:false
    }
  }

  componentDidMount() {

    if (this.state.isHere == false){

      setTimeout(() => {
        this._takePic();
      }, 2000);
    }
  }

  // _takePic = () => {
  //   ImagePicker.launchCamera({}, (response) => {
  //     this.setState({
  //       picSource: response.uri,
  //       fileInfo: response,
  //       imgUrl: response.uri,
  //       imageUpload: true
  //     },() => {
  //      // Upload image code
  //     }))
  //   });
  // }

  
_takePic = () => {
  
  this.setState({isHere : true},
    ()=>{

      ImagePicker.showImagePicker({},(response) =>{

        console.log("IMAGE PICKER RESPONSE ==> "+response);
    
        if(response.didCancel)
        {
          alert('User cancelled image picker');
        } else if(response.error)
        {
          alert(response.error);
        }
        else
        {
          // const source = { uri: response.uri };
          this.setState({
          
          picSource: response.uri,
            fileInfo: response,
            imgUrl: response.uri,
            imageUpload: true
          }, () => {
            // Upload image code
          })
        }
    
    })

    })


  // ImagePicker.launchImageLibrary({}, (response) => {
    
  //   this.setState({
  //     picSource: response.uri,
  //     fileInfo: response,
  //     imgUrl: response.uri,
  //     imageUpload: true
  // },()=>{
  //   // Upload image code
  // })
  // })
  // ImagePicker.launchCamera({}, (response) => {
  //   this.setState({
  //       picSource: response.uri,
  //       fileInfo: response,
  //       imgUrl: response.uri,
  //       imageUpload: true
  //   },()=>{
  //     // Upload image code
  //   })
  // })
}

  render() {
    if (this.state.picSource)
    return (
      <View style={{ margin: 28, padding: 3, marginTop: 3, borderWidth: 1, borderColor: '#D8D8D8' }}>
        <Image
          source={{ uri: this.state.picSource }}
          style={{
            alignSelf: 'center',
            width: '100%',
            height: 280,
          }}
        />
      </View>)
    else
    return(<View/>)
  }
}