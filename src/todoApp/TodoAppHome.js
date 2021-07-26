import { Component } from "react";
import InputForm from "./InputForm";
import ListItem from "./ListItem";

class TodoAppHome extends Component {

    state = {
        currentItem: " ",
    }

    handleChange = (event) => {
        console.log("input event=", event);
        this.setState({currentItem: event.target.value});
    }

    render() {
        return (
            <>
                <h1>Todo List App</h1>
                {/* Input form for the todo list app */}
                <InputForm currentItem={this.state.currentItem} handleChange={this.handleChange}/>

                {/* List view of the Todo Items */}
                <ListItem/>
            </>
        )
    }
}

export default TodoAppHome;
