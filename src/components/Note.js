import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import "../styles/note.css"

const Note = ({ date, title, content, id, loadNotes}) => {

    const deleteHandler = async() => {
        await axios.delete(`http://localhost:3003/notes/${id}`);
        loadNotes();
    }

    return (
        <div className="note">
            <table className="table  table-striped table-hover table-bordered">

                <tbody>
                    <tr>
                        <td className="date-row">{date}</td>
                        <td className="title-row"><h1><Link id="title-link" to={`/user/view/${id}`}>{title}</Link></h1></td>
                        <td className="td-content">{content.length<50 ? <p>{content}</p> : <p>{ content.substring(0,75)}...<Link to={`/user/view/${id}`}>Read More</Link> </p>}</td>
                        <td className="btn-row"><Link to={`/users/edit/${id}`}>
                        <button className="btn" >Edit</button></Link></td>
                        <td className="btn-row"><button className="btn" onClick={deleteHandler}>delete</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Note
