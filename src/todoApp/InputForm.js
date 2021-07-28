import { Component } from "react";

class InputForm extends Component {

    render() {
        return (
            <>
                <form onSubmit = {this.props.HandleNewItemOnSubmit}>
                    <label>New task </label>
                    <input type="text" placeholder="Add to next task here" value={this.props.currentItem} onChange= {this.props.handleChange}/>
                    <br/>
                    <button onClick={this.props.HandleNewItemOnSubmit}>Add item</button>
                </form>
            </>
        )
    }
}

export default InputForm;