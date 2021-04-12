
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Dimensions,
  CheckBox,
  FlatList,
  SectionList,
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      coronaArray:[],
    }
}

  componentDidMount() {
    return fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then((response) => response.json())
    .then((json) => {
      console.log('coronavirus-tracker-api locations is = ',json.locations);
      this.setState({coronaArray:json.locations});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  rowSelected(item){
  }

  render(){
  //  console.log('this.state.bookArray = ',this.state.bookArray);
   return(
     <View style={styles.outerContainer}>
       <View>
                <Text style = {{color:'black',
                marginTop:0,
                marginBottom:5,
                textAlign:'left',
                fontSize:25,
                backgroundColor: 'green',
                
                textAlign: 'center'}}
                >Covid-19 Cases Summary</Text>
                </View>
     <FlatList
            style={{flex:1,marginBottom:0, backgroundColor:'white'}}
            data={this.state.coronaArray}
            numColumns={1}
            renderItem={
            ({item}) =>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.rowSelected(item)}>
              
              
              
              
              <View style={{flex:0.6,marginBottom:0}} >
              <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
              style = {styles.actionImage}
   />
              <Text style={styles.heading}>{item.country}
              </Text>
              <Text style={styles.textStyle}>Total Confirmed Cases: {item.latest.confirmed}</Text>
              <Text style={styles.deaths}>Total Deaths: {item.latest.deaths}</Text>
              <Text style={styles.recovered}>Total Recovered: {item.latest.recovered}</Text>
              <Text style={styles.textStyle}>Updated_Since: {item.last_updated}</Text>



              
              </View>
              

            </TouchableOpacity>
          }
     />
    </View>
    );
  }
}

const styles=StyleSheet.create({
  outerContainer:{
    flex:1,
    backgroundColor:'white',
  },
  textStyle:{
    color:'blue',
    marginTop:0,
    marginBottom:5,
    textAlign:'left',
    fontSize:20,
    flex: 0.3,
    backgroundColor:'#D3C5C2'
   
  },
  deaths:{
    color:'red',
    marginTop:0,
    marginBottom:5,
    textAlign:'left',
    fontSize:20,
    flex: 0.3,
    backgroundColor:'#D3C5C2'
   
  },
  recovered:{
    color:'green',
    marginTop:0,
    marginBottom:5,
    textAlign:'left',
    fontSize:20,
    flex: 0.3,
    backgroundColor:'#D3C5C2'
   
  },
  heading:{
    color:'black',
    marginTop:0,
    marginBottom:5,
    textAlign:'left',
    fontSize:25,
    paddingRight:6,
    paddingLeft:6,
    paddingBottom:3,
    paddingTop:3,
    flex: 0.3,
    backgroundColor:'#D3C5C2'

  },
  last:{
    color:'black',
    marginTop:0,
    marginBottom:5,
    textAlign:'left',
    fontSize:20,
    paddingRight:6,
    paddingLeft:6,
    paddingBottom:3,
    paddingTop:3,
    flex: 0.3,
    backgroundColor:'#D3C5C2'

  },
  actionImage:{
    flex:0,
    height:40,
    width:40,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    alignSelf:'center',
    flexDirection:'column',
    textAlignVertical:'center'
    
  },

})

module.exports=App;
