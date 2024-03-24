import React from 'react'
import QuestionsEach from './QuestionsEach';

const QuestionsList = ({questionList}) => {
  
  return (
    <div style={{marginTop:"20px"}}>
      {questionList.map((question) => (
               <QuestionsEach question={question} key={question._id}/>
            ))}
    </div>
  )
}

export default QuestionsList
