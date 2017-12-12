import React from 'react';
import { Image, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Text,  Card, CardItem, Thumbnail, IconNB} from 'native-base';

// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls';


const logo = require("./img/logo.png");
const cardImage = require("./img/drawer-cover.png");
const video = require("./video/oceans.mp4");





class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      
       <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Matric Maths</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        
         <Content>
          <List>
            <ListItem onPress={() => navigate('Lessons')}>
              <Text>English</Text>
            </ListItem>
            <ListItem onPress={() => navigate('Lessons')}>
              <Text>Ndebele</Text>
            </ListItem>
            <ListItem onPress={() => navigate('Lessons')}>
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
   
    );
  }
}

class LessonsScreen extends React.Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: "./img/logo.png"}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "./img/drawer-cover.png" }} style={{height: 200, width: null, flex: 1}}/>
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
    );
  }
}

class LessonDetailScreen extends React.Component {
  render() {
    return (
      // in the component's render() function
<VideoPlayer
    source={{ uri: './video/oceans.mp4' }}
    navigator={ this.props.navigator }
/>
    );
  }
}

const MatricMathsApp = StackNavigator({
  Home: { screen: HomeScreen },
  Lessons: { screen: LessonsScreen },
  Lesson: { screen: LessonDetailScreen },
});



export default class App extends React.Component {
render() {
    return <MatricMathsApp />;
  }
}


