import React, {Component} from 'react'

class Header extends Component {

    render() {
        return (
            <header>
                <h1>Lutrivia</h1>
                <button>New Game</button>
                <div>Score: <span>{this.props.score}</span></div>
            </header>

        )
    }
}

export default Header