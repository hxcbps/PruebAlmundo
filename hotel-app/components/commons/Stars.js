import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class Stars extends Component {
  renderStars() {
    const { stars } = this.props;
    const arrStars = new Array(stars).fill(1);

    return arrStars.map((v, i) => (
      <Icon
        name='star'
        style={{ margin: 1 }}
        key={i}
        color='#FFCC1D'
        type='font-awesome'
      />
    ));
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderStars()}
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row'
  },
};

export { Stars };
