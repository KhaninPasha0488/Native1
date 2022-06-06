import {StatusBar} from 'expo-status-bar';
import {FlatList, ListRenderItem, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export default function App() {
    const [valueInput, setValueInput] = useState<string>("")
    const [tasks, setTasks] = useState<TaskType[]>([
        {
            id: 1,
            title: "React",
            isDone: false,
        },
        {
            id: 2,
            title: "JS",
            isDone: false,
        },
        {
            id: 3,
            title: "CSS",
            isDone: false,
        }
    ])
    const render: ListRenderItem<TaskType> = ({item, index, separators}) => {
        return <View style={styles.itemList}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Text style={{color:"blue"}} >X</Text>
            </TouchableOpacity>
        </View>
    }
    const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            title: valueInput,
            isDone: false,
        }
        setTasks([newTask, ...tasks])
        setValueInput("")
    }
    const removeTask = (id: number) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    value={valueInput}
                    style={styles.input}
                    onChangeText={setValueInput}
                />
                <TouchableOpacity style={styles.add} onPress={addTask}>
                    <Text style={styles.title}>Add task</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={tasks}
                      renderItem={render}
                      keyExtractor={(item) => item.id + ''}
            />

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flex: 1,
        marginTop: 30,
        backgroundColor: '#ffdbdb',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: 200,
        height: 36,
        marginRight: 15,
    },
    itemList: {
        height: 46,
        marginVertical: 5,
        backgroundColor: '#ea8181',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 19,
        padding: 10,
    },
    add: {
        justifyContent: 'center',

    },
});
