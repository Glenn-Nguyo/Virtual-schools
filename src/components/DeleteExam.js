import React from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';

function DeleteExam({ id, onDeleteExam }) {
    const navigate = useNavigate()
    function handleDelete() {
        fetch(`https://virtualschools.herokuapp.com/exams${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        onDeleteExam(id)
        navigate('/')
    }

    function submit() {
        confirmAlert({
            title: "Confirm deletion",
            message: "Are you sure you want to delete?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => handleDelete()
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
            <button onClick={submit} id={id} className="comment">Delete Exam</button>
        </div>
    )
}

export default DeleteExam