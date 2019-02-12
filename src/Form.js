import React, {Component, Fragment} from "react";

class Form extends Component {
    state ={value: ""}
    render(){
        return(
            <Fragment>
                <input onBlur={e => {
                    const { value } = e.target
                    this.setState({
                        value
                    })
                }} type="text" name="city" placeholder="City"/>
                    <button id = "txt"
                        onClick={e=>{
                        this.props.weatherMethod(this.state.value)
                    }}>Get weather</button>
            </Fragment>
        );
    }
}


export default Form