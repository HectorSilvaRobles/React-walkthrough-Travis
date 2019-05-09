import React, { Component } from 'react'
import './header.css'
import images from '../../Media/images.png'
import bell from '../../Media/bellIcon.png'
import plus from '../../Media/plus_Icon.png'
import icon from '../../Media/faceicon.png'

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(val){
        this.setState({
            input: val
        })
    }


    render(){
        return (
            <div className='header'>
                <div className='header-inner-div'>
                    <img src={images} className='logo'/>

                    <input value={this.state.input}onChange={(event) => this.handleChange(event.target.value)}/>
                    <ul>
                        <li>Pull Request</li>
                        <li>Issues</li>
                        <li>Market Place</li>
                        <li>Explore</li>
                    </ul>
                </div>

                <h1>{this.state.input}</h1>

                
                <div className='header-inner-div'>
                    <img className='header--right-image' src={bell} />
                    <img className='header--right-image' src={plus}/>
                    <img className='header--right-image' src={icon}/>
                </div>
            </div>
        )
    }
}

export default Header;