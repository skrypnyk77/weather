import React, {Component} from "react";

class Weather extends Component{
    render(){
        const {error, className, ...model} = this.props;
        const keys = Object.keys(model);
        const showModel = !!keys.length;


        return(
            <div>
                    {showModel &&
                        <table>
                            <tbody>
                            {
                                keys.map(key =>
                                    (
                                        <tr key={key}>
                                            <td>{key}:</td>
                                            <td>{model[key]}</td>
                                        </tr>
                                     )
                                )
                            }
                            </tbody>
                        </table>
                    }
            <p>{error}</p>
            </div>
        )
    }
}


export default Weather