import { Component } from "react";
import InputForm from "./InputForm";
import ListItem from "./ListItem";

class TodoAppHome extends Component {

    state = {
        currentItem: " ",
        todoItems: [],
    }

    handleChange = (event) => {
        console.log("input event: ", event);
        this.setState({currentItem: event.target.value});
    }

    HandleNewItemOnSubmit = (event) => {
        event.preventDefault();
        this.setState({todoItems: this.state.todoItems.concat(this.state.currentItem)})
        this.setState({currentItem: ""})
    }

    render() {
        return (
            <>
                <h1>Todo List App</h1>
                {/* Input form for the todo list app */}
                <InputForm currentItem={this.state.currentItem} handleChange={this.handleChange} HandleNewItemOnSubmit={this.HandleNewItemOnSubmit}/>

                {/* List view of the Todo Items */}
                <ListItem todoItems = {this.state.todoItems}/>
            </>
        )
    }
}

export default TodoAppHome;
