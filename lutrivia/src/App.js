import React, {Component} from 'react';
import Header from './Header'
import QuestionsContainer from './QuestionsContainer'
import ScoreForm from './ScoreForm'
import questions from './data'

class App extends Component {
    state = {
        score: 0,
        questions: questions.questions,
        answers: questions.questions.map(() => null)
    }

    updateScoreByOne = () => {
        this.setState(previousState => {
            return {
                score: previousState.score + 1
            }
        }
        )
    }

    changeAnswers = (answer, questionIndex) => {
        // answer being passed back up is going to be text, convert to boolean. maybe another function to do this?
        if (answer === "True") {
            answer = true
        } else if (answer === "False") {
            answer = false
        }

        // if the answer is correct, increment the score
        if (answer === this.state.questions[questionIndex].answer) {
            this.updateScoreByOne()
        }

        // add to our answers array.
        this.setState(previousState => {
            let newState = {...previousState}
            newState.answers[questionIndex] = answer
            return {
                answers: newState.answers
            }
        })
    }

    
    render() {
        // Header takes the score and renders
        // Questions Container takes questions, answers, and the function changeAnswers
        // ScoreForm is not yet implemented
        return (
            <div>
                < Header score={this.state.score} />
                < QuestionsContainer questions={this.state.questions} answers={this.state.answers} changeAnswers={this.changeAnswers}/>
                < ScoreForm />

            </div>
        );
    }
}

export default App;
