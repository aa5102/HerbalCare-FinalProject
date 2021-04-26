import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as Font from 'expo-font';

class Login extends Component {

   componentDidMount() {
      Font.loadAsync({
          'LucidaHandwritingItalic': require('./assets/fonts/LucidaHandwritingItalic.ttf')
      });
  }

   state = {
      username: '',
      password: ''
   }

   handleUsername = (text) => {
      this.setState({ username: text })
   }

   handlePassword = (text) => {
      this.setState({ password: text })
   }

   login = (username, pass) => {
      alert('Please provide username and password')
   }

   render() {

      return (
         <View style={styles.container}>

            <Text h1 style={styles.header}>HERBALCARE</Text>
            <Text style={styles.text}>username</Text>
            <TextInput style={styles.input}
               onChangeText={this.handleUsername} />
            <Text style={styles.text}>password</Text>
            <TextInput style={styles.input}secureTextEntry={true}
               onChangeText={this.handlePassword} />

            <TouchableOpacity style={styles.submitButton}
               onPress={
                  () => this.login(this.state.email, this.state.password)}>
               <Text style={styles.submitButtonText}> LOG IN </Text>
            </TouchableOpacity>

            <TouchableOpacity>
               <Text style={styles.registerButtonText}>Don't have an account? Register here!</Text>
            </TouchableOpacity>
            
         </View>
      )
   }
}
export default Login

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
      paddingBottom: 100,
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

   submitButton: {
      backgroundColor: 'white',
      padding: 10,
      margin: 15,
      width: 120,
      height: 40,
      borderRadius: 20,
      alignSelf: 'center',
      opacity:0.9
   },

   submitButtonText: {
      color: '#9BC397',
      textAlign: 'center',
      fontWeight: 'bold'
   },

   registerButtonText:{
      color:'white',
      textAlign:'center',
      paddingTop:100,
      paddingBottom:80,
      textDecorationLine:'underline'
   },

   text: {
      color: 'white',
      textAlign: 'center',
      fontFamily:'LucidaHandwritingItalic'
   }
})