import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, FlatList} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class MyBartersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: firebase.auth().currentUser.email,
      receiverID: this.props.navigation.getParam('details')['User_ID'],
      requestID: this.props.navigation.getParam('details')['Request_ID'],
      BookName: this.props.navigation.getParam('details')['Book_Name'],
      Reason: this.props.navigation.getParam('details')['Reason'],
      receiverName: '',
      receiverContact: '',
      receiverAddress: '',
      receiverRequestDocID: '',
    }
  }
  
  render() {
    return (
        <View>
          My Barters
        </View>
    )
  }
}