import React, { Component } from 'react'
import image from '../../Media/faceicon.png'
import './profile.css';

export default class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Hector'
        }
    }

    changeName = () => {
        const list=['Josh', 'Travis', 'Hunter', 'Zach'];
        this.setState({
            name: list[Math.floor(Math.random() * 4)]

        })
    }

    render(){
        return (
            <div className='profile'>
                <img src={image} className='profile-pic'/>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Edit Name</button>
            </div>
        )
    }
}