import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Spinner } from '../components/commons';
import { appMainColor } from '../const';

const SCREEN_WIDTH = Dimensions.get('window').width - 30;

export default class App extends React.Component {
  state = { loading: false };

  onButtonPress() {
    this.props.navigation.navigate('HotelListScreen');
  }

  renderLoginButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        raised
        borderRadius={5}
        backgroundColor={appMainColor}
        buttonStyle={{ alignSelf: 'stretch' }}
        icon={{ name: 'sign-in', type: 'font-awesome' }}
        title='Ingresar'
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/logo-letras.png')}
          style={styles.mainLogo}
        />
        <Text
          style={styles.welcomeText}
        >
          Bienvenido, con nuestra app podrá consultar todos nuestros hoteles a nivel mundial
        </Text>
        {this.renderLoginButton()}
      </View>
    );
  }
}

const styles = {
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  mainLogo: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    margin: 10
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 20
  }
};
