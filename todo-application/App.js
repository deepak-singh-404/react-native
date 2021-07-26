import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [isAddMode, setIsAddMode] = useState(false)
  const [goals, setGoals] = useState([])


  const addGoalHandler = () => {
    setGoals((goals) => [...goals, { id: Math.random().toString(), value: enteredGoal }])
    setEnteredGoal("")
    setIsAddMode(false)
  }

  const removeGoalHandler = (id) =>{
    setGoals((goals)=>{
      return goals.filter(goal=>goal.id !== id)
    })

  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true)} />
      <GoalInput  visible={isAddMode} addGoalHandler={addGoalHandler}
       enteredGoal={enteredGoal} setEnteredGoal={setEnteredGoal} />
      <View>
        <FlatList data={goals} renderItem={itemData => (
          <GoalItem onDelete={removeGoalHandler} id={itemData.item.id} title={itemData.item.value} />
        )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
