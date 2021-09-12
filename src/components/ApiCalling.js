import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class ApiCalling extends Component {
    state={
        joke_setup:"",
        joke_punchline:"", 
        jokes:[
            {
                joke:"testjoke",
                id:12
            },
            {
                joke:"testjoke5",
                id:13
            },
            {
                joke:"testjoke2",
                id:14
            }
        ]
    }
    fetchJokes=()=>
    {
        // this.setState({
        //     joke:"this is a test joke"
        // })
        axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response)=>{
              console.log(response.data.setup)
              console.log(response.data.punchline) 
              this.setState({
                  joke_setup:response.data.setup,
                  joke_punchline:response.data.punchline

              })
            }
        )
    }

    render() {
        return (
            <div>
                <Button variant="contained"
                margin="normal"
                fullWidth
                color="secondary"
                type="button"
                onClick={this.fetchJokes}>get a joke</Button>
                <p>{this.state.joke_setup}</p><br></br>
                <p>{this.state.joke_punchline}</p>
                <p>{this.state.jokes.map(
                    (value,index)=>{
                       return <div>
                            <p>{index}</p>
                        <p>{value.id}</p>
                        <p>{value.joke}</p>

                       </div>

                    }
                )}</p>
            </div>

        )
    }
}
