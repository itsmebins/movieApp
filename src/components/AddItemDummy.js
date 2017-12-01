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

class AddItemDummy extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Add item</Text>
      </View>
    );
  }
}

export default AddItemDummy;
