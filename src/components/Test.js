import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Test extends Component {
    state={
        y:"" ,
        z:""

    }
    onHandle=()=>{
        axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (x)=>{
                console.log(x.data.setup)
                console.log(x.data.punchline)
                this.setState({
                    y:x.data.setup ,
                    z:x.data.punchline
                })

            }
        )
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.onHandle}>click</Button>
                <p>{this.state.y}</p>
                <p>{this.state.z}</p>
            </div>
        )
    }
}
