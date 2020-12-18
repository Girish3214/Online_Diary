import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import Note from '../Note'
import '../../styles/search.css'

const Search = () => {


    const [notes, setNotes]=useState([]);
    
    // for searching ------------
    const [searchTerm, setSearchTerm ] = useState("");
    const [searchResult, setSearchResult] = useState(notes);

    useEffect(() => {
        setSearchResult(notes);
    }, [])

 
    useEffect(()=> {
        const results = notes.filter( note => {
            return note.title.toLowerCase().includes(searchTerm)
        })
        setSearchResult(results);
    },[searchTerm])
  const searchHandler = (event) => {
      setSearchTerm(event.target.value);
    }
    
    
    useEffect(()=> {
        loadNotes();
    },[]);

    // getting data from API------

    const loadNotes = async() => {
        const note = await axios.get("http://localhost:3003/notes");
         setNotes(note.data.reverse());
    }


    return (
        <div>
            <div id="search-container">
                <label>Enter Title</label>
                <input className="form-control inputText md-3"  autoComplete="off" name="search" type="text" value={searchTerm} placeholder="Title"  onChange={searchHandler} />
                <div>
                { searchTerm ==="" ? (notes.map( (noteItem, index) => {
                return (
                    <Note key={index} id={noteItem.id} date={noteItem.date} title={noteItem.title} 
                content={noteItem.content} loadNotes={loadNotes}
                />);
            })) : (searchResult.map( (noteItem, index) => {
                return (
                    <Note key={index} id={noteItem.id} date={noteItem.date} title={noteItem.title} 
                content={noteItem.content} loadNotes={loadNotes}
                />);
            }))}
                </div>
            </div>
        </div>
    )
}

export default Search
