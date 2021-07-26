import { Component } from "react";

class InputForm extends Component {

    render() {
        return (
            <>
                <form>
                    <label>New task </label>
                    <input type="text" placeholder="Add to next task here" onChange= {this.props.handleChange}/>
                    <br/>
                    <h2>Prop: {this.props.currentItem}</h2>
                    <button>Add item</button>
                </form>
            </>
        )
    }
}

export default InputForm;