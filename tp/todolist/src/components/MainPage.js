import React, { Component } from 'react'
import ListCadeau from './Listenoel'

class MainPage extends Component {

    render() {
        return (
            <div>
                <h1 className="mainTitle">Ma liste de cadeau pour le père Noël</h1>
                <ListCadeau/>
            </div>)
    }
}

export default MainPage
