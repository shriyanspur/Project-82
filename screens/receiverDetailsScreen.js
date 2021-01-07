import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyBartersScreen from '../screens/myBartersScreen';

export default class ReceiverDetailsScreen extends React.Component {
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

  getDetails = () => {
    db.collection('Users').where('Email_ID', '==', this.state.receiverID).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        var data = doc.data();
        this.setState({
          receiverName: data.First_Name,
          receiverContact: data.Contact,
          receiverAddress: data.Address,
        })
      })
    })
    db.collection('Requests').where('Request_ID', '==', this.state.requestID).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        this.setState({
          receiverRequestDocID: doc.id
        })
      })
    })
  }

  updateBookStatus = () => {
    db.collection('All_Donations').add({
      Book_Name: this.state.BookName,
      Request_ID: this.state.requestID,
      Request_By: this.state.receiverName,
      Donor_ID: this.state.userID,
      Request_Status: 'Donor Interested',
    })
  }

  componentDidMount = ()=> {
    this.getDetails();
  }
    
  render() {
    return (
      <View>
        <View>
          <Card title={'Book Info'} titleStyle={{fontSize: 15, alignSelf: 'center'}}>
            <Card>
              <Text>
                Name: {this.state.BookName}
              </Text>
            </Card>
            <Card>
              <Text>
                Reason: {this.state.Reason}
              </Text>
            </Card>
          </Card>
        </View>

        <View>
          <Card title={'Receiver Info'} titleStyle={{fontSize: 15, alignSelf: 'center'}}>
            <Card>
              <Text>
                Name: {this.state.receiverName}
              </Text>
            </Card>
            <Card>
              <Text>
                Contact: {this.state.receiverContact}
              </Text>
            </Card>
            <Card>
              <Text>
                Address: {this.state.receiverAddress}
              </Text>
            </Card>
          </Card>
        </View>

        <View>
          {
            this.state.receiverID != this.state.userID
            ? (
                <TouchableOpacity onPress={()=>{
                  this.updateBookStatus();
                  this.props.navigation.navigate('MyDonations')
                }}>
                  <Text>
                    I want to Donate
                  </Text>
                </TouchableOpacity>
            )
            : (
                null
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   
})