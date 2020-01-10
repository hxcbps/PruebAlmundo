import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stars } from './commons';

export default class HotelItem extends Component {
  onListPress(detail) {
    this.props.navigation.navigate('HotelDetailScreen', detail);
  }

  render() {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={this.onListPress.bind(this.props.this, this.props.item)}
        activeOpacity={0.5}
      >
        <View style={styles.li}>
          <Text style={styles.subjectText}>
            {this.props.item.name}
          </Text>
          <Text>
            {this.props.item.address}
          </Text>
          <Stars style={{ marginTop: 5 }} stars={this.props.item.stars} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  subjectText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  }
};
