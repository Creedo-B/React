import { Component } from "react";

class InputForm extends Component {

    State = {
        currentItem: "",
    }

    handleChange = (event) => {
        console.log("input event=", event);
        this.setState({currentItem: event.target.value});
    }

    render() {
        return (
            <>
                <form>
                    <label>New task </label>
                    <input type="text" placeholder="Add to next task here" onChange= {this.handleChange}/>
                    <br/>
                    <button>Add item</button>
                </form>
            </>
        )
    }
}

export default InputForm;