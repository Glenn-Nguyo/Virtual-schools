import React from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';

function UpdateAttendance({ id, onUpdateAttendance }) {
    const navigate = useNavigate()
    function handleUpdate() {
        fetch(`https://virtualschools.herokuapp.com/attendances${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
        onUpdateAttendance(id)
        navigate('/')
    }

    function submit() {
        confirmAlert({
            title: "Update Attendance",
            message: "Are you sure you want to update attendance?",
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
            <button onClick={submit} id={id} className="comment">Update</button>
        </div>
    )
}

export default UpdateAttendance