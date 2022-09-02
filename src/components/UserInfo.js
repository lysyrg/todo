import {Paper, Text, Group, Button, Container, Center} from '@mantine/core';

export default function UserInfo({ username, onLogout }) {
    return <Container>
        <Center>
            <Paper shadow="xs" p="md" style={{width : '300px'}}>
                <Group position={"apart"}>
                    <Group spacing={1}>
                        <Text>Hosgeldin:</Text>
                        <Text weight={"bold"}>{username}</Text>
                    </Group>
                    <Button onClick={onLogout}>Çıkış Yap</Button>
                </Group>
            </Paper>
        </Center>
    </Container>
}