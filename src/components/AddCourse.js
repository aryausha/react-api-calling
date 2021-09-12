import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class AddCourse extends Component {
    state={
        courseTitle:"",
        courseDescription:"",
        courseDate:"",
        courseDuration:"",
        courseVenue:""
    }
    onHandleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value


        })
    }
    sendData=()=>
    {
        console.log(this.state)
        axios.post("http://localhost:8080/addcourse", this.state).then(
            (response)=>{
                console.log(response)

            }
        )
    }

    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        type="text"
                        fullWidth
                        required
                        label="Course Title"
                        name="courseTitle"
                        onChange={this.onHandleChange}
                        />



                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>

                     <TextField 
                        variant="outlined"
                        margin="normal"
                        type="text"
                        fullWidth
                        required
                        label="Course Description"
                        name="courseDescription"
                        onChange={this.onHandleChange}
                        /> 

                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>

                     <TextField 
                        variant="outlined"
                        margin="normal"
                        type="date"
                        fullWidth
                        required
                        label="Course Date"
                        name="courseDate"
                        onChange={this.onHandleChange}
                        />
                       

                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        type="text"
                        fullWidth
                        required
                        label="Course Duration"
                        name="courseDuration"
                        onChange={this.onHandleChange}
                        />
                         
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        type="text"
                        fullWidth
                        required
                        label="Course Venue"
                        name="courseVenue"
                        onChange={this.onHandleChange}
                        />
                       
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.sendData}
                        fullWidth

                        >Submit</Button>


                    </Grid>

                </Grid>
                
            </div>
        )
    }
}
