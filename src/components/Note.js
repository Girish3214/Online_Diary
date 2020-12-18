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
        {/* <Link id="title-link" to={`/user/view/${id}`}><h1>{title}</h1></Link>
            <p>{date}</p>
            {content.length<50 ? <p>{content}</p> :<p>{ content.substring(0,50)}...<Link to={`/user/view/${id}`}>Read More</Link> </p>}
            <div className="btn-container">
               <Link to={`/users/edit/${id}`}>
                    <button className="btn" >Edit</button>
               </Link> 
                <button className="btn" onClick={deleteHandler}>delete</button>
            </div> */}


            <table class="table note">
                <tbody>
                    <tr>
                    <td>{date}</td>
                    <th scope="row"><Link id="title-link" to={`/user/view/${id}`}><h1>{title}</h1></Link></th>
                    <td>{content.length<50 ? <p>{content}</p> :<p>{ content.substring(0,50)}...<Link to={`/user/view/${id}`}>Read More</Link> </p>}</td>
                    <Link to={`/users/edit/${id}`}>
                    <button className="btn" >Edit</button>
               </Link>
               <button className="btn" onClick={deleteHandler}>delete</button>

                    </tr>

                </tbody>


            </table>

        </div>
    )
}

export default Note
