import React from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';

function UpdateExam({ id, onUpdateExam }) {
    const navigate = useNavigate()
    function handleUpdate() {
        fetch(`https://virtualschools.herokuapp.com/exams${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
        onUpdateExam(id)
        navigate('/')
    }

    function submit() {
        confirmAlert({
            title: "Update Exam",
            message: "Are you sure you want to update exam?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => handleUpdate()
                },
                {
                    label: "No",
                    onClick: () => null
                }
            ]
        })
    }
    return (
        <div>
            <button onClick={submit} id={id} className="comment">Update Exam</button>
        </div>
    )
}

export default UpdateExam