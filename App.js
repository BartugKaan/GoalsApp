import { useState } from 'react'
import { StyleSheet, View, FlatList, Button, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [completedGoals, setCompletedGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    setModalIsVisible(false)
  }

  function completeGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => {
        return goal.id !== id
      })
    })

    const goalIndex = goals.findIndex((goal) => goal.id === id)
    const goal = goals[goalIndex]
    setCompletedGoals((currentCompletedGoals) => [
      ...currentCompletedGoals,
      goal,
    ])
  }

  function deleteGoalHandler(id) {
    setCompletedGoals((currentCompletedGoals) => {
      return currentCompletedGoals.filter((goal) => {
        return goal.id !== id
      })
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#a065ec"
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <Text style={styles.goalListTitle}>Goals : {goals.length}</Text>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={completeGoalHandler}
                  id={itemData.item.id}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
        <View style={styles.completedGoalsContainer}>
          <Text style={styles.goalListTitle}>
            Completed Goals : {completedGoals.length}
          </Text>
          <FlatList
            data={completedGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 3,
  },
  completedGoalsContainer: {
    flex: 2,
  },
  goalListTitle: {
    fontSize: 24,
    paddingHorizontal: 16,
    color: '#e4d0ff',
  },
})
