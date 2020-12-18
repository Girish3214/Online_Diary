import React, { useState, useEffect } from 'react'
import Note from "./Note";
import axios from 'axios'
import "../styles/section.css";

const Section = () => {
    const months = Array.from({length: 12}, (e, i)=> {
        return new Date(null, i+1, null).toLocaleString("en", {month: "short"})
    })
    
    const [notes, setNotes]=useState([]);
    
    const [sort, setSort] = useState("latest");
    const [month, setmonth] = useState("Jan");

    const [newNotes, setNewNotes] = useState([])

        

            
    useEffect(()=> {
        loadNotes();
        loadMonth();
    },[sort, month]);

    // getting data from API------

    const loadNotes = async() => {
        const note = await axios.get("http://localhost:3003/notes");
        sort ==="latest" ? setNotes(note.data.reverse()) : setNotes(note.data);

    }


    
    const sortHandler = (e) => {
        setSort(e.target.value);
    }


    const monthHandler = (e) => {
        setmonth(e.target.value);    
    }

    const loadMonth = () => {
        setNewNotes(notes.filter((note) => {
            let l = new Date(note.date).getMonth();
           return ((months[l] === month) === true ? note : "") ;
        })
        )
    }

    // storing into local storage --------

    // const saveLocal = () => {
    //     localStorage.setItem("notes", JSON.stringify(notes));
    // }

    // const getLocalNotes = () =>{
    //     if (localStorage.getItem("notes") === null ) {
    //     localStorage.setItem("notes", JSON.stringify([]));
    //     } else {
    //     let localNote = JSON.parse(localStorage.getItem("notes"));
    //     setNotes(localNote);

    //     }
    // }

    // useEffect( () => {
    //     getLocalNotes();
    // },[]);


    // let note = notes;
    // if(notes === undefined){
    //     note = JSON.parse(localStorage.getItem("notes"));
        
    // }

  
    return (
        <div>
        <div>
                    <select onChange={sortHandler} defaultValue>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
                <div>
                    <select onChange={monthHandler} defaultValue>
                        {months.map((mont, x)=>(                        
                            <option value={mont} key={ x + 1 }>
                                {mont}
                            </option>
                        ))}

                    </select>
                </div>
                {newNotes === (month==="Jan" ? newNotes : notes)}

            {newNotes.map( (noteItem, index) => {
                return (
                    <Note key={index} id={noteItem.id} date={noteItem.date} title={noteItem.title} 
                content={noteItem.content} loadNotes={loadNotes}
                />);
            })}
        </div>
    )
}

export default Section
