import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal  } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import colors from './Colors'
import tempData from './tempData'
import TodoList from './components/TodoList'
import AddListModal from './components/AddListModal'

export default class App extends React.Component {

  state = {
    addTodoVisible: false
  }

  toggleAddTodoModal(){
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }

  render(){
    return (
      <View style={styles.container}>

        <Modal 
          animationType="slide" 
          visible={this.state.addTodoVisible} 
          onRequestClose={()=> this.toggleAddTodoModal()}
          >
          <AddListModal/>
        </Modal>

        <View style={{flexDirection: "row"}}>
          <View style={styles.divider}/>
          <Text style={styles.title}>Todo
            <Text style={{fontWeight: "300", color: "#2AFF00"}}>List</Text>
          </Text>
          <View style={styles.divider}/>
        </View>

        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList} onPress={()=> this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.green}/>
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>

        <View style={{height: 300, paddingLeft:20}}>
          <FlatList 
            data={tempData}
            keyExtractor={item=>item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <TodoList list={item}/>}
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lime,
    height: 2,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontWeight: "800",
    fontSize: 38,
    color: colors.black,
    paddingHorizontal: 60
  },
  addList:{
    borderWidth: 2,
    borderColor: colors.lime,
    borderRadius: 4,
    padding:16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.green,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  },
});
