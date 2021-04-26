import React, { Component } from "react";
import {
  StyleSheet, Text, View, FlatList, AsyncStorage, TextInput
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Reminder extends Component {
  state = {
    list: [],
    text: ''
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addReminder = () => {
    let note = this.state.text.trim().length > 0;

    if (note) {
      this.setState(
        change => {
          let { list, text } = change;
          return {
            list: list.concat({ key: list.length, text: text }),
            text: ""
          };
        },
        () => list.save(this.state.list)
      );
    }
  };

  deleteReminder = i => {
    this.setState(
      change => {
        let list = change.list.slice();
        list.splice(i, 1);
        return { list: list };
      },
      () => list.save(this.state.list)
    );
  };

  componentDidMount() {
    list.all(list => this.setState({ list: list || [] }));
  }

  render() {
    return (
      <View style={styles.containerReminder}>
        <FlatList
          style={styles.list}
          data={this.state.list}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <TouchableOpacity style={styles.reminderButton}
                  onPress={() => this.deleteReminder(index)}>
                  <Text style={styles.deleteReminderText}> delete </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.breakLine}>{"\n"}</Text>
            </View>}
        />
        <TextInput style={styles.textInput} onChangeText={this.changeTextHandler} onSubmitEditing={this.addReminder} value={this.state.text} placeholder="Write your remnider here..." />
      </View>
    );
  }
}

let list = {
  convertToArrayOfObject(list, callback) {
    return callback(
      list ? list.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(list) {
    return list.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("list", (err, list) =>
      this.convertToArrayOfObject(list, callback)
    );
  },
  save(list) {
    AsyncStorage.setItem("list", this.convertToStringWithSeparators(list));
  }
};

const styles = StyleSheet.create({
  containerReminder: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: 50
  },
  list: {
    width: "95%",
    alignSelf: 'center'
  },
  listItem: {
    fontSize: 15,
    alignSelf:'center'
  },
  listItemCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom:25,
    paddingTop:25,
    backgroundColor:'#F5F5F5',
    borderRadius:10
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    height:50,
    width: 300,
    backgroundColor: '#F5F5F5',
    marginBottom: 50,
    borderRadius: 10,
    alignSelf:'center'
  },
  reminderButton: {
    backgroundColor: '#9BC397',
    fontSize: 10,
    padding:8,
    borderRadius:10,
    width:75,
  },
  deleteReminderText:{
    color:'white',
    textAlign:'center'
  },
  breakLine:{
    fontSize:5
  }
});
