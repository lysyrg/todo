import React, {useEffect, useState} from "react";
import {fetchTodos, updateTodo, deleteTodo, createTodo} from "../service";
import {List, Text, ThemeIcon, Center, Group, ActionIcon, Divider, Button} from "@mantine/core";
import {IconCircleCheck, IconCircleDashed, IconEdit, IconTrash , IconCheck, IconBan} from "@tabler/icons";
import TodoForm from "./TodoForm";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [thisTodo, setThisTodo] = useState(null);

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = React.useCallback(() => {
        fetchTodos(data => {
            setTodos(data);
        })
    }, [])

    const completeTodo = (todo) => {
        updateTodo({
            ...todo,
            isCompleted: true
        }).then(() => {
            getTodos();
        })
    }

    const incompleteTodo = (todo) => {
        updateTodo({
            ...todo,
            isCompleted: false
        }).then(() => {
            getTodos();
        })
    }

    const eraseTodo = (id) => {
        deleteTodo(id).then(() => {
            getTodos();
        })
    }

    const handleClickTodo = (todo) => {
        setThisTodo(todo);
    }

    const saveTodo = (todo) => {
        if(todo.id) {
            updateTodo(todo).then(() => {
                getTodos();
                setThisTodo(null);
            });
        } else {
            createTodo(todo).then(() => {
                getTodos();
                setThisTodo(null);
            });
        }
    }

    return <React.Fragment>
        {thisTodo ? <React.Fragment>
            <TodoForm onCancel={() => setThisTodo(null)} todo={thisTodo} onSubmit={saveTodo}/>
            <Divider style={{ marginBottom : '20px'}}/>
        </React.Fragment> : <Center style={{ marginBottom: '10px'}}>
            <Button onClick={() => setThisTodo({})}>Yeni Kayıt</Button>
        </Center>}

        <Center>
            <List
                spacing="xs"
                size="sm"
                center
                icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <IconCircleCheck size={16}/>
                    </ThemeIcon>
                }
            >
                {todos.map(todo =>
                    <List.Item
                        style={{width : '500px'}}
                        key={todo.id}
                        icon={todo.isCompleted ? <ThemeIcon color="teal" size={24} radius="xl">
                                <IconCircleCheck size={16}/>
                            </ThemeIcon> :
                            <ThemeIcon color="blue" size={24} radius="xl">
                                <IconCircleDashed size={16}/>
                            </ThemeIcon>}
                    >
                        <Group style={{width : '500px'}} position={"apart"} grow>
                            <Group>
                                <Text>{todo.content}</Text>
                            </Group>
                            <Group noWrap>
                                <ActionIcon onClick={() => handleClickTodo(todo)}>
                                    <IconEdit size={16} />
                                </ActionIcon>
                                {todo.isCompleted ? <ActionIcon
                                    onClick={() => incompleteTodo(todo)}
                                >
                                    <IconBan size={16} />
                                </ActionIcon>: <ActionIcon
                                    onClick={() => completeTodo(todo)}
                                >
                                    <IconCheck size={16} />
                                </ActionIcon>}
                                <ActionIcon onClick={() => eraseTodo(todo.id)}>
                                    <IconTrash color="red" size={16} />
                                </ActionIcon>
                            </Group>
                        </Group>
                    </List.Item>)}
            </List>
        </Center>
    </React.Fragment>
}