import React, {useState, useEffect} from 'react';
import Question from './Question';


export default function QuestionList(){
    const [questionList, setQuestionList] = useState([]);

    function handleQuestionFetch(){
        fetch ('https://virtualschools.herokuapp.com/questions')
        .then ((res)=>res.json())
        .then ((questions)=>{
            setQuestionList(questions);
        })

    }
    useEffect(handleQuestionFetch, [])


    function handleQuestionUpdate(updatedQuestion){
        const updatedQuestionList = questionList.map((question) => {
          if(question.id === updatedQuestion.id){
            return updatedQuestion;
          }else{
            return question
          }
        });
        setQuestionList(updatedQuestionList);
    }


    


     let questions = questionList.map((item)=>{
         return (
        <Question handleQuestionUpdate={handleQuestionUpdate} key={item.id}questionList={questionList}  setQuestionList={setQuestionList} question={item.question} questionId={item.id}/>
      ) })


     return (
        <div>
             {questions}                    
         </div>
    );    
}