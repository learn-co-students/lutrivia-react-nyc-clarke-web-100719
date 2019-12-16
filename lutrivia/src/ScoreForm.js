import React, {Component} from 'react'

class ScoreForm extends Component {

    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // send score to parent via a function, where it'll make a fetch or whatever it needs to do to populate a score
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" value="Submit Score" onSubmit={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default ScoreForm