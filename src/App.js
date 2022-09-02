import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserInfo from "./components/UserInfo";
import TodoList from "./components/TodoList";
import {Divider} from "@mantine/core";

function App() {
    const [username, setUsername] = useState(localStorage.getItem("username") || null);

    const handleUserInput = (un) => {
        if(un) {
            localStorage.setItem("username", un);
            setUsername(un);
        }
    };

    const handleLogout = () => {
        setUsername(null);
        localStorage.removeItem('username');
    };

    return (
        <React.Fragment>
            {username ?
                <React.Fragment>
                    <UserInfo username={username} onLogout={handleLogout}/>
                    <Divider style={{ marginBottom : '30px', marginTop: '10px'}}/>
                    <TodoList />
                </React.Fragment>
                : <UserInput onSubmit={handleUserInput}/>}
        </React.Fragment>
    );
}

export default App;
