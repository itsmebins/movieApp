import React from 'react';
import {View, Text, StyleSheet} from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  }
});

class ViewItemDummy extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>View item</Text>
      </View>
    );
  }
}

export default ViewItemDummy;
