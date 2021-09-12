import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

export default class MapApi extends Component {
    constructor(){
        super();
        this.getData()
    }

mediaImage= {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
    state={
        news:[],
        isLoading:false
    
    }
    getData=()=>
    {
        this.setState({isLoading:true})

        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                console.log(response.data.articles)
                this.setState({
                    news:response.data.articles,
                    isLoading:false
                })
            }
        )
    }
    root={
        maxWidth:400,
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ? <CircularProgress /> :
                                <Grid container> {this.state.news.map(
                                    (value,index)=>
                                    {
                                        return <div>

                                    <Grid item xs={12} sm={12} md={12}>

<Card style={this.root}>
    <CardHeader 
    title={value.title}
    subheader={value.publishedAt}
    />
    <CardMedia 
    style={this.mediaImage}
    image={value.urltoImage}
    />
    <CardContent>
        <Typography>
            discription={value.description}
        </Typography>
    </CardContent>
</Card>

</Grid>
                                        </div>

                                    }
                                )}
                                
                                </Grid>

                }
                
            </div>
        )
    }
}
