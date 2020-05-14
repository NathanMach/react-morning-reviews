import React, { Component } from 'react';
import List from './components/List'

import './App.css'

// export default class App extends Component{
//     constructor(){
//         super()

// }


// render() {
//     return <div>the most amazing movie list</div>
//     }
// }

export default function App() {
    return(
        <div className='App'>
            <h1 className='movie-list-title'>the most amazing list</h1>
            <List />
        </div>
    )
}


