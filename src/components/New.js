import { Button, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class New extends Component {
    state={
            jsetup:"",
            jpunchline:"",
            isLoading: false
    }
    fetchData=()=>{
        this.setState({
            isLoading:true
        })
        axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (event)=>{
                console.log(event.data.setup)
                console.log(event.data.punchline)
                this.setState({
                    jsetup:event.data.setup,
                    jpunchline:event.data.punchline,
                    isLoading:false
                    
                })


            }
        )
    }
    render() {
        return (
            <div>
                <Button variant="contained"
                margin="normal"
                color="primary"
                onClick={this.fetchData}
                >ok</Button>
              {this.state.isLoading ? <CircularProgress color="primary"/>: 
              <div>
                    <p>{this.state.jsetup}</p>
                <p>
                    {this.state.jpunchline}
                </p>
                
              </div>
              } 
                
            </div>
        )
    }
}
