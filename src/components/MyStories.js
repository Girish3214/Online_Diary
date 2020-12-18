import React from 'react'
import Notes from "./Notes";

const MyStories = ({ notes, setNotes }) => {
    // console.log("MyStories set Notes")
    // console.log(setNotes)
    return (
        <div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    )
}

export default MyStories
