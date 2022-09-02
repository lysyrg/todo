import {Button, Center, Container, Input} from "@mantine/core";
import React, { useState } from "react";

export default function UserInput({ onSubmit }) {
    const [username, setUsername] = useState("");

    return <Container style={{ height: '100vh'}}>
        <Container py={200}>
            <Center><Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={ { width: '300px' } }
                placeholder="Kullanıcı Adı"
            /></Center>
            <Center py={15}>
                <Button onClick={() => onSubmit(username)}>Giriş Yap</Button>
            </Center>
        </Container>
    </Container>
}