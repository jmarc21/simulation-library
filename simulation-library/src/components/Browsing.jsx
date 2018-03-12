import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Browsing extends Component{
    constructor(){
        super();
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        axios.get('/api/get-all-books').then(res => {
            console.log(res)
            this.setState({
                books: res.data
            })
        })
    }
    render(){
        let mappedBooks = this.state.books.map((e,i) => {
            return (
                <div key={i}>
                    <h1>{e.booktitle}</h1>
                    <h2>{e.author}</h2>
                    <h2>{e.genre}</h2>
                    <Link to='/details'><div>Details</div></Link>
                </div>
            )
        })
        return(
            <div>
                                {/* 42J */}
                <Link to='/details/1'><div>Featured Book</div></Link>
                {mappedBooks}
            </div>
        )
    }
}