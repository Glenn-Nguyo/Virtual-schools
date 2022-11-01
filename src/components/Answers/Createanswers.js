import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateAnswer= () => {
    const [answer, setAnswer] = useState({
      question: "",
      answers: "",
      school_id: "",
      course_id: "",
      
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    function handleChange(e) {        
        setAnswer({ ...answer, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/answers", {
          method: "POST",
          // credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answer),
        }).then((r) => {
          if (r.ok) {
            navigate("/answers");
          } else {
            r.json()
            .then((err) => setErrors(err.errors));
          }
        })
    }

    const errorMessage = (errors.map((error, index)=>(
      <ul>
        <li className='error' key={index}>{error}</li>
      </ul>
    )))
  return (
    <div className='containCreateForm'>
      {errors.length > 0?  errorMessage : null}

      <form onSubmit={handleSubmit} className="addForm" >
			<input type="text" 
				defaultValue= {question }
        placeholder= "Enter Question"
				name= "question"
				onChange= {handleChange}
				 />

        <input type="text" 
				defaultValue={answers}
        placeholder="Enter Answers"
				name="answers"
				onChange={handleChange}
				 />
         
         <input type="text" 
				defaultValue={answer.school_id}
        placeholder="Enter Student School_id"
				name="school_id"
				onChange={handleChange}
				 />
         <input type="text" 
				defaultValue={student.course_id}
        placeholder="Enter Student Course_id"
				name="course_id"
				onChange={handleChange}
				 />
         
                        
			<br />
			
			<br />
			<input type="submit"  value="Submit"/>
		</form>
    </div>
  );
}

export default CreateAnswer