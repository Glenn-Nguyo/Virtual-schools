import React from 'react';

export default function Exam({examInfo}){

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Exam_date</th> 
            <th scope="col">Start_time</th>
            <th scope="col">Duration</th> 
            <th scope="col">Course_Id</th>                        
          </tr>
        </thead>  
          <tbody>
            {examInfo.map((exam) => {
                return (
                  <> 
                  <tr className="table-secondary">
                    <td >{exam.id}</td>
                    <td >{exam.title}</td>
                    <td >{exam.exam_date}</td>  
                    <td >{exam.start_time}</td> 
                    <td >{exam.duration}</td>
                    <td >{exam.course_id}</td> 

                  </tr>
                  </> )     

            })}
            
          </tbody>        
      </table>         
    </div>  

)}