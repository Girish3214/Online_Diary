import React, { useState, useEffect } from 'react'
import Note from "./Note";
import axios from 'axios'
import "../styles/section.css";

const Section = () => {
    const months = Array.from({length: 12}, (e, i)=> {
        return new Date(null, i+1, null).toLocaleString("en", {month: "short"})
    })
    
    const [notes, setNotes]=useState([]);
    
    const [sort, setSort] = useState("All");
    const [month, setmonth] = useState("Jan");

    const [newNotes, setNewNotes] = useState(notes)
    
    useEffect(() => {
        loadNotes();
    },[])
        
    // getting data from API------

    const loadNotes = async() => {
        const note = await axios.get("http://localhost:3003/notes");
        setNotes(note.data.reverse());
        // sort ==="latest" ? setNotes(note.data.reverse()) : setNotes(note.data);

    }

            
    useEffect(()=> {
        loadMonth();
        sortingHandler();
    },[sort, month]);


    // notes=newNotes;
    const sortHandler = (e) => {
        setSort(e.target.value);
    }

    const sortingHandler = () => {
        switch(sort){
            case "All" : setNotes(notes);
            break;
            case "latest" : setNotes(notes.reverse());
            break;
            case "oldest"  : setNotes(notes.reverse());
            break;
            default: setNotes(notes.reverse());

        }
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
        <div className="container">
                <div>
                    <select className="inputText"  onChange={sortHandler}>
                        <option value="All" defaultValue>All</option>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
                <div>
                    <select className="inputText" onChange={monthHandler} defaultValue>
                        {months.map((mont, x)=>(                        
                            <option value={mont} key={ x + 1 }>
                                {mont}
                            </option>
                        ))}

                    </select>
                </div>

            {sort ==="All"? (notes.map( (noteItem, index) => {
                return (
                    <Note key={index} id={noteItem.id} date={noteItem.date} title={noteItem.title} 
                content={noteItem.content} loadNotes={loadNotes}
                />);
            })): (newNotes.map( (noteItem, index) => {
                return (
                    <Note key={index} id={noteItem.id} date={noteItem.date} title={noteItem.title} 
                content={noteItem.content} loadNotes={loadNotes}
                />);
            }))}
        </div>
    )
}

export default Section
