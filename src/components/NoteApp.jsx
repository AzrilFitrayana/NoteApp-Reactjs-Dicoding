import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/index';

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
    }

    handlerOnDelete(id){
        const notes =  this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return(
            <div className="note-app__body">
                <NoteList notes={this.state.notes} onDelete={this.handlerOnDelete} />
            </div>
        );
    }
}

export default NoteApp;