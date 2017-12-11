import React from 'react';
import { StyleSheet, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Text } from 'native-base';



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
  static navigationOptions = {
    title: 'Lessons Screen',
  };
  render() {
    return (
      <View>
        <Text>Lessons will be displayed here</Text>
      </View>
    );
  }
}

class LessonDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Lesson Detail Screen',
  };
  render() {
    return (
      <View>
        <Text>Lesson detail will be displayed here</Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
