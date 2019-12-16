import React from 'react'


function QuestionBox(props) {
    // styling if the selectedAnswer matches the button answer
    let styleAnswered = {
        backgroundColor: props.selectedAnswer === props.answer ? 'green' : 'red'
    }

    // checks if answer has already been selected. if not, moves it up to the Questions Container, which then moves it to the App to update the answers array.
    const handleClick = (e) => {
        if (props.selectedAnswer === null) {
            props.changeAnswer(e.target.innerText, props.index)
        }
    }
    return (
        <div>
            <div>{props.text}</div>
            <button onClick={handleClick} style={props.selectedAnswer === true ? styleAnswered : {}}>True</button>
            <button onClick={handleClick} style={props.selectedAnswer === false ? styleAnswered : {}}>False</button>
        </div>
    )
}

export default QuestionBox