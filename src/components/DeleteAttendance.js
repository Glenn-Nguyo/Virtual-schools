import React from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';

function DeleteAttendance({ id, onDeleteAttendance }) {
    const navigate = useNavigate()
    function handleDelete() {
        fetch(`https://virtualschools.herokuapp.com/attendances${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        onDeleteAttendance(id)
        navigate('/')
    }

    function submit() {
        confirmAlert({
            title: "Confirm deletion",
            message: "Are you sure you want delete?",
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
            <button onClick={submit} id={id} className="comment">Delete</button>
        </div>
    )
}

export default DeleteAttendance