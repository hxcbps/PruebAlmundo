import React from 'react';
import { Text, View, ListView } from 'react-native';
import { List } from 'react-native-elements';
import { getHotels } from '../api';
import { Spinner } from '../components/commons';
import HotelItem from '../components/HotelItem';

export default class HotelList extends React.Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
  };

  componentWillMount() {
    this.getList();
  }

  getList() {
    getHotels()
      .then(response => {
        let data = response;
        if (data.errors !== undefined) {
          data = [];
        }
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) });
      })
      .catch(e => console.log(e));
  }

  renderHotels() {
    if (this.state.dataSource.getRowCount() > 0) {
      return (
        <List containerStyle={{ marginTop: 1 }}>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderItem.bind(this)}
            removeClippedSubviews={false}
          />
        </List>
      );
    }

    return (
      <Spinner size="large" />
    );
  }

  renderItem(item) {
    return (
      <HotelItem item={item} this={this} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Selecciona tu Hotel</Text>
        {this.renderHotels()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  infoTextContainer: {
    padding: 12
  },
  infoText: {
    fontSize: 16
  },
  title: {
    color: '#777',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 14
  }
};
