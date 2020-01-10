import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection, Stars } from '../components/commons';
import { appMainColor } from '../const';

export default class HotelDetail extends Component {
  renderButton() {
    return (
      <Button
        raised
        borderRadius={5}
        backgroundColor={appMainColor}
        buttonStyle={{ alignSelf: 'stretch' }}
        icon={{ name: 'bed', type: 'font-awesome' }}
        title='Reservar'
      />
    );
  }

  render() {
    const { _id, name, stars, price, address } = this.props.navigation.state.params;
    const images = {
      '59bd3fa39d7c8174ca3a8f77': require('../assets/images/59bd3fa39d7c8174ca3a8f77.jpg'),
      '59bd3fa39d7c8174ca3a8f78': require('../assets/images/59bd3fa39d7c8174ca3a8f78.jpg'),
      '59bd3fa39d7c8174ca3a8f79': require('../assets/images/59bd3fa39d7c8174ca3a8f79.jpg')
    };

    return (
      <View>
        <Card>
          <CardSection style={styles.spacedStyle}>
            <Text style={styles.titleTextStyle}>{name}</Text>
            <Stars stars={stars} />
          </CardSection>
          <CardSection>
            <Image
              resizeMode="contain"
              source={images[_id]}
              style={styles.imageStyle}
            />
          </CardSection>
          <CardSection style={styles.spacedStyle}>
            <Text style={styles.addressTextStyle}>{address}</Text>
            <Text style={styles.priceTextStyle}>USD {price}</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection style={styles.buttonStyle}>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  spacedStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  titleTextStyle: {
    fontSize: 16
  },
  addressTextStyle: {
    fontSize: 14
  },
  priceTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};
