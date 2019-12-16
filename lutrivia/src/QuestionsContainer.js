import React, {Component} from 'react'
import QuestionBox from './QuestionBox'

class QuestionsContainer extends Component {


    changeAnswer = (answer, index) => {
        this.props.changeAnswers(answer, index)
    }

    // iterate through each of the questions and map a QuestionBox component. QuestionBox takes the changeAnswer function in this component, parts of the question, a key, the index of the question, and a selected answer.
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.questions.map((question, index) => {
                   return <QuestionBox changeAnswer={this.changeAnswer} {...question} key={question.text} index={index} selectedAnswer={this.props.answers[index]} />
                })}
            </div>
        )
    }
}

export default QuestionsContainer