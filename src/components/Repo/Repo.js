import React, { Component } from 'react'
import './repo.css'

export default class Repo extends Component {
    render() {
        return (
            <div className='repo'>
                <h1>{this.props.project.title}</h1>
                <h2>description</h2>
                <h3></h3>
            </div>
        )
    }
}