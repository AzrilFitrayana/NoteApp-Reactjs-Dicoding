import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/index';
import NoteInput from "./NoteInput";

// function NoteApp() {
//     const notes = getInitialData();

//     return(
//         <div className="note-app__body">
//                 <NoteList notes={notes}/>
//         </div>
//     );
// }

class NoteApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData()
        }

        this.handlerOnDelete = this.handlerOnDelete.bind(this);
        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    }

    handlerOnDelete(id){
        const notes =  this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteEventHandler({title, body}){
        this.setState(prevState => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteEventHandler}/>
                <NoteList notes={this.state.notes} onDelete={this.handlerOnDelete} />
            </div>
        );
    }
}

export default NoteApp;