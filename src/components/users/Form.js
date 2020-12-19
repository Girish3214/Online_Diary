import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import "../../styles/form.css"

const Form = () => {
  let history = useHistory();
  
  const [note, setNote] = useState({
    id: "",
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
        await axios.post("http://localhost:3003/notes", note);
        history.push("/");
    }
    return (
        <div  className="main-body">
            <form className="row g-3 needs-validation form-container" onSubmit={submitHandler} >
                  <div className="col-md-4">
                    <label for="validationCustom01" className="form-label label-text">Set Date*</label>
                    <input type="date" className="inputText" id="validationCustom01" name="date" value={date} onChange={handleChange} required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label for="validationCustom02" className="form-label label-text">Title*</label>
                    <input type="text" className="inputText" id="validationCustom02" name="title" value={title} onChange={handleChange} required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div>
                    <label for="validationCustom02" className="form-label label-text">Content*</label>
                    <textarea type="textArea" className="inputTextArea " id="validationCustom02" name="content" value={content} onChange={handleChange}  required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="submit-btn btn btn-primary" type="submit">Add</button>
                <Link to="/" ><button className="btn btn-primary submit-btn">Cancel</button></Link>
                  </div>
            </form>
        </div>
    )
}

export default Form
