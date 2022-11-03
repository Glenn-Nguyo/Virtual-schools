import React, {useState, useEffect} from 'react';
import { NavItem } from 'reactstrap';
import Lesson from './Lesson';
import NewLesson from './NewLesson';


export default function LessonList({item}){
    const [lessonInfo, setLessonInfo] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt"));

    function handleLessonFetch(){
        fetch ('https://virtualschools.herokuapp.com/lessons',{
        headers: {
            Authorization: 'Bearer ' + jwt.jwt 
        }
    })
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// headers: {
//         "Content-Type": "application/json",
//         Authorization: 'Bearer ' + userInfo.jwt 
//       }
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setLessonInfo(data);
        })
    }
    useEffect(handleLessonFetch, [])

    return (
        <div>
            <Lesson lessonInfo = {lessonInfo} key = {lessonInfo.id}/>  
            {/* <NewLesson/>                      */}
        </div>
    );    
}