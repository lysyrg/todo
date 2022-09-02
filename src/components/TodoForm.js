import React, {useEffect, useState} from "react";
import {Button, Center, Container, Input} from "@mantine/core";
import { showNotification } from '@mantine/notifications';
import { IconX } from "@tabler/icons";

export default function TodoForm({ onSubmit, todo, onCancel }) {
    const [content, setContent] = useState(todo ? todo.content : "");

    useEffect(() => {
        setContent(todo && todo.id ? todo.content : "");
    }, [todo]);

    const handleSubmit = () => {
        if(content === null || content.length < 3) {
            showNotification({
                message: 'En az üç karakter giriniz',
                color: 'red',
                icon: <IconX />,
            });
            return;
        }
        if(todo && todo.id) {
            onSubmit({
                ...todo,
                content
            })
        } else {
            onSubmit({
                content
            })
        }
    }

    return <Container>
        <Center><Input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={ { width: '300px' } }
            placeholder="Yapılacak iş"
        /></Center>
        <Center py={15}>
            <Button onClick={handleSubmit} style={{ marginRight: '10px'}}>Kaydet</Button>
            <Button color={"red"} onClick={onCancel}>İptal</Button>
        </Center>
    </Container>
}