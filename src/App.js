import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Repo from './components/Repo/Repo'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      repoList: [
        {
          title: 'personal-project',
          description: 'FurBook was cool',
          language: 'JavaScript'
        },
        {
          title: 'WTF',
          description: 'You got dis',
          language: 'React BOIZ'
        },
        {
          title: 'Juju-project',
          description: 'FurBook was cool',
          language: 'JavaScript'
        }
      ]
    }
  }
  render(){
    const {repoList} = this.state
    const repos = repoList.map(function (element, index){
      return <Repo key={index} project={element}/>
    })

    
    return (
      <div className="App">
        <Header />
        <Profile />
       {repos}
      </div>
    )
  }
}

export default App;
