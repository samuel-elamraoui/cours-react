import React, { Component } from 'react'

class ListCadeau extends Component {

    constructor(props){
        super(props)
        this.state = {
            maList : [
                {name : 'Un chien', isBuy: false},
                {name :'Un velo', isBuy: false},
                {name : 'Une trotinette', isBuy: false},
                {name :'Un poignet', isBuy : false},
                {name : 'Une truite arc-en-ciel', isBuy: false}
            ],
            commande : false
        }
    }

    validItem = (item, index) =>  {
        this.setState(
            prevState => ({
                maList: prevState.maList.map(
                    el => el.name === item.name ? {...el, isBuy : !item.isBuy} : el
                )
            })
        )
    }
    displayImage = (value) => {
        // console.log("toto");
        this.setState({commande: !value})
    }

    render() {

        var santa;
        if(this.state.commande){
            santa = <img src="https://media.timeout.com/images/105644175/image.jpg" alt="santa"></img>
        } else {
            santa = <img className="dontDisplay" src="https://media.timeout.com/images/105644175/image.jpg" alt="santa"></img>
        }

        return (
            <div className="ListCadeau">
                <ul>
                    {this.state.maList.map((item, index) =>
                        <li className={ item.isBuy ? 'valid' : 'notValid'}
                            key={item.name}
                            onClick={() => this.validItem(item, index)}> {item.name}
                        </li>)
                    }
                </ul>
                <button className="btn" type="button"  onClick={() => this.displayImage(this.state.commande)}>Je commande !</button><br></br>
                {santa}
            </div>
        )
    }
}

export default ListCadeau
