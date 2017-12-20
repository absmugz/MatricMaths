import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './animbutton';
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option1",
      "options" : {
        "option1" : "7",
        "option2" : "103",
        "option3" : "99",
        "option4" : "35"
      },
      "question" : "Evaluate 1 + 3 x 2"
    },
    "question2" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "3950",
          "option2" : "411",
          "option3" : "412",
          "option4" : "6"
        },
      "question" : "Evaluate 2 + (3 - 1) x 2"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "-4",
          "option2" : "-225",
          "option3" : "40",
          "option4" : "335"
        },
      "question" : "Evaluate 4 - 3 + 5(2/2)"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "24",
          "option2" : "224",
          "option3" : "234",
          "option4" : "25"
        },
      "question" : "Evaluate ((1+4-42/14+65)+((70/35+7*9)/13))*((65+7-19)+(19-39*5))/369"
    },
    "question5" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "245",
          "option2" : "-225",
          "option3" : "-235",
          "option4" : "254"
        },
      "question" : "Evaluate 7+5-2 x (7+89)-94/2 + (33/3+9 x 2-7)/11"
    }
  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0

    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }

  }
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++

      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/5)
     }
  }
  _answer(status,ans){

    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }

  }
  render() {

    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>

        <Animbutton countCheck={_this.state.countCheck} onColor={"green"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />

      </View>)
    });

    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>

      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>

      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
      {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} />*/}

        <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"green"}}>
            <Icon name="md-arrow-round-forward" size={30} color="white" />
          </View>
        </TouchableOpacity >

        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});