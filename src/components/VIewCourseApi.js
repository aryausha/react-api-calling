import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class VIewCourseApi extends Component {
    state={
        course:[]
    }
    FetchapiData=()=>
    {
        axios.get("http://localhost:8080/viewcourses").then(
            (response)=>{

                console.log(response.data)
                this.setState({
                    course:response.data
                })
            }
        )
    }
    render() {
        return (
            <div>
                <Button color="primary"
                variant="contained"
                type="button"
                onClick={this.FetchapiData}>Get Courses</Button>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>sl.no</TableCell>
                                <TableCell>courseTitle</TableCell> 
                                <TableCell>courseDescription</TableCell>
                                 <TableCell>courseDate</TableCell>
                                 <TableCell>courseDuration</TableCell>
                                 <TableCell>courseVenue</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {this.state.course.map(
                               (value,index)=>{
                                   return <TableRow>
                                       <TableCell key={index}>{index} </TableCell>
                                       <TableCell>{value.courseTitle}</TableCell> 
                                       <TableCell>{value.courseDescription}</TableCell>
                                       <TableCell>{value.courseDate}</TableCell>
                                       <TableCell>{value.courseDuration}</TableCell>
                                       <TableCell>{value.courseVenue}</TableCell>
                                   </TableRow>

                               }

                           )}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
        )
    }
}
