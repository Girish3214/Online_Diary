import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import Note from '../Note'

const Search = () => {

    const [notes, setNotes]=useState([]);

    // for searching ------------
    const [searchTerm, setSearchTerm ] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=> {
        const results = notes.filter( note => {
            return note.title.toLowerCase().includes(searchTerm)
        })
        setSearchResult(results);
    },[searchTerm])
  const searchHandler = (event) => {
      setSearchTerm(event.target.value);
    }        

    // getting data from API------

    const loadNotes = async() => {
        const note = await axios.get("http://localhost:3003/notes");
         setNotes(note.data.reverse());
    }

    return (
        <div className="search-container">
            <div>
                <label>Enter Title</label>
                <input name="search" type="text" value={searchTerm} placeholder="Title"  onChange={searchHandler} />
                {searchResult.map( (noteItem, index) => {
                return (
                    <Note key={index} id={noteItem.id} date={noteItem.date} title={noteItem.title} 
                content={noteItem.content} loadNotes={loadNotes}
                />);
            })}
            </div>
        </div>
    )
}

export default Search
