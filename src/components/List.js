import React, {Component} from 'react'
import ListItem from './ListItem'
import movieData from '../data/movies.json'

export default class List extends Component {
    constructor() {
        super()
        
        this.state= {
            movies: movieData
        }
    }
    
    render() {
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movie} />
        })
    return  <div>{moviesMap}</div>
    }
}
