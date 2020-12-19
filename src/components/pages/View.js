import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import '../../styles/note.css'
import axios from 'axios'


const View = () => {
    const [viewNote, setviewNote] = useState({})
    const { id } = useParams();
    useEffect(() => {
        viewHandler();
    },[]);

    const { date, title, content } = viewNote;

    const viewHandler = async() => {
        const viewNote = await axios.get(`http://localhost:3003/notes/${id}`);
        setviewNote(viewNote.data);
    }

    return (
        <div  className="view-note">
            <div>
                <h1>{title}</h1><hr />
                <h3>{date}</h3><hr />
                <p>{content}</p>
                <Link className="back-button" to="/" ><h3>Back</h3></Link>
            </div>
        </div>
    )
}

export default View
