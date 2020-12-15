import React, { useState } from 'react'
import Form from "./Form";
import Note from "./Note";
import "../styles/section.css";

const Section = () => {
    
    const [notes, setNotes]=useState([]);

    const addNote = (newNote) => {
 
     setNotes(prevNote =>{
        return [...prevNote, newNote];
     })
     }
 
     const deleteNote = (id) => {
 
         setNotes(prevNote =>{
             return  prevNote.filter(( noteItem , index)=>{
                 return index !== id;
             });
         });
     }

    const editNote = (id) => {
        
    }

    return (
        <div className="main-body">
            <Form setInputText={addNote} />
            {notes.map( (noteItem, index) => {
                return (<Note key={index} id={index} date={noteItem.date} title={noteItem.title} content={noteItem.content} 
                   onDelete={deleteNote} onEdit={editNote}
                />);
            })}
        </div>
    )
}

export default Section
