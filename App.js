 import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
   

  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text:enteredGoalText, id: Math.random().toString()}, ])
  }

  return (
    <View style={styles.appcontainer}>
      <View style = {styles.flexcontainer}>
        <TextInput style={styles.textinput} placeholder='your aim' 
        onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) =>{
          return(
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
      />
        
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  
  
  appcontainer: {
    flex:1,
    padding: 50,
    color: '#cccccc'

  },
  flexcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
    
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    

    
  },
  goalsContainer: {
    flex: 5,
    color: '#cccccc',
  },
  goalItem: {
    marign: 8,
    borderRadius: 6,
    backgroundColor: 'black',
    padding: 18,
    marginBottom: 10
    
  }, 
  goalText: {
    color: '#00ffff'
  }
});