import React, { Component } from 'react'
import tenor from './tenor.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={tenor} alt='loading'/>
      </div>
    )
  }
}
