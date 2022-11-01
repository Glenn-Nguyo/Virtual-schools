import React,{useEffect, useState} from 'react';
// import UpdateQuestion from './UpdateQuestion';

function CreateQuestions(handleAddNewQuestion){
    const [newQuestion, setNewQuestion] = useState({
        question: "",
        points: "",
        exam_id: "",
    })

    function handleChange(e) {
        setNewQuestion({...newQuestion,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        const questionObj  = {
            question: newQuestion.question,
            points: newQuestion.points, 
            exam_id: newQuestion.exam_id

        }

            fetch("https://virtualschools.herokuapp.com/questions",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(questionObj),
            })
            .then((res) => res.json())
            .then((question) => {
                handleAddNewQuestion(question);
            })
        }
    


    return (
        <div className="newItem">
            <form onSubmit={handleSubmit}>
                <div className="group-form">
                    <h3>Create question</h3>
                    <label for="Name" className="form-label">Question</label>
                    <input
                        className="form-control"
                        type="text"
                        name = "question"
                        value={newQuestion.question}
                        onChange={handleChange}
                        placeholder="Question"/>
                </div>
                
                <div>
                    <label for="points" className="form-label">Points</label>
                    <input
                        className="form-control"
                        type="text"
                        name="points"
                        value= {newQuestion.points}
                        onChange={handleChange}
                        placeholder="Points"/>
                </div>
                <div>
                    <label for="question_id" className="form-label">Exam Id</label>
                    <input
                        className="form-control"
                        type= "text"
                        name="exam_id"
                        value={newQuestion.exam_id}
                        onChange={handleChange}
                        placeholder="Enter Exam Id"/>
                </div>
        
               <div>
               <input
                    className=" mt-4 btn btn-primary"type="submit"/>
               </div>
        </form>
        </div>
        
    )
}

export default CreateQuestions;