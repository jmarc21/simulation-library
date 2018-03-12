import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component{
    constructor(){
        super();
        this.state = {
            featured: {},
        }
    }
    componentDidMount(){
                    //42K
        const id = this.props.match.params.id
        axios.get(`/api/getBook/${id}`).then(res => {
            this.setState({
                featured: res.data[0]
            })
        })
    }
    render(){ 
        console.log(this.state.featured)
        var e = this.state.featured
        return(
            <div>
                <div>
                    <h1>{e.booktitle}</h1>
                    <h2>{e.author}</h2>
                    <h2>{e.genre}</h2>
                </div>
            </div>
        )
    }
}