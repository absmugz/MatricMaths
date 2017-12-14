import React from 'react';
import { Image, View, StatusBar, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {StyleProvider, Container, Header, Left, Body, Right, Button, Title, Content, List, ListItem, Text,  Card, CardItem, Thumbnail, Icon, IconNB} from 'native-base';
import AppHeader from './components/appHeader';
import Quiz  from './components/quiz';


import styles from "./styles/styles";


import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls';

//import Icon from 'react-native-vector-icons/FontAwesome';


const logo = require("./img/logo.png");
const cardImage = require("./img/drawer-cover.png");
const cardImageEnglish = require("./img/bodmas-english.png");
const cardImageNdebele = require("./img/bodmas-isindebele.png");
const cardImageAfrikaans = require("./img/bodmas-afrikaans.png");
const introVideo = require("./videos/matric_maths_intro.mp4");



class HomeScreen extends React.Component {


static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
<Container style={styles.container}>
       <Header>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
      </Header>
      
        <Content>
          <List>
             <ListItem onPress={() => navigate('English')}>
              <Text>English</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
            <ListItem onPress={() => navigate('Ndebele')}>
              <Text>Ndebele</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
            <ListItem onPress={() => navigate('Afrikaans')}>
              <Text>Afrikaans</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
             <ListItem>
              <Text>Sotho : Coming Soon</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
             <ListItem>
              <Text>Tsonga : Coming Soon</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
            <ListItem>
              <Text>Tswana : Coming Soon</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
             <ListItem>
              <Text>Venda : Coming Soon</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
             <ListItem>
              <Text>Xhosa : Coming Soon</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
             <ListItem>
              <Text>Zulu : Coming Soon</Text>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          </List>
        </Content>
</Container>
</StyleProvider >
 );
  }
}

class LessonsScreen extends React.Component {

static navigationOptions = {
    header: null,
  };

  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}> 
  <Container>
  
<Header>
<Left>
<Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
</Left>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
</Header>
     
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image  source={cardImage} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent  onPress={() => navigate('Lesson')}>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent  onPress={() => navigate('Lesson')}>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
</Container>   
</StyleProvider>
    );
  }
}

class LessonDetailScreen extends React.Component {

static navigationOptions = {
    header: null,
  };


  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
<Container>
        <Header>
<Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
</Left>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
</Header>
        <Content>
        
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Bodmas</Text>
                  <Text note>Specific Language here</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <VideoPlayer source={introVideo} navigator={ this.props.navigator } style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
            
              <Right>
               <Button success onPress={() => navigate('englishQuiz')}><Text> Start quiz </Text></Button>
              </Right>
            </CardItem>
          </Card>
         
        </Content>
</Container>   
</StyleProvider>
      // in the component's render() function

    );
  }
}


class LessonsScreenNdebele extends React.Component {

static navigationOptions = {
    header: null,
  };
  
  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
  <Container>
<Header>
<Left>
<Button transparent onPress={() => navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
</Left>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
</Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Bodmas</Text>
                  <Text note>Isindebele</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image  source={cardImageNdebele} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
               <Right>
               <Button success onPress={() => navigate('Lesson')}><Text> Start lesson </Text></Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
</Container>   
 </StyleProvider>
    );
  }
}

class LessonsScreenEnglish extends React.Component {

static navigationOptions = {
    header: null,
  };
  
  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
  <Container>
      <Header>
<Left>
<Button transparent onPress={() => navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
</Left>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
</Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Bodmas</Text>
                  <Text note>In English</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image  source={cardImageEnglish} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
             <CardItem>
               <Right>
               <Button success onPress={() => navigate('Lesson')}><Text> Start lesson </Text></Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
</Container>   
 </StyleProvider>
    );
  }
}

class LessonsScreenEnglishQuiz extends React.Component {

static navigationOptions = {
    header: null,
  };

constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0
    }
  }

  _quizFinish(score){    
    this.setState({ quizFinish: true, score : score })
  }
  _scoreMessage(score){
    if(score <= 30){
      return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row"}} >
                  <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {score}%</Text>
              </View>)
    }else if(score > 30 && score < 60){
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are good</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                </View>)
    }else if(score >= 60){
      return (<View style={styles.innerContainer}>
                 <View style={{ flexDirection: "row"}} >
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are the master</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                </View>)
    }
  }


  render() {
        const { navigate } = this.props.navigation;
    return (
 
<StyleProvider style={getTheme(commonColor)}>
  <Container>
      <Header>
<Left>
<Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
</Left>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
</Header>
        <Content>
          { this.state.quizFinish ? <View style={styles.container}>
           <View style={styles.circle}>

             { this._scoreMessage(this.state.score) }
           </View>

       </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} /> }
        </Content>
</Container>   
 </StyleProvider>
    );
  }

}



class LessonsScreenAfrikaans extends React.Component {

static navigationOptions = {
    header: null,
  };

  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
  <Container>
<Header>
<Left>
<Button transparent onPress={() => navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
</Left>
                <Body>
            <Image source={require('./img/MatricMathsLogo.png')}
            style={{width: 160,height: 30}}/>
                </Body>
</Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Bodmas</Text>
                  <Text note>Afrikaans</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image  source={cardImageAfrikaans} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
               <Right>
               <Button success onPress={() => navigate('Lesson')}><Text> Start lesson </Text></Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
</Container>   
 </StyleProvider>
    );
  }
}

const MatricMathsApp = StackNavigator({
  Home: { screen: HomeScreen },
  Lessons: { screen: LessonsScreen },
  Lesson: { screen: LessonDetailScreen },
  Ndebele: { screen: LessonsScreenNdebele },
  English: { screen: LessonsScreenEnglish },
  Afrikaans: { screen: LessonsScreenAfrikaans },
  englishQuiz: { screen: LessonsScreenEnglishQuiz },
});

export default class App extends React.Component {
render() {
    return <MatricMathsApp />;
  }
}


