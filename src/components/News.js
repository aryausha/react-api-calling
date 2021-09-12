import React, { Component } from 'react'
import Axios from 'axios'
import { Avatar, Button,Card,CardActions,CardContent,CardHeader,CardMedia,CircularProgress, Collapse, Grid, IconButton, Typography } from '@material-ui/core'
// import MoreVertIcon from '@material-ui/icons/MoreVert';

export default class News extends Component {

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
        loadStatus:false
    }

     getData=()=>{
         this.setState({loadStatus:true})
         Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
             (response)=>{
                 console.log(response.data.articles)

                 this.setState({
                     news:response.data.articles,
                     loadStatus:false
                 })

                 
             }
         )

    }

    root= {
        maxWidth: 400,
      }
      media={
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
      
    //   avatar= {
    //     backgroundColor: red[500],
    //   }

    render() {
        return (
            <div>

                






{this.state.loadStatus ? <CircularProgress color="secondary" /> : 
(
    <Grid container>    {this.state.news.map( (value,index)=>{

           return <div>  <Grid item xs={12} sm={12} md={12}>


<Card style={this.root}>
<CardHeader


title={value.title}
subheader={value.publishedAt}
/>
<CardMedia
style={this.mediaImage}
// className={classes.media}
image={value.urlToImage}
/>
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
{value.description}
</Typography>
</CardContent>


</Card>
         
            </Grid>    </div> 
   
       } )}  </Grid>


   )}

    
</div>
         
        )
    }
}

