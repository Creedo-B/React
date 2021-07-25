import { Component } from "react";
import InputForm from "./InputForm";

class TodoAppHome extends Component {
    render() {
        return (
            <>
                <h1>Todo List App</h1>
                {/* Input form for the todo list app */}
                <InputForm/>
            </>
        )
    }
}

export default TodoAppHome;
