import React, { Component } from 'react'
import RegistationForm from './components/RegistationForm'
import ListUser from './components/ListUser'

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="container mt-3" style={{ backgroundColor: '#EEEEEE'}}>
        <RegistationForm/>
        <ListUser/>
      </div>
      </div>
    )
  }
}
