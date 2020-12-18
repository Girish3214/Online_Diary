import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from "react-router-dom";
import axios from 'axios'

const Edit = () => {
    let history = useHistory();
    const { id } = useParams();
    const [note, setNote] = useState({
        date: "",
        title: "",
        content: ""
      });

      const { date, title, content } = note;

    const handleChange = (event) => {
        const {  name, value } = event.target;
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]:  value
          };
        });
      }

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/notes/${id}`, note);
        history.push("/");
    }

    useEffect(() => {
        loadNotes();
    }, [])

    const loadNotes = async() => {
        const note = await axios.get(`http://localhost:3003/notes/${id}`);
        setNote(note.data)
    }

    return (
        <div  className="main-body">
            <form className="form-container" >
                <input name="date" value={date} className="inputDateText" type="date"  onChange={handleChange}/>
                <input name="title" value={title}  className="inputText" type="text" placeholder="Title of Topic" onChange={handleChange} />
                <textarea name="content" value={content} className="inputTextArea" placeholder="Start" onChange={handleChange} />
                <button className="submit-btn" onClick={submitHandler}>Edit</button>
                <Link to="/" ><button className="submit-btn">Cancel</button></Link>
            </form>
        </div>
    )
}

export default Edit
