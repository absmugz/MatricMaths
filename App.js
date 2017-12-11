import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Matric Maths App!</Text>
        <Button
          onPress={() => navigate('Lessons')}
          title="IsiNdebele"
        />
      </View>
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
