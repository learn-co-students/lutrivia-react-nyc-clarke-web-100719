import React from 'react'

const QuestionTile = (props) =>(
<div>
    <p>{props.text}</p>
    <p><button value={true} style={helper(props.status,props.answer)}onClick={(e) => props.handleClick(e.target.value,props.index)}>True</button>
       <button onClick={(e) => props.handleClick(e.target.value,props.index)} style={helper(props.status,props.answer)} value={false}>False</button>
    </p>
</div>
)

function helper(status, answer){
    if(status === null) return {backgroundColor:'white'}
    else if(status === answer){
        return{backgroundColor: 'green'}
    }
    else{
        return{backgroundColor:'red'}
    }
}
export default QuestionTile