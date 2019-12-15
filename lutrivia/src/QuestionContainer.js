import React from 'react'
import QuestionTile from './QuestionTile'
export default class QuestionContainer extends React.Component{

    state={
        fqs:this.props.qs.map((q,ind) =>{return{...q,status:null,index:ind}}),
        score: 0
    }

    handleClick = (value,index) =>{
        if(this.state.fqs[index].status === null){
        let newQs = [...this.state.fqs]
        newQs[index].status = value === 'true'? true : false
        let updateScore = (newQs[index].status === newQs[index].answer)? this.state.score + 1 : this.state.score
        this.setState({fqs: newQs, score: updateScore})
        }
    }

    renderQuestions = () =>{
        return(this.state.fqs.map(q => <QuestionTile {...q} handleClick={this.handleClick}/>))
    }
    render(){
        console.log(this.state)
        return(<div>
            <p>Current Score: {this.state.score}</p>
            {this.renderQuestions()}
        </div>)
    }

}