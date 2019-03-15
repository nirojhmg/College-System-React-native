import React, { Component } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Button,
  
} from 'react-native'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  COLOR_PINK, COLOR_PINK_LIGHT, 
  COLOR_FACEBOOK, COLOR_PINK_MEDIUM, COLOR_GREEN} 
from './myColors'
import RestClient from 'react-native-rest-client'
export default class Login extends Component {
  
  static navigationOptions = {
    header: null,    
  }
  state = {
    
    defaultAnimationDialog: false,
    
  }
  
 
  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            
            <Image
         style={{width: 130, height: 130,borderRadius: 130 / 2,    }}
          source={require('./images/collegelogo.png')}
        />
            <Text style={styles.title}>
             Phonics Group Of Instution
          </Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <TouchableOpacity style={styles.RegisterButton}  onPress={() => {
              this.setState({
                defaultAnimationDialog: true,
              });
            }}>
              <Text style={styles.loginButtonTitle}>Create an account</Text>
              
            </TouchableOpacity>
          </View>
          <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
          // actionContainerStyle={{
          //   height: 100,
          //   flexDirection: 'column',
          // }}
          dialogTitle={
            <DialogTitle
              title="Are you a?"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="Student"
                bordered
                onPress={() => {
                  //this.setState({ defaultAnimationDialog: false },
                    this.props.navigation.navigate("StudentRegister"),
                    this.setState({ defaultAnimationDialog: false }); 
                }}
                key="button-1"
              />
              <DialogButton
                text="Faculty"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }
        >
          
        </Dialog>

       

        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',  
    backgroundColor: COLOR_PINK_LIGHT
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  RegisterButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_GREEN
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dialogContentView: {
    // flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    // backgroundColor: '#000',
    // opacity: 0.4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: '#000',
  },
})
