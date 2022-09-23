import React, { Component } from 'react'
import './header.css'
import './sidebar.css'
import './form.css'
import './table.css'
import './view.css'
import './welcome.css'
import './login.css'
import './profile.css'
import Form from './form'
import Table from './table'

import Routercontainer from './route-cotainer'

export default class extends Component {
  render() {
    return (
      <div>
        <Routercontainer />
      </div>
    )
  }
}
