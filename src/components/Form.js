import React, { useState } from 'react'
import "../styles/form.css"

const Form = ( { setInputText }) => {
    const [note, setNote] = useState({
        date: "",
        title: "",
        content: ""
      });

    const handleChange = (event) => {
        const {  name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]:  value
          };
        });
      }

    const submitHandler = (e) => {
        e.preventDefault();
        setInputText(note);
        setNote({
            date: "",
            title: "",
            content: ""
        })
    }
    return (
        <div>
            <form className="form-container" >
                <input name="date" value={note.date} className="inputDateText" type="date"  onChange={handleChange}/>
                <input name="title" value={note.title}  className="inputText" type="text" placeholder="Title of Topic" onChange={handleChange} />
                <textarea name="content" value={note.content} className="inputTextArea" placeholder="Start" onChange={handleChange} />
                <button className="submit-btn" onClick={submitHandler}>ADD</button>
            </form>
        </div>
    )
}

export default Form
