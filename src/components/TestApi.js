import { Button, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class TestApi extends Component {
    state={
        title:"",
        body:"",
        isLoading:false
    }
    getData=()=>
    {
        this.setState({
            isLoading:true
        })
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
            (response)=>{

                console.log(response.data.title)
                console.log(response.data.body)
                this.setState({
                    title:response.data.title,
                    body:response.data.body,
                    isLoading:false
                })

            }
        )
    }
    render() {
        return (
            <div>
                <Button onClick={this.getData} variant="contained" color="primary">submit</Button>
                {this.state.isLoading ? <CircularProgress /> :
                <div>
                    <p>{this.state.title}</p>
                <p>{this.state.body}</p>
                
                </div>
                }
                
            </div>
        )
    }
}
