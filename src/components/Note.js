import React from 'react'
import "../styles/note.css"

const Note = ({ date, title, content, onDelete, onEdit, id}) => {

    const deleteHandler = () => {
        onDelete(id);
    }

    const editHandler = () => {
        onEdit(id);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{content}</p>
            <div className="btn-container">
                <button className="btn" onClick={editHandler} >Edit</button>
                <button className="btn" onClick={deleteHandler} >delete</button>
            </div>

        </div>
    )
}

export default Note
