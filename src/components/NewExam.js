import React, {useState} from 'react';

export default function NewExam (){
    const [examForm, setExamForm] = useState({
        title: "",
        exam_date: "", 
        start_time: "",  
        duration: "",  
        course_id: "", 
        owner_id: "",          
    })


    function inputChange(event){
        setExamForm({
            ...examForm,
            [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('https://virtualschools.herokuapp.com/exams', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                title:examForm.title,
                exam_date: examForm.exam_date,
                start_time: examForm.start_time,
                duration: examForm.duration, 
                course_id: examForm.course_id,
                owner_id: examForm.owner_id

            })
            }
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Title</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="title"
                    placeholder="Enter exam title"
                    value={examForm.title}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Exam_date</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="exam_date"
                    placeholder="Enter the date of the exam"
                    value={examForm.exam_date}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Start_time</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="start_time"
                    placeholder="Enter the exam start time"
                    value={examForm.start_time}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Duration</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="Duration"
                    placeholder="Enter duration of the exam"
                    value={examForm.duration}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Course_Id</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="course_id"
                    placeholder="Enter course_id"
                    value={examForm.course_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Owner_id</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="owner_id"
                    placeholder="Enter owner_id"
                    value={examForm.owner_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                        
            <input type="submit" value="Add Exam" />
        </form>
    )

}