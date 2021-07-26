import React from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = ({ enteredGoal, setEnteredGoal, addGoalHandler, visible }) => {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput value={enteredGoal} onChangeText={(e) => setEnteredGoal(e)} placeholder="Course Goal" style={styles.input} />
                <Button onPress={addGoalHandler} title="ADD" />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
    }
})

export default GoalInput
