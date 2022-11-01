import React, {useState, useEffect} from 'react';
import Exam from './Exam';


export default function ExamList(){
    const [examInfo, setExamInfo] = useState([]);

    function handleExamFetch(){
        fetch ('https://virtualschools.herokuapp.com/exams')
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setExamInfo(data);
        })
    }
    useEffect(handleExamFetch, [])

    return (
        <div>
            <Exam examInfo = {examInfo}/>                       
        </div>
    );    
}