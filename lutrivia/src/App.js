import React from 'react';
import Data from './data'
import QuestionContainer from './QuestionContainer'
function App() {
  //header: Title - reset Game - Score
  // Questions Container - > questions
  //footer name form - submit form?
  return (
    <div>
    <QuestionContainer qs={Data.questions} />
    </div>
  );
}

export default App;
