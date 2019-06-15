
import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  PixelRatio,
  Alert,
  Platform,
  FlatList,
  TouchableHighlight,
  ScrollView
 } from 'react-native';

 import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Item,
  Input,
  Button,
  Icon,
  Left,
  Body,
  Right } from 'native-base';

import Modal from "react-native-modal";
import NumericInput from 'react-native-numeric-input';

DataValue =
  [
    {
      selected:false,
      id:'1',
      key: 'Small',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    },
    {
      selected:false,
      id:'2',
      key: 'Medium',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    },
    {
      selected:false,
      id:'3',
      key: 'Large',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    },

    {
      selected:false,
      id:'4',
      key: 'Extra Large',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    },
    {
      selected:false,
      id:'5',
      key: 'XXl',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    },
    {
      selected:false,
      id:'6',
      key: 'XXL',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    },
    {
      selected:false,
      id:'7',
      key: 'Very Large',
      color:[{color_value: 'black', quantity:0}, {color_value: 'white', quantity:0},{color_value: 'red', quantity:0}, {color_value: 'blue', quantity:0}],
    }
  ]

export default class AddItems extends React.Component {
  tagIn=[];
  state = {
    avatarSource: null,
  };

  constructor(props) {
    super(props);
    this.state=({
        name :"",
        description:"",
        brand:"",
        price:"",
        quantity: "",
        gender:"",
        catagory:"",
        selectedItems:[],
        value:'',
        newList:[],
        store:'',
        selectedColorItems:[],
        selectedCatagoryItems:[],
        isShowing:false,
        DataColor:"",
        position:0,
        discount:'0',
        isDisplay:false,
        location:"0",
        innerlocation:"0",
        finallocation:"",
    });
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignSelf:'center', alignItems:'center'}}>

        <Modal
          isVisible={this.state.isShowing}
          onBackdropPress={() => this.setState({ isShowing: false })} >
            <Card style={{height:"80%"}}>
              <View style={{justifyContent:"center"}}>
                <Text style={{alignSelf:'center', color:'#000', fontWeight:'bold', marginTop:20, marginBottom:20, borderColor:'#000', borderWidth:2, padding:5}}>
                  Select Specification
                </Text>
              </View>
              <View style={{flexDirection:'row', flex:1}}>

                <View style={{backgroundColor:'#ccc', flex:1}}>
                  <Text style={{alignSelf:'center', color:'#000', fontWeight:'bold', borderColor:'#000', borderWidth:2, padding:5}}>
                    Select Size
                  </Text>
                  <FlatList
                      extraData={this.state}
                      data={DataValue}
                      renderItem={({item,index}) =>
                      <TouchableOpacity onPress={()=>{
                        item.selected=!item.selected;
                        console.log(item.selected+"index is "+index);
                        this.setState({
                          DataColor:item.color,
                          position:index
                        })
                      }} style={{margin:7,marginTop:7, backgroundColor:item.selected ?'#ddd':'white', borderRadius:5, justifyContent:'center'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:15,padding:5}}>{item.key}</Text>
                      </TouchableOpacity>
                      }
                    />

                </View>
                <View style={{backgroundColor:'#e5dbdb', flex:1}}>
                  <Text style={{alignSelf:'center', color:'#000', fontWeight:'bold',borderColor:'#000', borderWidth:2, padding:5}}>
                    Select Color
                  </Text>

                  <FlatList
                    data={DataValue[this.state.position].color}
                    renderItem={({item}) =>
                      <TouchableOpacity onPress={()=>{
                        this.setState({
                          DataColor:item.color
                        })
                      }} style={{margin:7,marginTop:7, backgroundColor:item.color_value, borderRadius:5, justifyContent:'center'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:15,padding:5}}></Text>
                      </TouchableOpacity>
                  }
                  />
                </View>

                <View style={{backgroundColor:'#c6eae5', flex:1}}>
                  <Text style={{alignSelf:'center', color:'#000', fontWeight:'bold',borderColor:'#000', borderWidth:2, padding:5}}>
                    Select Quantity
                  </Text>
                  <FlatList
                      data={DataValue[this.state.position].color}
                      renderItem={({item}) =>
                        <View style={{margin:7, justifyContent:'center'}}>

                          <NumericInput
                            initValue={item.quantity}
                            value={item.quantity}
                            onChange={value =>{
                              item.quantity=value;
                              console.log("changed value is"+value);
                              console.log("Data stored "+item.quantity);
                              console.log('key value  is'+item.key);
                            } }
                            minValue = {0}
                            maxValue = {100}
                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                            totalWidth={110}
                            totalHeight={31}
                            iconSize={20}
                            step={1}
                            valueType='real'
                            rounded
                            textColor='#B0228C'
                            iconStyle={{ color: 'black' }}
                            rightButtonBackgroundColor='white'
                            leftButtonBackgroundColor='white'
                          />
                        </View>
                      }
                    />
                </View>

              </View>
            </Card>
        </Modal>

            <TouchableOpacity style={styles.inputContainer} onPress={() => {
              this.setState(
                  {
                    isShowing:true
                  }
                );
              }}>
              <Text style={{padding:10,color:'black'}}>Show Catagory</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    backgroundColor: '#000',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius:30,
    textAlign:'center',
  },
  avatarContainer: {
    margin:6,
    borderColor: '#F5FCFF',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 80,
    height: 80,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:10,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  halfContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:10,
    borderBottomWidth: 1,
    width:120,
    height:45,
    marginBottom:20,
    marginHorizontal:27,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    width: 100,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  Bigbox:{
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:10,
    borderBottomWidth: 1,
    width:300,
    height:175,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});
