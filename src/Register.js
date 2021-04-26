import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import * as Font from 'expo-font';

class Register extends Component {

   componentDidMount() {
      Font.loadAsync({
          'LucidaHandwritingItalic': require('.//assets/fonts/LucidaHandwritingItalic.ttf')
      });
  }

   state = {
      email: '',
      username: '',
      password: ''
   }

   handleEmail = (text) => {
      this.setState({ email: text })
   }

   handleUsername = (text) => {
      this.setState({ username: text })
   }

   handlePassword = (text) => {
      this.setState({ password: text })
   }

   register = (email, username, pass) => {
      alert('email: ' + email + 'username: ' + username + ' password: ' + pass)
   }

   render() {

      return (
         <View style={styles.container}>

            <Text h1 style={styles.header}>HERBALCARE</Text>
            <Text style={styles.text}>email</Text>
            <TextInput style={styles.input}keyboardType={'email-address'}
               onChangeText={this.handleEmail} />
            <Text style={styles.text}>username</Text>
            <TextInput style={styles.input}
               onChangeText={this.handleUsername} />
            <Text style={styles.text}>password</Text>
            <TextInput style={styles.input}secureTextEntry={true}
               onChangeText={this.handlePassword} />

            <TouchableOpacity style={styles.registerButton}
               onPress={
                  () => this.register(this.state.email, this.state.password)}>
               <Text style={styles.registerButtonText}> REGISTER </Text>
            </TouchableOpacity>
            <Image
        source={require('.//assets/img/exit.png')} 
        style={styles.image}
    />
         </View>
      )
   }
}
export default Register

const styles = StyleSheet.create({

   container: {
      paddingTop: 50,
      backgroundColor: "#9BC397",
      color: 'white'
   },

   header: {
      color: 'white',
      textAlign: 'center',
      paddingTop: 100,
      paddingBottom: 70,
      fontSize: 30,
      fontFamily:'LucidaHandwritingItalic'
   },

   input: {
      margin: 15,
      height: 40,
      width: 200,
      backgroundColor: 'white',
      opacity: 0.5,
      borderRadius: 20,
      color: 'black',
      textAlign: 'center',
      alignSelf: 'center'
   },

   registerButton: {
      backgroundColor: 'white',
      padding: 10,
      marginTop: 20,
      marginBottom:200,
      width: 120,
      height: 40,
      borderRadius: 20,
      alignSelf: 'center',
      opacity:0.9
   },

   registerButtonText: {
      color: '#9BC397',
      textAlign: 'center',
      fontWeight: 'bold'
   },

   text: {
      color: 'white',
      textAlign: 'center',
      fontFamily:'LucidaHandwritingItalic'
   },
   image: {
      height: 30,
      width: 30,
      top: 50,
      right: 20,
      position: 'absolute',
   }
})