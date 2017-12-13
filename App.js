import React from 'react';
import { Image, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Text,  Card, CardItem, Thumbnail, IconNB} from 'native-base';
import AppHeader from './components/appHeader';

import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls';


const logo = require("./img/logo.png");
const cardImage = require("./img/drawer-cover.png");
const cardImageEnglish = require("./img/bodmas-english.png");
const cardImageNdebele = require("./img/bodmas-isindebele.png");
const cardImageAfrikaans = require("./img/bodmas-afrikaans.png");
const introVideo = require("./videos/matric_maths_intro.mp4");


class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
<Container>
        <AppHeader />
        <Content>
          <List>
             <ListItem onPress={() => navigate('English')}>
              <Text>English</Text>
            </ListItem>
            <ListItem onPress={() => navigate('Ndebele')}>
              <Text>Ndebele</Text>
            </ListItem>
            <ListItem onPress={() => navigate('Afrikaans')}>
              <Text>Afrikaans</Text>
            </ListItem>
             <ListItem>
              <Text>Sotho : Coming Soon</Text>
            </ListItem>
             <ListItem>
              <Text>Tsonga : Coming Soon</Text>
            </ListItem>
            <ListItem>
              <Text>Tswana : Coming Soon</Text>
            </ListItem>
             <ListItem>
              <Text>Venda : Coming Soon</Text>
            </ListItem>
             <ListItem>
              <Text>Xhosa : Coming Soon</Text>
            </ListItem>
             <ListItem>
              <Text>Zulu : Coming Soon</Text>
            </ListItem>
          </List>
        </Content>
</Container>
</StyleProvider >
 );
  }
}

class LessonsScreen extends React.Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}> 
  <Container>
        <AppHeader />
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
  render() {
    return (
<StyleProvider style={getTheme(commonColor)}>
<Container>
        <AppHeader />
        <Content>
          <Card>
           <VideoPlayer source={introVideo} navigator={ this.props.navigator } />
          </Card>
        </Content>
</Container>   
</StyleProvider>
      // in the component's render() function

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
});

class LessonsScreenNdebele extends React.Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
  <Container>
        <AppHeader />
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

class LessonsScreenEnglish extends React.Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
  <Container>
        <AppHeader />
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

class LessonsScreenAfrikaans extends React.Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
<StyleProvider style={getTheme(commonColor)}>
  <Container>
        <AppHeader />
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



export default class App extends React.Component {
render() {
    return <MatricMathsApp />;
  }
}


